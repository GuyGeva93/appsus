export default {
    props: ['info'],
    template: `
    <div class="note-txt">
    <label for=""> Add Your Note
        <input v-model="txt" name="text-note" id="" placeholder="insert Text Here..."/>
    </label>
    </div>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        returnTxt() {
            this.$emit('setTxt', this.txt)
        }
    },
}