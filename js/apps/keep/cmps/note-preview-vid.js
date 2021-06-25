export default {
    props: ['note'],
    template: `
    <div class="note vid note-preview">
    <div class="note vid" v-if="note.type === 'note-vid'" >
          <div class="note-content">
            <iframe type="url" class="vid-iframe" :src="note.info.url" :title="note.info.label" frameborder="0" height="300" width="300"></iframe>
          </div>
        <div class="note-btns">
        <button @click="removeNote" class="remove">X</button>
         </div>
          </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewImg',
            noteId: ''
        }
    },
    methods: {
        returnTxt() {
            this.$emit('setNotePreview', this.type)
        },
        removeNote() {
            this.$emit('removeNote', this.note.id)
        },
    },
    created() {
        // console.log('notePreviewImg');
        // console.log(this.note);
    },
}