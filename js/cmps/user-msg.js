import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <div 
        v-if="msg" 
        class="user-msg" 
        :class="msg.type"
        enter-active-class="animate__animated animate__bounceInDown"
        leave-active-class="animate__animated animate__bounceInDown"
        
        >
            <p>{{msg.txt}}</p>
        </div>
    `,
    data() {
        return {
            msg: null,
            animation: null
        };
    },
    created() {
        eventBus.$on('show-msg', this.showMsg);
    },
    computed: {
        isAnimation() {
            if (this.msg) return 'animate__animated animate__bounceInDown'
        }
    },
    destroyed() {
        eventBus.$off('show-msg', this.showMsg);
    },
    methods: {
        showMsg(msg) {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000);
        }
    }
};