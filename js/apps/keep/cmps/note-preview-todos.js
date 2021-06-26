import colorPalette from "./color-palette.js"
import { keepService } from "../services/keep-service.js"



export default {
    components: {
        colorPalette,
    },
    props: ['note'],
    template: `
    <div class="note todos note-preview" :style="{backgroundColor: selectedColor}" :class="{pinned: this.note.isPinned}">
    <div class="note-content">
          <u>label: {{note.info.label}}</u>
          <ul class="todo" v-for="(todo,idx) in this.note.info.todos" :id="idx">
            <li ref="todo" @click="toggleDone(todo)" :class="{done: todo.isDone}">
             {{todo.txt}}
            </li>
            <i @click="removeTodo(idx,$event)" class="fas fa-trash-alt"></i>
        </ul>
        <div class="add-todo-input" v-show="isAdding"><input type="text" > | <i @click="addTodo" class="fas fa-plus-square"></i></div>
    </div>
    <div class="note-btns">
              <i @click="pinNote" class="fas fa-thumbtack"></i>
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
        loadNotes() {
            keepService.query().then(res => {
                this.cmps = res
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
        },
        removeTodo(idx) {
            const selectedTodo = this.note.info.todos.findIndex((todo, index) => {
                return index === idx
            })
            console.log(selectedTodo);
            this.note.info.todos.splice(selectedTodo, 1)
            keepService.update(this.note)
        },
        pinNote() {
            this.note.isPinned = !this.note.isPinned

            keepService.remove(this.note.id).then(() => {
                this.loadNotes();
            });

        }
    },
    created() {},
}