export default {
    props: ['note'],
    template: `
    <div class="note img note-preview">
    <div class="note-content">
           <p> {{note.info.label}}</p>
            <img :src="note.info.url" >
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
        console.log('notePreviewImg');
        console.log(this.note);
    },
}