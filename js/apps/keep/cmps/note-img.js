export default {
    props: ['info'],
    template: `
    <div class="note-img">
    <label> Add Your Note
        <input v-model="txt" name="text-note" id="" placeholder="insert your url Here..." @submit="returnTxt"/>
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