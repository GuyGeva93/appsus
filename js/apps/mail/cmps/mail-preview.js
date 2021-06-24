import mailExpand from "./mail-expand.js"

export default {
  props: ['mail'],

  template: `
    <section class="mail-preview" :class="{read: mail.isRead}" >
      <tr @click.stop="mailExpand" class="mail-preview-container" >
        <td>{{mail.from}}</td>
        <td>{{mail.subject}}</td>
        <td>{{mail.sentAt}}</td>
        <mail-expand :mail="mail" v-if="isExpand" />
      </tr>
      <i v-if="mail.isRead" class="fa fa-envelope" @click.stop="mailRead" aria-hidden="true"></i>
      <i v-else class="fa fa-envelope-open" @click.stop="mailRead" aria-hidden="true"></i>
      <button class="btn-icon-trash" @click.stop="remove(mail.id)"><img  src="../img/trash-icon.png"></button>
    </section>
  `,

  data() {
    return {
      isExpand: false,
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
      this.mail.isRead = !this.mail.isRead
    },
    mailExpand() {
      this.isExpand = !this.isExpand
      this.expandMail();

    }
  },
  computed: {
    isRead() {
      return this.mail.isRead
    }
  },
  components: {
    mailExpand
  }
}