import mailPreview from "./mail-preview.js"
import mailExpand from "./mail-expand.js"

export default {
  props: ['mails'],

  template: `
  <table class="mail-list">
    <tbody>
      <mail-preview v-for="mail in mails" :key="mail.id" :mail="mail" @mailRemove="mailRemove"
      @mailStarred="mailStarred" @mailRead="mailRead" @click="mailExpand"/>
    </tbody>
  </table>
  `,

  data() {
    return {
      currMailId: null,
      isExpand: false
    }
  },

  methods: {
    mailRemove(mailId) {
      this.$emit('mailRemove', mailId)
    },
    mailStarred(mail) {
      this.$emit('mailStarred', mail)
    },
    mailRead(mail) {
      this.$emit('mailRead', mail)
    },
    mailExpand() {
      this.currMailId = this.mail.id
      this.isExpand = !this.isExpand
      this.mail.isRead = true
    }

  },

  components: {
    mailPreview,
    mailExpand
  },
}