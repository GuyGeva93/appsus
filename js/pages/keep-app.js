import { keepService } from "../apps/keep/services/keep-service.js";
// import { storageService } from "../services/async-storage-service.js";
import noteTxt from "../apps/keep/cmps/note-txt.js";
import noteList from "../apps/keep/pages/note-list.js";
import noteTodos from "../apps/keep/cmps/note-todos.js";
import noteImg from "../apps/keep/cmps/note-img.js";
import noteVid from "../apps/keep/cmps/note-vid.js"
import { eventBus } from "../services/event-bus-service.js";
import userMsg from "../cmps/user-msg.js";

export default {
    components: {
        noteTxt,
        noteList,
        noteImg,
        noteTodos,
        userMsg,
        noteVid
    },
    template: `
    <section class="keep-app">
        <div class="type-buttons">
            <button  @click="selectNoteType" class=" select-note select-txt" :class="{isActive: this.selectedType === 'note-txt'}">
                <img id="note-txt" class="keep-icons" src="../img/txt-icon.png" >
            </button>

            <button @click="selectNoteType" class=" select-note select-img" :class="{isActive: this.selectedType=== 'note-img'}">
                <img id="note-img" class="keep-icons" src="../img/img-icon.png" >
            </button>

            <button @click="selectNoteType" class=" select-note select-todos" :class="{isActive: this.selectedType=== 'note-todos'}">
                <img id="note-todos" class="keep-icons" src="../img/todo-icon.png" >
            </button>

            <button @click="selectNoteType" class="select-note select-vid" :class="{isActive: this.selectedType=== 'note-vid'}">
                <img id="note-vid" class="keep-icons" src="../img/video-icon.png" >
            </button>

        </div>
        <form class="notes-form" @submit.prevent="selectNoteType" autocomplete="off">
            <component  :is="selectedType" :info="cmps" @setNote="setNote"></component>
            
            <input type="submit" class="btn-add-note" value="Add Note" @click.stop.prevent="addNote"/>
        </form>
        <note-list @removeNote="removeNote" v-if="cmps" :notes="cmps"/>
    </section>
    `,
    data() {
        return {
            cmps: null,
            selectedType: 'note-txt',
            userNote: null,
            noteDetails: {},
            isActive: ''
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
            this.selectedType = ev.target.id;
        },
        addNote() {
            this.userNote = keepService.getNoteTypeFormat(this.selectedType)
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
            } else if (this.selectedType === 'note-vid') {
                console.log('vid');
                this.userNote.info.label = this.noteDetails.label
                this.userNote.info.url = this.noteDetails.url
                    // console.log('todos', this.noteDetails);
                keepService.save(this.userNote).then(() => this.loadNotes())
            }

        },
        setNote(note) {
            console.log(note);
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