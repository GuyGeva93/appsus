export default {
    props: ['info'],
    template: `
    <div class="note-img">
    <label> Add Your Note
        <input v-model="img.title" name="img-note" id="" placeholder="insert your title Here..." @blur="returnImg" />
        <input type="url" v-model="img.url" name="img-note" id="" placeholder="insert your url Here..." @blur="returnImg" />
    </label>
    </div>
    `,
    data() {
        return {
            img: {
                url: '',
                style: '',
                title: ''
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