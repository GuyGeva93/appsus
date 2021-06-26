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
            <li ref="todo" @click="toggleDone(todo)" :class="{done: todo.isDone}">
             {{todo.txt}}
            </li>
          </ul>
          <div class="add-todo-input" v-show="isAdding"><input type="text" > | <i @click="addTodo" class="fas fa-plus-square"></i></div>
        </div>
          <div class="note-btns">
              <i @click="isPaletteOpen = !isPaletteOpen" class="colors fas fa-palette"></i>
              <i @click="toggleAddTodoInput" class="addTodo fas fa-plus-square"></i>
              <i @click="removeNote" class="remove fas fa-window-close"></i>
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
            isAdding: false,
            newTodoValue: 'nothing yet'
        }
    },
    computed: {
        selectedColor() {
            return this.backgroundColor
        },

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
        toggleDone(todo) {
            todo.isDone = !todo.isDone
            keepService.update(this.note)
        },
        toggleAddTodoInput() {
            this.isAdding = !this.isAdding

        },
        addTodo(ev) {
            console.log('arrived');;
            if (!ev.target.previousElementSibling.value) return
            console.log('not empty');
            this.note.info.todos.push({ txt: ev.target.previousElementSibling.value, isDone: false })
            this.isAdding = false
            keepService.save(this.note)
            ev.target.previousElementSibling.value = '';
            //maybe will need to use ref if this doesnt set the value to empty
        }
    },
    created() {},
}