import { mailService } from "../services/mail-service.js";

export default {
  template: `
  <section>
  <form @submit.prevent="composeMail" class="mail-compose">
      <input type="text" v-model="newMail.from" placeholder="From">
      <input type="text" v-model="newMail.subject" placeholder="Subject">
      <textarea v-model="newMail.body" id="" cols="30" rows="10"></textarea>
      <button :class="{send: isSent}"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
  </form>
      <button @click.stop="addDraft">Save as draft</button>
  </section>
  `,

  data() {
    return {
      newMail: {
        from: null,
        body: null,
        subject: null,
        isRead: false,
        sentAt: null,
        isDraft: false,
      },
      isSent: false
    }
  },

  methods: {
    composeMail() {
      mailService.post(this.newMail)
      console.log('TODO - message to users');
      this.isSent = true
      setTimeout(() => {
        this.$router.push('/mail')
      }, 2500)

    },
    addDraft() {
      this.newMail.isDraft = true;
      mailService.post(this.newMail)
      this.$router.push('/mail')
    }
  },

}