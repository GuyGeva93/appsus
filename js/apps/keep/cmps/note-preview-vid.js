import { eventBus } from "../../../services/event-bus-service.js"
import colorPalette from "./color-palette.js"
import { keepService } from "../services/keep-service.js"


export default {
    components: {
        eventBus,
        colorPalette,

    },
    props: ['note'],
    template: `
    <div class="note vid note-preview" :style="{backgroundColor: selectedColor}">
    <div class="note vid" v-if="note.type === 'note-vid'" >
          <div class="note-content">
            <iframe type="url" class="vid-iframe" :src="note.info.url" :title="note.info.label" frameborder="0" height="300" width="300"></iframe>
          </div>
        <div class="note-btns">
        <button @click="removeNote" class="remove">X</button>
        <button @click="isPaletteOpen = !isPaletteOpen" class="colors"><i class="fa-solid fa-palette"></i></button>

        <color-palette v-if="isPaletteOpen"  @selectColor="selectColor" :note="note"/>
         </div>
          </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewImg',
            noteId: '',
            backgroundColor: '',
            isPaletteOpen: false
        }
    },
    computed: {
        selectedColor() {
            return this.backgroundColor
        }
    },
    methods: {
        returnTxt() {
            this.$emit('setNotePreview', this.type)
        },
        removeNote() {
            this.$emit('removeNote', this.note.id)
        },
        openColorPalette() {
            this.$emit('openColorPalette', this.selectedBGC)
        },
        selectColor(color) {
            this.backgroundColor = color
            this.note.style.backgroundColor = color
            keepService.update(this.note)
                // eventBus.$emit('selectColor', color)

            this.$emit('selectColor', color)
        }
    },
    created() {
        // console.log('notePreviewImg');
        // console.log(this.note);
        console.log(this.note.style.backgroundColor);
    },
    mounted() {;
    },
}