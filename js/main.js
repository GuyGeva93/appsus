import { router } from './router.js';
import appHeader from '../js/cmps/app-header.js'
import appFooter from '../js/cmps/app-footer.js'
import userMsg from './cmps/user-msg.js';


const options = {
    el: '#app',

    router,

    template: `
    <section>
    <user-msg />
      <app-header />
      <router-view />
      <app-footer />
    </section>
    `,

    components: {
        appHeader,
        appFooter,
        userMsg
    }
};

const app = new Vue(options);