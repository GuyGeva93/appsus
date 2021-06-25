import mailExpand from "./mail-expand.js"
import mailOptions from "./mail-options.js"

export default {
  props: ['mail'],

  template: `
    <section class="mail-preview" :class="{read: mail.isRead}" >
      <tr @click.stop="mailExpand" class="mail-preview-container" >
        <td>{{mail.from}}</td>
        <td>{{mail.subject}}</td>
        <td>{{mail.sentAt}}</td>
      </tr>
      <mail-expand :mail="mail" v-if="isExpand"/>
      <mail-options @mailStarred="mailStarred" @mailRemove="mailRemove"  @mailRead="mailRead" :mail="mail"/>
    </section>
  `,

  data() {
    return {
      isExpand: false,
      isStar: false,
    }
  },

  methods: {
    mailRemove(mailId) {
      this.$emit('mailRemove', mailId)
    },
    mailRead(mail) {
      this.$emit('mailRead', mail)
    },
    mailStarred(mail) {
      this.$emit('mailStarred', mail)
    },
    mailExpand() {
      this.isExpand = !this.isExpand
      this.mail.isRead = true
    }
  },
  computed: {
    isRead() {
      return this.mail.isRead
    }
  },
  components: {
    mailExpand,
    mailOptions
  }
}