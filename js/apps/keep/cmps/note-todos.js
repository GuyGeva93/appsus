export default {
    props: ['info'],
    template: `
    <div class="note-todos">
    <label> Add Your Note
        <input v-model="todos.label" name="todos-note" id="" placeholder="insert text Here..." @blur="returnTxt" />
        <input v-model="todos.todos" name="todos-note" id="" placeholder="insert text Here..." @blur="returnTxt" />
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
        }
    },
    created() {},
}