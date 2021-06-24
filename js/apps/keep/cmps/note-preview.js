export default {
    props: ['note'],

    template: `
    <div class="note-preview">
      <div class="note txt" v-if="note.type === 'note-txt'" >
        {{note.info.txt}}
        </div>
        <div class="note img" v-else-if="note.type === 'note-img'" >
        {{note.info.title}}
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
            </div>
          <div v-else> other text</div>
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