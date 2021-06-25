export default {
    props: ['note'],
    template: `
    <div class="note txt note-preview">
         <div class="note-content">
       <u> {{note.info.title}}:</u>
       <p> {{note.info.txt}}</p>
      </div>
        <div class="note-btns">

        <button @click="removeNote" class="remove">X</button>
        </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewTxt',
            noteId: ''
        }
    },
    computed: {
        // selectedNoteId() {
        //     return this.noteId = this.note.id
        // }
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
        console.log('notePreviewTxt');
        console.log(this.note);
    },
}