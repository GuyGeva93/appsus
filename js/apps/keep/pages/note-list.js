import notePreview from "../cmps/note-preview.js";

export default {
    components: {
        notePreview,
    },
    props: ['notes'],
    template: `
    <section class="note-list">
        <!-- {{savedNotes}} -->
        <article v-for="note in savedNotes" class="note" :key="note.id">
            <note-preview :note="note"/>
            <!-- {{note.info}} -->
        </article>
    </section>
    `,
    data() {
        return {
            savedNotes: ''
        }
    },
    computed: {
        // spreadNotes() {
        //     return this.savedNotes
        // }
    },
    created() {
        this.notes.then(res => this.savedNotes = res);
    },
}