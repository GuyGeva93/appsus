import { keepService } from "../apps/keep/services/keep-service.js";
// import { storageService } from "../services/async-storage-service.js";
import noteTxt from "../apps/keep/cmps/note-txt.js";
import noteList from "../apps/keep/pages/note-list.js";
import noteTodos from "../apps/keep/cmps/note-todos.js";
import noteImg from "../apps/keep/cmps/note-img.js";

export default {
    components: {
        noteTxt,
        noteList,
        noteImg,
        noteTodos
    },
    template: `
    <section class="keep-app">
        <div class="type-buttons">
            <button value="note-txt" @click="selectNoteType" class="select-txt">TEXT</button>
            <button value="note-img" @click="selectNoteType" class="select-img">IMG</button>
            <button value="note-todos" @click="selectNoteType" class="select-todos">TODOS</button>
        </div>
        <form class="notes-form" @submit.prevent="selectNoteType" autocomplete="off">
            <component :is="selectedType" :info="cmps" @setNote="setNote"/>
            <!-- <note-video :info="cmps.txt" @setTxt="setTxt"/>
            <note-audio :info="cmps.txt" @setTxt="setTxt"/>
            <note-map/> -->
            <input type="submit" class="btn-add-note" value="Add Note" @click="addNote"/>
        </form>
        <note-list v-if="cmps" :notes="cmps"/>
    </section>
    `,
    data() {
        return {
            cmps: null,
            selectedType: 'note-txt',
            //types: 'note-txt', 'note-img','note-todos'
            userNote: null,
            noteDetails: {}
        }
    },
    computed: {
        notes() {
            return this.cmps
        }
    },
    methods: {
        loadNotes() {
            keepService.query().then(res => {
                this.cmps = res
            })
        },
        selectNoteType(ev) {
            if (ev.target.value) {
                this.selectedType = ev.target.value;
            }
            const type = keepService.getNoteTypeFormat(this.selectedType)
            this.userNote = type
        },
        addNote() {
            // console.log('add note button was pressed');
            if (this.selectedType === 'note-txt') {
                this.userNote.info.txt = this.noteDetails.txt
                this.userNote.info.title = this.noteDetails.title
                console.log(this.userNote);
                keepService.save(this.userNote).then(() => this.loadNotes())
            } else if (this.selectedType === 'note-img') {
                console.log('image', this.noteDetails);
                this.loadNotes()
            } else if (this.selectedType === 'note-todos') {
                console.log('todos', this.noteDetails);
                this.loadNotes()
            }

        },
        setNote(note) {
            this.noteDetails = note
        },

    },
    created() {
        this.loadNotes()

    },
}