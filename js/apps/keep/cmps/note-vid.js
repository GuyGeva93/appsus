export default {
    props: ['info'],
    template: `
    <div class="note-vid">
    <label> Add Your Note
        <br>
        <input v-model="vid.label" name="vid-note" id="" placeholder="insert your title Here..." @blur="returnVid" />
        <br>
        <input type="url" v-model="vid.url" name="vid-note" id="" placeholder="insert your videos url Here..." @blur="returnVid" />
    </label>
    </div>
    `,
    data() {
        return {
            vid: {
                label: '',
                url: ''
            }

        }
    },
    methods: {
        returnVid() {
            this.$emit('setNote', this.vid)
        }
    },
    created() {},
}