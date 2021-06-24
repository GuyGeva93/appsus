export default {
    props: ['mail'],

    template: `
    <section class="mail-preview" >
      <tr @click.stop="mailRead" :class="{read: isRead}" class="mail-preview-container" >
        <td>{{mail.from}}</td>
        <td>{{mail.subject}}</td>
        <td>{{mail.sentAt}}</td>
</tr>
      <button class="btn-icon-trash" @click.stop="remove(mail.id)"><img  src="../img/trash-icon.png"></button>
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