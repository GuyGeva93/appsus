
export default {
  props: ['mail'],

  template: `
  <section class='mail-expand'>
    <p>From: {{mail.from}}</p>
    <p>Subject: {{mail.subject}}</p>
    <p>{{mail.body}}</p>
  </section>
  `,

}