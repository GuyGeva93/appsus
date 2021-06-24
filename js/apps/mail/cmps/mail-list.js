import mailPreview from "./mail-preview.js"

export default {
  props: ['mails'],

  template: `
  <table class="mail-list">
    <tbody>
      <!-- <tr > -->
          <mail-preview  v-for="mail in mails" :key="mail.id" :mail="mail" @removeMail="removeMail"/>
      <!-- </tr> -->
    </tbody>
  </table>
  `,

  methods: {
    removeMail(mailId) {
      this.$emit('removeMail', mailId)
    },

  },

  components: {
    mailPreview
  },
}