import { keepService } from "../apps/keep/services/keep-service.js";
// import { storageService } from "../services/async-storage-service.js";
import noteTxt from "../apps/keep/cmps/note-txt.js";
import noteList from "../apps/keep/pages/note-list.js";
import noteTodos from "../apps/keep/cmps/note-todos.js";
import noteImg from "../apps/keep/cmps/note-img.js";
import { eventBus } from "../services/event-bus-service.js";
import userMsg from "../cmps/user-msg.js";

export default {
    components: {
        noteTxt,
        noteList,
        noteImg,
        noteTodos,
        userMsg
    },
    template: `
    <section class="keep-app">
        <div class="type-buttons">
            <button value="note-txt" @click="selectNoteType" class="select-txt">TEXT</button>
            <button value="note-img" @click="selectNoteType" class="select-img">IMG</button>
            <button value="note-todos" @click="selectNoteType" class="select-todos">TODOS</button>
        </div>
        <form class="notes-form" @submit.prevent="selectNoteType" autocomplete="off">
            <component :is="selectedType" :info="cmps" @setNote="setNote"></component>
            <!-- <note-video :info="cmps.txt" @setTxt="setTxt"/>
            <note-audio :info="cmps.txt" @setTxt="setTxt"/>
            <note-map/> -->
            <input type="submit" class="btn-add-note" value="Add Note" @click="addNote"/>
        </form>
        <note-list @removeNote="removeNote" v-if="cmps" :notes="cmps"/>
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
        },

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
            // const type = keepService.getNoteTypeFormat(this.selectedType)
            // this.userNote = type
        },
        addNote() {
            this.userNote = keepService.getNoteTypeFormat(this.selectedType)
                // console.log('add note button was pressed');
            if (this.selectedType === 'note-txt') {
                this.userNote.info.txt = this.noteDetails.txt
                this.userNote.info.title = this.noteDetails.title
                console.log(this.userNote);
                keepService.save(this.userNote).then(() => this.loadNotes())

            } else if (this.selectedType === 'note-img') {
                console.log('image', this.noteDetails);
                this.userNote.info.title = this.noteDetails.title
                this.userNote.info.url = this.noteDetails.url
                keepService.save(this.userNote).then(() => this.loadNotes())

            } else if (this.selectedType === 'note-todos') {
                this.userNote.info.label = this.noteDetails.label
                this.noteDetails.todos.map(todo => {
                    console.log(todo.txt);
                    this.userNote.info.todos.push(todo)
                });
                // console.log('todos', this.noteDetails);
                keepService.save(this.userNote).then(() => this.loadNotes())
            }

        },
        setNote(note) {
            this.noteDetails = note
        },
        removeNote(noteId) {
            console.log('remove note (keepApp)', noteId);
            keepService.remove(noteId).then(() => {
                    const msg = {
                        txt: 'Note Removed successfuly',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                    this.loadNotes();
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again',
                        type: 'error'
                    };
                    eventBus.$emit('show-msg', msg);

                });
        }

    },
    created() {
        this.loadNotes()

    },
}