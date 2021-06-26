
export default {
  props: ['mail'],

  template: `
  <section class='mail-expand'>
    <p>From: {{mail.from}} {{mail.sentAt}}</p>
    <p>Subject: {{mail.subject}}</p>
    <div>{{mail.body}}</div>
  </section>
  `,

}