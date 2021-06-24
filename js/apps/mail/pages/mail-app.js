import { mailService } from "../services/mail-service.js"
import mailList from "../cmps/mail-list.js"
import mailNav from "../cmps/mail-nav.js"


export default {
    template: `
    <section class="mail-app">
      <header class="mail-app-header">
        <h2>G-mail</h2>
        <input type="text" placeholder="Search mail">
      </header>
      <section class="mail-app-container">
        <nav class="mail-nav">
        <router-link to="/mail-compose">
        <div class="link-compose"><img class="plus-icon" src="../img/plus-icon.png" alt=""> Compose</div></router-link>
        <router-link @click.native="mailsToShow($route.path); setFilter($route.path)" to="/mail">Inbox {{countMails}}</router-link>
        <router-link @click.native="mailsToShow($route.path); setFilter($route.path)" to="/sent">Sent</router-link>
        <router-link @click.native="mailsToShow($route.path) ; setFilter($route.path)" to="/draft">Draft</router-link>
     </nav>
       <!-- <router-view></router-view> -->
        <mail-list :mails="mails" @removeMail="removeMail"/>
     </section>
    </section>
  `,

    data() {
        return {
            mails: [],
            mailsCount: null,
            filterBy: '/mail',
        }
    },

    methods: {
        loadMails() {
            mailService.query()
                .then(mails => {
                    if (this.filterBy === '/sent') {
                        this.mails = mails.filter(mail => {
                            return (mail.isSent)
                        })
                    } else if (this.filterBy === '/draft') {
                        this.mails = mails.filter(mail => {
                            return (mail.isDraft)
                        })
                    } else {
                        this.mails = mails.filter(mail => {
                            return (!mail.isDraft)
                        })
                    }
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
        },
        mailsToShow() {
            this.loadMails()
        },
    },

    computed: {
        countMails() {
            const mailsCount = this.mails.filter(mail => {
                if (!mail.isDraft) return mail
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