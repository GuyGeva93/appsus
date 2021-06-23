import mailPreview from "./mail-preview.js"

export default {
  props: ['mails'],

  template: `
  <ul class="mail-list">
    <li v-for="mail in mails" :key="mail.id">
      <mail-preview :mail="mail"/>
      <button @click="remove(mail.id)">Remove</button>
    </li>
  </ul>  
  `,

  methods: {
    remove(mailId) {
      console.log('mail-list: remove', mailId)
      this.$emit('removeMail', mailId)
    }
  },

  components: {
    mailPreview
  },
}