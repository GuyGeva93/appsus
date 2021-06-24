
export default {
  props: ['mail'],

  template: `
  <section class='mail-expand'>
    <span>{{mail.from}}</span>
    <span>{{mail.subject}}</span>
    <p>{{mail.body}}</p>
  </section>
  `,

}