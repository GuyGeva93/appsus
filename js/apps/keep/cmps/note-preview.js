import { storageService } from "../../../services/async-storage-service.js";
import notePreviewTxt from "./note-preview-txt.js";
import notePreviewImg from "./note-preview-img.js";
import notePreviewTodos from "./note-preview-todos.js";
import notePreviewVid from "./note-preview-vid.js";

export default {
    components: {
        notePreviewTxt,
        notePreviewImg,
        notePreviewTodos,
        notePreviewVid,
    },
    props: ['note'],

    template: `
    <div class="note-preview">
      <component 
      :is="notePreviewType" 
      :note="note"
      @removeNote="removeNote"
      ></component>
      </div>
    `,
    data() {
        return {
            todo: ''
        }
    },
    computed: {
        randomId() {
            return storageService._makeId()
        },
        notePreviewType() {
            if (this.note.type === 'note-txt') return 'notePreviewTxt'
            if (this.note.type === 'note-img') return 'notePreviewImg'
            if (this.note.type === 'note-todos') return 'notePreviewTodos'
            if (this.note.type === 'note-vid') return 'notePreviewVid'
        }
    },
    methods: {
        removeNote(noteId) {
            console.log('removing note(note preview)', noteId);
            this.$emit('removeNote', noteId)
        },

    },

}