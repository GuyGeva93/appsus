import colorPalette from "./color-palette.js"
import { keepService } from "../services/keep-service.js"


export default {
    components: {
        colorPalette,
    },
    props: ['note'],
    template: `
    <div class="note img note-preview" :style="{backgroundColor: selectedColor}">
    <div class="note-content">
           <p> {{note.info.label}}</p>
            <img :src="note.info.url" >
          </div>
        <div class="note-btns">
        <button @click="removeNote" class="remove">X</button>
        <button @click="isPaletteOpen = !isPaletteOpen" class="colors"><i class="fas fa-palette"></i></button>

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
    created() {},
}