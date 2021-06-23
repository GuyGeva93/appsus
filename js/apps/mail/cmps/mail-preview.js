
export default {
  props: ['mail'],

  template: `
    <div class="mail-preview-detail">
      <label>{{mail.sender}}</label>
      <label>{{mail.subject}}</label>
      <label>{{mail.isRead}}</label>
      <label>{{mail.sentAt}}</label>
    </div>
  `,

}