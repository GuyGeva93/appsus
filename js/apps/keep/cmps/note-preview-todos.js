import { storageService } from "../../../services/async-storage-service.js";


export default {
    props: ['note'],
    template: `
    <div class="note todos note-preview">
    <div class="note-content">
          label: {{note.info.label}}
          <ul class="todo" v-for="todo in this.note.info.todos">
            <li >
              <input type="checkbox" :id="randomId"> {{todo.txt}}
            </li>
          </ul>
        </div>
          <div class="note-btns">
          <button @click="removeNote" class="remove">X</button>
           </div>
            </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewImg',
            noteId: ''
        }
    },
    computed: {
        randomId() {
            return storageService._makeId()
        },
    },
    methods: {
        returnTxt() {
            this.$emit('setNotePreview', this.type)
        },
        removeNote() {
            this.$emit('removeNote', this.note.id)
        },

    },
    created() {
        console.log('notePreviewTodos');
        console.log(this.note);
    },
}