export default {
    props: ['info'],
    template: `
    <div class="note-img">
    <label> Add Your Note
        <br>
        <input v-model="img.label" name="img-note" id="" placeholder="insert your title Here..." @blur="returnImg" />
        <br>
        <input type="url" v-model="img.url" name="img-note" id="" placeholder="insert your images url Here..." @blur="returnImg" />
    </label>
    </div>
    `,
    data() {
        return {
            img: {
                url: '',
                style: '',
                label: ''
            }

        }
    },
    methods: {
        returnImg() {
            this.$emit('setNote', this.img)
        }
    },
    created() {},
}