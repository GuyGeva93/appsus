export default {
    props: ['info'],
    template: `
    <div class="note-txt">
    <label> Add Your Note
        <input v-model="txt" name="text-note" id="" placeholder="insert title Here..." @submit="returnTxt"/>
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
    created() {},
}