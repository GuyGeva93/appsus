import colorPalette from "./color-palette.js"
// import { eventBus } from "../../../services/event-bus-service.js"
import { keepService } from "../services/keep-service.js"
export default {
    components: {
        colorPalette,
        // eventBus
    },
    props: ['note'],
    template: `
    <div class="note txt note-preview" :style="{backgroundColor: selectedColor}">
         <div class="note-content">
       <u> {{note.info.title}}:</u>
       <p> {{note.info.txt}}</p>
      </div>
        <div class="note-btns">
    <button @click="removeNote" class="remove">X</button>
    <button @click="isPaletteOpen = !isPaletteOpen" class="colors"><i class="fa-solid fa-palette"></i></button>
    <color-palette v-if="isPaletteOpen"  @selectColor="selectColor" :note="note"/>
        </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewTxt',
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
        // console.log('created');
    },
}