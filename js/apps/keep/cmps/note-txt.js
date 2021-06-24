export default {
    props: ['info'],
    template: `
    <div class="note-txt">
    <label> Add Your Note
        <input v-model="txtNote.title"  id="" placeholder="insert title Here..." @blur="returnTxt"/>
        <textarea v-model="txtNote.txt"  id="" placeholder="insert text Here..." @blur="returnTxt"></textarea>
    </label>
    </div>
    `,
    data() {
        return {
            txtNote: {
                txt: '',
                title: ''
            }
        }
    },
    methods: {
        returnTxt() {
            this.$emit('setNote', this.txtNote)
        }
    },
    created() {},
}