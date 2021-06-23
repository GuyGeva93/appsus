import { mailService } from "../services/mail-service.js"
import mailList from "../cmps/mail-list.js"


export default {
  template: `
  <section class="mail-app">
    <h2>tMail</h2>
    <input type="text" placeholder="Search mail">
    <nav class="mail-app-nav">+ Compose | Inbox | Sent | Starred</nav>
    <mail-list :mails="mails" @removeMail="removeMail"/>
  </section>
  `,

  data() {
    return {
      mails: null
    }
  },

  methods: {
    removeMail(mailId) {
      console.log('mail-app: remove', mailId);
      mailService.remove(mailId);
    }
  },

  created() {
    this.mails = mailService.query()
    console.log(this.mails);
  },

  components: {
    mailList
  }
}