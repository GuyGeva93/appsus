export default {
    props: ['note'],

    template: `
    <div class="note-preview">
      <div class="note txt" v-if="note.type === 'note-txt'" >
        {{note.info.txt}}
        <button @click="removeNote(note.id)" class="remove">X</button>

        </div>
        <div class="note img" v-else-if="note.type === 'note-img'" >
        {{note.info.title}}
        <button @click="removeNote(note.id)" class="remove">X</button>

        <img :src="note.info.url" >
          </div>
          <div class="note todos" v-else-if="note.type === 'note-todos'" >
          <!-- {{note.info.label}} -->
          <!-- {{note}} -->
          label: {{note.info.label}}
          TODOS:
          <div v-for="todo in this.note.info.todos">
            <p>{{this.count}}. {{todo.txt}}</p>
            <p>created At: {{todo.doneAt}}</p>
          </div>
          <button @click="removeNote(note.id)" class="remove">X</button>
            </div>
      </div>
    `,
    data() {
        return {
            todo: '',
            count: 1
        }
    },
    computed: {
        // spreadTodos() {
        //     const todos = this.note.info.todos.map(todo => todo)
        //     return todos
        // }
    },
    methods: {
        removeNote(noteId) {
            console.log('removing note(note preview)', noteId);
            this.$emit('removeNote', noteId)
        }
    },

}