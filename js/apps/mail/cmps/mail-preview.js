export default {
  props: ['mail'],

  template: `
    <section class="mail-preview" >
      <section @click.stop="mailRead" :class="{read: isRead}" class="mail-preview-container" >
        <span>{{mail.from}}</span>
        <span>{{mail.subject}}</span>
        <span>{{mail.sentAt}}</span>
        <section>sdlkfjsdlkfjksd;</section>
      </section>
      <button @click.stop="remove(mail.id)">Remove</button>
    </section>
  `,

  data() {
    return {
      isExpand: false
    }
  },

  methods: {
    remove(mailId) {
      console.log('mail-list: remove', mailId)
      this.$emit('removeMail', mailId)
    },
    expandMail(mailId) {
      console.log('mail-preview: expandMail:', mailId)
      this.mail.isRead = true
    },
    mailRead() {
      this.mail.isRead = true
      this.isExpand = !this.isExpand
      this.expandMail();
    },
  },
  computed: {
    isRead() {
      return this.mail.isRead
    }
  }
}