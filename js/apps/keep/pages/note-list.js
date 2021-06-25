import notePreview from "../cmps/note-preview.js";

export default {
    components: {
        notePreview,
    },
    props: ['notes'],
    template: `
    <section class="note-list">
        <article v-for="note in notes" :key="note.id" >
            <note-preview @removeNote="removeNote" :note="note" :style="{backgroundColor: selectedColor}"/>
        </article>
    </section>
    `,
    data() {
        return {
            savedNotes: '',

        }
    },
    computed: {
        selectedColor() {
            return this.notes.map(note => {
                console.log(note.style.backgroundColor);
                return note.style.backgroundColor
            })
        }
    },
    methods: {
        removeNote(noteId) {
            console.log('removing note(note list)', noteId);
            this.$emit('removeNote', noteId)
        },

    },
}