// import { storageService } from "../../../services/async-storage-service.js";
import colorPalette from "./color-palette.js"
import { keepService } from "../services/keep-service.js"



export default {
    components: {
        colorPalette,
    },
    props: ['note'],
    template: `
    <div class="note todos note-preview" :style="{backgroundColor: selectedColor}">
    <div class="note-content">
          <u>label: {{note.info.label}}</u>
          <ul class="todo" v-for="(todo,idx) in this.note.info.todos">
            <li @click="toggleDone(idx)" :class="{done : isDone}" id="idx">
             {{todo.txt}}
            </li>
          </ul>
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
            isPaletteOpen: false,
            isDone: false
        }
    },
    computed: {
        // randomId() {
        //     return storageService._makeId()
        // },
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
        },
        toggleDone() {
            this.isDone = !this.isDone
        }
    },
    created() {
        // console.log('notePreviewTodos');
        // console.log(this.note);
        console.log(this.note.style.backgroundColor);
    },
}