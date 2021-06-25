import { eventBus } from "../../../services/event-bus-service.js"

export default {
  props: ['mail'],

  template: `
  <section class="mail-preview-icons">
    <i v-if="!mail.isRead" class="fa fa-envelope" @click.stop="readMail" aria-hidden="true" />
    <i v-else class="fa fa-envelope-open" @click.stop="readMail" aria-hidden="true" />
    <i v-if="!mail.isStar" class="far fa-star" @click.stop="starMail"/>
    <i v-else class="fas fa-star" @click.stop="starMail"/>
    <i class="fas fa-trash-alt" @click.stop="removeMail(mail.id)"/>
  </section>
  `,

  methods: {
    readMail() {
      this.mail.isRead = !this.mail.isRead
      eventBus.$emit('readMail', this.mail)
    },
    starMail() {
      this.mail.isStar = !this.mail.isStar
      eventBus.$emit('starMail', this.mail)
    },
    removeMail(mailId) {
      eventBus.$emit('removeMail', mailId)
    }
  },
}