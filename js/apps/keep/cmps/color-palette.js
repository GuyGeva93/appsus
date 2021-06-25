import { eventBus } from "../../../services/event-bus-service.js"
export default {
    props: ['note'],
    template: `
    <div class="color-palette">
        <button @click="selectColor"><img id="orange" class="color"src="../img/colors/orange.png"></button>
        <button @click="selectColor"><img id="lightseagreen" class="color"src="../img/colors/aqua.png"></button>
        <button @click="selectColor"><img id="rgb(196, 59, 81)" class="color"src="../img/colors/pink.png"></button>
        <button @click="selectColor"><img id="gold" class="color"src="../img/colors/yellow.png"></button> 
        <button @click="selectColor"><img id="darkred" class="color "src="../img/colors/red.png"></button>
        <button @click="selectColor"><img id="rgb(192, 78, 192)" class="color" src="../img/colors/violet.png"></button>
        <button @click="selectColor"><img id="lightslategray" class="color"src="../img/colors/gray.png"></button>
        <button @click="selectColor"><img id="#3e3e3e" class="color"src="../img/colors/black.png"></button>
        <button @click="selectColor"><img id="whitesmoke" class="color"src="../img/colors/white.png"></button>
    </div>
    `,
    data() {
        return {
            selectedColor: ''
        }
    },
    methods: {
        selectColor(ev) {
            this.selectedColor = ev.target.id
            this.$emit('selectColor', this.selectedColor)
            console.log(this.selectedColor);
            eventBus.$emit('selectColor', this.selectedColor)
        }
    },
    created() {
        console.log(this.note);
    },

}