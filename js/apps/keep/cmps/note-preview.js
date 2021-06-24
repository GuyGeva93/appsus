import { storageService } from "../../../services/async-storage-service.js";

export default {
    props: ['note'],

    template: `
    <div class="note-preview">
      <div class="note txt" v-if="note.type === 'note-txt'" >
         <div class="note-content">
        {{note.info.txt}}
      </div>
      <div class="note-btns">

        <button @click="removeNote(note.id)" class="remove">X</button>
      </div>
        </div>
        <div class="note img" v-else-if="note.type === 'note-img'" >
          <div class="note-content">
           <p> {{note.info.title}}</p>
            <img :src="note.info.url" >
          </div>
        <div class="note-btns">
        <button @click="removeNote(note.id)" class="remove">X</button>
         </div>
          </div>
          <div class="note todos" v-else-if="note.type === 'note-todos'" >
        <div class="note-content">
          label: {{note.info.label}}
          <ul class="todo" v-for="todo in this.note.info.todos">
            <li >
              <input type="checkbox" :id="randomId"> {{todo.txt}}
            </li>
          </ul>
        </div>
          <div class="note-btns">
          <button @click="removeNote(note.id)" class="remove">X</button>
           </div>
            </div>
      </div>
    `,
    data() {
        return {
            todo: ''
        }
    },
    computed: {
        randomId() {
            return storageService._makeId()
        }
    },
    methods: {
        removeNote(noteId) {
            console.log('removing note(note preview)', noteId);
            this.$emit('removeNote', noteId)
        }
    },

}