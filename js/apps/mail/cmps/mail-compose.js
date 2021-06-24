import { mailService } from "../services/mail-service.js";



export default {
  template: `
  <form @submit.prevent="composeMail" class="mail-compose">
      <input type="text" v-model="newMail.from" placeholder="From">
      <input type="text" v-model="newMail.subject" placeholder="Subject">
      <textarea v-model="newMail.body" id="" cols="30" rows="10"></textarea>
      <button>SEND</button>
  </form>
  `,

  data() {
    return {
      newMail: {
        from: null,
        body: null,
        subject: null,
        isRead: false,
        sentAt: null
      }
    }
  },

  methods: {
    composeMail() {
      mailService.post(this.newMail)
      console.log('TODO - message to users');
      this.$router.push('/mail')

    }
  },

}