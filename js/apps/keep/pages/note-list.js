import notePreview from "../cmps/note-preview.js";

export default {
    components: {
        notePreview,
    },
    props: ['notes'],
    template: `
    <section class="note-list">
        <article v-for="note in notes" :key="note.id">
            <note-preview @removeNote="removeNote" :note="note"/>
        </article>
    </section>
    `,
    data() {
        return {
            savedNotes: ''
        }
    },
    methods: {
        removeNote(noteId) {
            console.log('removing note(note list)', noteId);
            this.$emit('removeNote', noteId)
        }
    },
}