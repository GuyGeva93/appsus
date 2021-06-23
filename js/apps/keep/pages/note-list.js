import notePreview from "../cmps/note-preview.js";

export default {
    components: {
        notePreview,
    },
    props: ['notes'],
    template: `
    <section class="note-list">
        <article v-for="note in savedNotes" :key="note.id">
            <note-preview :note="note"/>
        </article>
    </section>
    `,
    data() {
        return {
            savedNotes: ''
        }
    },
    computed: {
        //
    },
    created() {
        this.notes.then(res => this.savedNotes = res);
    },
}