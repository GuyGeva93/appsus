import mailExpand from "./mail-expand.js"
import mailOptions from "./mail-options.js"

export default {
  props: ['mail'],

  template: `
    <mail-expand :mail="mail" v-if="isExpand" @editDraft="editDraft" @mailCompress="toggleExpand"/>
    <section v-else class="mail-preview" :class="{read: mail.isRead, unread:!mail.isRead}" >
      <tr @click.stop="toggleExpand" class="mail-preview-container" >
        <td>{{mail.from}}</td>
        <td class="mail-preview-subject-td">{{mail.subject}}
          <span class="mail-preview-teaser">{{bodyTeaser}}</span>
        </td>
        <td>{{mail.sentAt}}</td>  
      </tr>
      <mail-options :mail="mail"/>
    </section>
  `,

  data() {
    return {
      isExpand: false,
    }
  },

  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand
      this.mail.isRead = true
    },
    editDraft() {
      console.log('EDIT DRAFT -> mail-preview');
    }

  },
  computed: {
    isRead() {
      return this.mail.isRead
    },
    bodyTeaser() {
      if (!this.isExpand) {
        return this.mail.body.substring(0, 20) + '...'
      }
    }
  },
  components: {
    mailExpand,
    mailOptions,
  }
}