import mailPreview from "./mail-preview.js"

export default {
  props: ['mails'],

  template: `
    

  <table class="mail-list clean-list">
    <tbody>
      <tr v-for="mail in mails" :key="mail.id" >
          <mail-preview :mail="mail" @removeMail="removeMail" @click.native="expandMail(mail.id)"/>
      </tr>
</tbody>
    </table>
  `,

  methods: {
    removeMail(mailId) {
      this.$emit('removeMail', mailId)
    },
    expandMail(mailId) {
      console.log('mail-list: expandMail:', mailId);
    }
  },

  created() {

  },

  components: {
    mailPreview
  },
}