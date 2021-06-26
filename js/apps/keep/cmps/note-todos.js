export default {
    props: ['info'],
    template: `
    <div class="note-todos">
    <label> Add Your Note
        <br>
        <input v-model="todos.label" name="todos-note" placeholder="insert text Here..." @blur="returnTxt" />
        <br>
        <input ref="add-todo-input" v-model="todos.todos.txt" name="todos-note" placeholder="press 'Add Todo' then 'Add note' when you're done..." @blur="returnTxt" />
        <button @click.stop.prevent="addTodo" class="btn-add-single-todo">Add Todo</button>
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
        addTodo(ev) {
            this.todos.todos.push({ txt: this.todos.todos.txt, isDone: false })
            console.log(ev.target.previousElementSibling.value);
            ev.target.previousElementSibling.value = '';
            console.log(this.$refs.defaultValue);
        }
    },
    created() {},
}