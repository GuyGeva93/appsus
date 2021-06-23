export default {
    props: ['note'],

    template: `
    <div class="note-preview">
      <div class="note txt" v-if="note.type === 'NoteTxt'" >
        {{note.info.txt}}
        </div>
        <div class="note img" v-else-if="note.type === 'NoteImg'" >
        {{note.info.title}}
        <img :src="note.info.url" >
          </div>
          <div class="note todos" v-else-if="note.type === 'NoteTodos'" >
          <!-- {{note.info.label}} -->
          <!-- {{note}} -->
          label: {{note.info.label}}
          TODOS:
          <div v-for="todo in this.note.info.todos">
            {{this.count}}. {{todo.txt}}
            created At: {{todo.doneAt}}
          </div>
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

}