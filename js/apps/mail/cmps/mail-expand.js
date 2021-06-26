
export default {
  props: ['mail'],

  template: `
  <section class='mail-expand'>
    <span class="mail-expand-minimize">Click anywhere to minimize</span>
    <article class="mail-expand-from padding">
      <span>From: {{mail.from}}</span>
      <span>{{mail.sentAt}}</span>
    </article>
    <span class="mail-expand-subject padding">Subject: {{mail.subject}}</span>
    <span class="mail-expand-body padding">{{mail.body}}</span>
  </section>
  `,


}