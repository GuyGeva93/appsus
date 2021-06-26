import { storageService } from "../../../services/async-storage-service.js";
import notePreview from "../cmps/note-preview.js";
import { keepService } from "../services/keep-service.js";

export default {
    components: {
        notePreview,
    },
    props: ['notes'],
    template: `
    <section class="note-list">
        <!-- <div v-if="" class="pinnedNotes" @setPinnedNote="setPinnedNote"> -->

        </div>
        <article v-for="note in notes" :key="note.id" >
            <note-preview @removeNote="removeNote" :note="note" :style="{backgroundColor: note.style.backgroundColor}"/>
        </article>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        removeNote(noteId) {
            this.$emit('removeNote', noteId)
        },
        setPinnedNote() {
            keepService.queryPinned().then(notes => {
                console.log(notes);
            })
        }
    },
}