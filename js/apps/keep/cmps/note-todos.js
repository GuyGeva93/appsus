export default {
    props: ['info'],
    template: `
    <div class="note-todos">
    <label> Add Your Note
        <input v-model="todos.label" name="todos-note" placeholder="insert text Here..." @blur="returnTxt" />
        <input v-model="todos.todos.txt" name="todos-note" placeholder="insert TODO Here..." @blur="returnTxt" />
        <button @click.stop="addTodo" class="add-todo">Add Todo</button>
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
            this.todos.todos.push({ txt: this.todos.todos.txt, createdAt: Date.now() })
        }
    },
    created() {},
}