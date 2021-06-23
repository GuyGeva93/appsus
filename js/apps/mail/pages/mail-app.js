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
        <router-link @click.native="filterMails($route.path)" to="/mail">Inbox</router-link>
        <router-link @click.native="filterMails($route.path)" to="/sent">Sent</router-link>
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
      filterBy: null
    }
  },

  methods: {
    loadMails() {
      mailService.query()
        .then(mails => this.mails = mails)
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
    filterMails(route) {
      if (route === '/mail') this.loadMails();

      else if (route === '/sent') {
        let filteredMails = []
        filteredMails = this.mails.filter(mail => {
          return (mail.isSent)
        })
        this.mails = filteredMails
      }
    }
  },

  computed: {
    mailsToShow() {
      console.log(this.$route.path);
      this.filterMails(this.$route.path)
    }
  },

  created() {
    this.loadMails()
  },

  components: {
    mailList,
    mailNav
  }
}