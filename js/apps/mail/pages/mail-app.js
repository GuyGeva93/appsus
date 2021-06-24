import { mailService } from "../services/mail-service.js"
import mailList from "../cmps/mail-list.js"
import mailNav from "../cmps/mail-nav.js"


export default {
  template: `
    <section class="mail-app">
      <header class="mail-app-header">
        <h2>tMail</h2>
        <input type="text" placeholder="Search mail">
      </header>
      <section class="mail-app-container">
        <nav class="mail-nav">
        <router-link to="/mail-compose">+ Compose</router-link>
        <router-link @click.native="mailsToShow($route.path); setFilter($route.path)" to="/mail">Inbox {{countMails}}</router-link>
        <router-link @click.native="mailsToShow($route.path); setFilter($route.path)" to="/sent">Sent</router-link>
        <button>Starred</button>
     </nav>
       <router-view></router-view>
        <mail-list :mails="mails" @removeMail="removeMail"/>
     </section>
    </section>
  `,

  data() {
    return {
      mails: [],
      filterBy: '/mail'
    }
  },

  methods: {
    loadMails() {
      mailService.query()
        .then(mails => {
          console.log(this.filterBy);
          if (this.filterBy === '/sent') {
            this.mails = mails.filter(mail => {
              return (mail.isSent)
            })
          } else {
            this.mails = mails
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
    mailsToShow(route) {
      if (route === '/mail' || route === '/inbox') this.loadMails()
      else if (route === '/sent') {
        const mailsToShow = this.mails.filter(mail => {
          return (mail.isSent)
        })
        this.mails = mailsToShow
      }
    },
  },

  computed: {

    countMails() {
      return `(${this.mails.length})`
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