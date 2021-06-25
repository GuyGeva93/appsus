import mailPreview from "./mail-preview.js"
import mailExpand from "./mail-expand.js"

export default {
  props: ['mails'],

  template: `
  <table class="mail-list" >
    <tbody>
      <mail-preview v-for="mail in mails" :key="mail.id" :mail="mail" @click="mailExpand"/>
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
    mailExpand() {
      this.isExpand = !this.isExpand
      this.mail.isRead = true
    }

  },

  components: {
    mailPreview,
    mailExpand
  },
}