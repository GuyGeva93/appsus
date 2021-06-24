import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.js'
import mailNav from '../cmps/mail-nav.js'
// import { eventBus } from '../../../services/event-bus-service.js'


export default {
    template: `
    <section class="mail-app">
      <header class="mail-app-header">
        <h2>G-mail</h2>
        <input type="text" placeholder="Search mail" v-model="searchBy" @input="search">
      </header>
      <section class="mail-app-container">
        <nav class="mail-nav">
        <router-link to="/mail-compose">
        <div class="link-compose"><img class="plus-icon" src="../img/plus-icon.png"> <span> Compose </span></div></router-link>
        <router-link @click.native="mailsToShow($route.path)" to="/mail">Inbox {{countMails}}</router-link>
        <router-link @click.native="mailsToShow($route.path)" to="/sent">Sent</router-link>
        <router-link @click.native="mailsToShow($route.path)" to="/draft">Draft</router-link>
     </nav>
        <mail-list :mails="filterMails" @removeMail="removeMail"/>
     </section>
    </section>
  `,

    data() {
        return {
            mails: [],
            filterMails: null,
            mailsCount: null,
            filterBy: null,
            searchBy: null
        }
    },

    methods: {
        loadMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                    this.mailsToShow()
                })
        },
        removeMail(mailId) {
            console.log('mail-app: remove', mailId);
            mailService.remove(mailId)
                .then(() => {
                    console.log('MSG to user')
                        // eventBus.$emit('show-msg', msg);
                    this.loadMails()
                })
        },
        setFilter(route) {
            this.filterBy = route
            console.log(this.filterBy);
        },
        mailsToShow(route) {
            this.filterBy = route
            if (!this.filterBy || this.filterBy === '/mail') {
                this.filterMails = this.mails.filter(mail => {
                    return (!mail.isDraft)
                })
                return this.filterMails
            } else if (this.filterBy === "/sent") {
                this.filterMails = this.mails.filter(mail => {
                    return (mail.isSent)
                })
                return this.filterMails
            } else if (this.filterBy === "/draft") {
                this.filterMails = this.mails.filter(mail => {
                    return (mail.isDraft)
                })
                return this.filterMails
            }

        },
        search() {
            this.filterMails = this.mails.filter(mail => {
                return mail.subject.includes(this.searchBy)
            })
            return this.filterMails
        }
    },

    computed: {
        countMails() {
            const mailsCount = this.mails.filter(mail => {
                if (!mail.isRead) return mail
            })
            console.log(mailsCount);
            return `(${mailsCount.length})`
        },

    },

    created() {
        this.loadMails()
    },

    components: {
        mailList,
        mailNav
    }
}