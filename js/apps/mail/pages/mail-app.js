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
        <mail-nav />
        <mail-list :mails="mails" @removeMail="removeMail"/>
     </section>
    </section>
  `,

  data() {
    return {
      mails: null
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
  },

  created() {
    this.loadMails()
  },

  components: {
    mailList,
    mailNav
  }
}