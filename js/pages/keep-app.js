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
        noteVid,
        eventBus
    },
    template: `
    <section class="keep-app">
        <div class="type-buttons">
            <button id="note-txt"  @click="selectNoteType" class=" select-note select-txt" :class="{isActive: this.selectedType === 'note-txt'}">
                <img id="note-txt" class="keep-icons" src="../img/txt-icon.png" >
            </button>

            <button id="note-txt" @click="selectNoteType" class=" select-note select-img" :class="{isActive: this.selectedType=== 'note-img'}">
                <img id="note-img" class="keep-icons" src="../img/img-icon.png" >
            </button>

            <button id="note-txt" @click="selectNoteType" class=" select-note select-todos" :class="{isActive: this.selectedType=== 'note-todos'}">
                <img id="note-todos" class="keep-icons" src="../img/todo-icon.png" >
            </button>

            <button id="note-txt" @click="selectNoteType" class="select-note select-vid" :class="{isActive: this.selectedType=== 'note-vid'}">
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
            isActive: '',
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
                console.log(this.cmps);
            })
        },
        selectNoteType(ev) {
            this.selectedType = ev.target.id;
        },
        addNote() {
            keepService.getNoteTypeFormat(this.selectedType)
                .then(res => {
                    this.userNote = res
                    console.log(this.userNote);
                    if (this.selectedType === 'note-txt') {
                        this.userNote.info.txt = this.noteDetails.txt
                        this.userNote.info.title = this.noteDetails.title
                        keepService.save(this.userNote).then(() => this.loadNotes())
                    } else if (this.selectedType === 'note-img') {
                        this.userNote.info.title = this.noteDetails.title
                        this.userNote.info.url = this.noteDetails.url
                        keepService.save(this.userNote).then(() => this.loadNotes())

                    } else if (this.selectedType === 'note-todos') {
                        this.userNote.info.label = this.noteDetails.label
                        this.noteDetails.todos.map(todo => {
                            this.userNote.info.todos.push(todo)
                        });
                        // console.log('todos', this.noteDetails);
                        keepService.save(this.userNote).then(() => this.loadNotes())
                    } else if (this.selectedType === 'note-vid') {
                        this.userNote.info.label = this.noteDetails.label
                        if (this.noteDetails.url.includes('youtube')) {
                            const videoId = this.getYouTubeEmbedUrl(this.noteDetails.url)
                                // R9Kjatuf-oU
                            const iframeMarkup = '//www.youtube.com/embed/' +
                                videoId;
                            this.userNote.info.url = iframeMarkup
                        } else {

                            this.userNote.info.url = this.noteDetails.url
                        }
                        keepService.save(this.userNote).then(() => this.loadNotes())
                    }
                });

        },
        getYouTubeEmbedUrl(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);

            return (match && match[2].length === 11) ?
                match[2] :
                null;
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
        },
        toggleColors(color) {
            console.log(this.noteDetails);
            // return this.userNote.style.backgroundColor = color
        }

    },
    created() {
        this.loadNotes()
    },
    mounted() {
        eventBus.$on('selectColor', this.toggleColors);
    },
    destroyed() {
        eventBus.$off('selectColor');
    },
}