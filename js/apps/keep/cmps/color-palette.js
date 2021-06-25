import { eventBus } from "../../../services/event-bus-service.js"
export default {
    props: ['note'],
    template: `
    <div class="color-palette">
        <img @click="selectColor" id="orange" class="color"src="../img/colors/orange.png">
        <img @click="selectColor" id="lightseagreen" class="color"src="../img/colors/aqua.png">
        <img @click="selectColor" id="rgb(196, 59, 81)" class="color"src="../img/colors/pink.png">
        <img @click="selectColor" id="gold" class="color"src="../img/colors/yellow.png"> 
        <img @click="selectColor" id="darkred" class="color "src="../img/colors/red.png">
        <img @click="selectColor" id="rgb(192, 78, 192)" class="color" src="../img/colors/violet.png">
        <img @click="selectColor" id="lightslategray" class="color"src="../img/colors/gray.png">
        <img @click="selectColor" id="#3e3e3e" class="color"src="../img/colors/black.png">
        <img @click="selectColor" id="whitesmoke" class="color"src="../img/colors/white.png">
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