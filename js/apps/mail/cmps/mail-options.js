
export default {
  props: ['mail'],

  template: `
  <section class="mail-preview-icons">
    <i v-if="!mail.isRead" class="fa fa-envelope" @click.stop="mailRead" aria-hidden="true" />
    <i v-else class="fa fa-envelope-open" @click.stop="mailRead" aria-hidden="true" />
    <i v-if="!mail.isStar" class="far fa-star" @click.stop="mailStarred"/>
    <i v-else class="fas fa-star" @click.stop="mailStarred"/>
    <i class="fas fa-trash-alt" @click.stop="mailRemove(mail.id)"/>
  </section>
  `,

  methods: {
    mailRead() {
      this.mail.isRead = !this.mail.isRead
      this.$emit('mailRead', this.mail)
    },
    mailStarred() {
      this.mail.isStar = !this.mail.isStar
      this.$emit('mailStarred', this.mail)
    },
    mailRemove(mailId) {
      this.$emit('mailRemove', mailId)
    }
  },
}