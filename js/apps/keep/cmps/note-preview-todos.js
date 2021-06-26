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
            <li @click.stop.prevent="isNoteClicked" ref="todo" @click="toggleDone(todo)" :class="{done: todo.isDone}" v-show="!isTodoClicked">
            <input class="todo-input" @blur="editValue" type="text" :value="todo" v-show="isTodoClicked"/>
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
            isTodoClicked: false
        }
    },
    computed: {
        selectedColor() {
            return this.backgroundColor
        },

    },


    methods: {
        editValue(ev) {
            this.note.info.txt = ev.target.value
            this.isTodoClicked = false
            keepService.update(this.note)
        },
        isNoteClicked() {
            this.isTxtClicked = true
            Promise.resolve().then(() => {
                document.querySelector('.todo-input').focus()
            })
        },
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
        toggleDone(todo) {
            todo.isDone = !todo.isDone
            keepService.update(this.note)
        }
    },
    created() {},
}