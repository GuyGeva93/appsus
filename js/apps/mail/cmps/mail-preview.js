import mailExpand from "./mail-expand.js"
import mailOptions from "./mail-options.js"

export default {
  props: ['mail'],

  template: `
    <mail-expand :mail="mail" v-if="isExpand" @click.native="mailExpand"/>
    <section v-else class="mail-preview" :class="{read: mail.isRead, unread:!mail.isRead}" >
      <tr  @click.stop="mailExpand" class="mail-preview-container" >
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
    mailExpand() {
      this.isExpand = !this.isExpand
      this.mail.isRead = true
    },

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