import { eventBus } from "../../../services/event-bus-service.js"
import { mailService } from "../services/mail-service.js"

export default {
  props: ['mail'],

  template: `
  <section class='mail-expand'>
    <span @click.stop="mailCompress" class="mail-expand-minimize">Click here to minimize</span>
    <article class="mail-expand-from padding">
      <span>From: {{mail.from}}</span>
      <span>{{mail.sentAt}}</span>
    </article>
    <input type="text" :value="mail.subject" v-show="isEdit.subject" @blur="edit">
    <span @click.stop="editDraft('subject')" v-show="!isEdit.subject" class="mail-expand-subject padding">Subject: {{mail.subject}}</span>
    <textarea cols="30" rows="10" :value="mail.subject" v-show="isEdit.body" />
    <span @click.stop="editDraft" class="mail-expand-body padding" v-show="!isEdit.body">{{mail.body}}</span>
   <button @click.stop="sendDraft(mail)">Send</button>
  </section>
  `,

  data() {
    return {
      isExpand: true,
      isEdit: {
        subject: false,
        body: false
      },
      subject: '',
      body: ''
    }
  },

  methods: {
    mailCompress() {
      this.$emit('mailCompress')
    },
    editDraft(toEdit) {
      if (!this.mail.isDraft) return
      if (toEdit === 'subject') this.isEdit.subject = !this.isEdit.subject
      else this.isEdit.body = !this.isEdit.body
      eventBus.$emit('updateMail', this.mail)
    },
    sendDraft(draft) {
      this.isExpand = false
      this.mailCompress()
      this.mail.isRead = false
      draft.isDraft = false
      draft.subject = this.subject
      draft.body = this.body
      this.$router.push({ path: '/mail' })
      eventBus.$emit('draftSent', draft)
    },
    edit(ev) {
      this.subject = ev.target.value
      this.body = ev.target.value
    },

  },

  components: {
    mailService
  },
}