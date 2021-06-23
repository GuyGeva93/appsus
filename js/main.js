import { router } from './router.js';
import appHeader from '../js/cmps/app-header.js'
import appFooter from '../js/cmps/app-footer.js'


const options = {
  el: '#app',

  router,

  template: `
    <section>
      <app-header />
      <router-view />
      <app-footer />
    </section>
    `,

  components: {
    appHeader,
    appFooter
  }
};

const app = new Vue(options);