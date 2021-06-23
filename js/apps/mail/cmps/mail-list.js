import mailPreview from "./mail-preview.js"

export default {
  props: ['mails'],

  template: `
  <ul class="mail-list clean-list">
    <li v-for="mail in mails" :key="mail.id" >
      <mail-preview :mail="mail" @removeMail="removeMail" @click.native="expandMail(mail.id)"/>
    </li>
  </ul>  
  `,

  methods: {
    removeMail(mailId) {
      console.log('mail-app: remove', mailId);
      this.$emit('removeMail', mailId)
    },
    expandMail(mailId) {
      console.log('mail-list: expandMail:', mailId);
    }
  },

  created() {
    // console.log(this.$route.params);

  },

  components: {
    mailPreview
  },
}