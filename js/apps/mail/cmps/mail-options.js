import { eventBus } from "../../../services/event-bus-service.js"

export default {
  props: ['mail'],

  template: `
  <section class="mail-preview-icons">
    <i v-if="!mail.isRead" id="read" class="fa fa-envelope" @click.stop="updateMail('read')" aria-hidden="true" />
    <i v-else class="fa fa-envelope-open" id="read" @click.stop="updateMail('read')" aria-hidden="true" />
    <i v-if="!mail.isStar" class="far fa-star" @click.stop="updateMail('star')"/>
    <i v-else class="fas fa-star" @click.stop="updateMail('star')"/>
    <i class="fas fa-trash-alt" @click.stop="removeMail(mail.id)"/>
  </section>
  `,

  methods: {
    updateMail(action) {
      if (action === 'read') this.mail.isRead = !this.mail.isRead
      else if (action === 'star') this.mail.isStar = !this.mail.isStar
      eventBus.$emit('updateMail', this.mail)
    },

    removeMail(mailId) {
      eventBus.$emit('removeMail', mailId)
    }
  },
}