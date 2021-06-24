
export default {
  props: ['mail'],

  template: `
    <div class="mail-preview" >
      <section @click.stop="mailRead" :class="{read: isRead}" class="mail-preview-container" >
        <span>{{mail.from}}</span>
        <span>{{mail.subject}}</span>
        <!-- <span>{{mail.isRead}}</span> -->
        <span>{{mail.sentAt}}</span>
      </section>
      <button @click.stop="remove(mail.id)">Remove</button>
    </div>
  `,

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
    },
  },
  computed: {
    isRead() {
      return this.mail.isRead
    }
  }
}