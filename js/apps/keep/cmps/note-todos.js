export default {
    props: ['info'],
    template: `
    <div class="note-todos">
    <label> Add Your Note
        <br>
        <input v-model="todos.label" name="todos-note" placeholder="insert text Here..." @blur="returnTxt" />
        <br>
        <input v-model="todos.todos.txt" name="todos-note" placeholder="insert TODO with 'Add Todo' and press 'Add note' when you're done..." @blur="returnTxt" />
        <button @click.stop.prevent="addTodo" class="add-todo">Add Todo</button>
    </label>
    </div>
    `,
    data() {
        return {
            todos: {
                label: '',
                todos: []
            }
        }
    },
    methods: {
        returnTxt() {
            this.$emit('setNote', this.todos)
        },
        addTodo() {
            this.todos.todos.push({ txt: this.todos.todos.txt, isDone: false })
        }
    },
    created() {},
}