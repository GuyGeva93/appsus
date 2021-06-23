import { keepService } from "../apps/keep/services/keep-service.js";
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
            <component :is="selectedType" :info="cmps" @setTxt="setTxt"/>
            <!-- <note-video :info="cmps.txt" @setTxt="setTxt"/>
            <note-audio :info="cmps.txt" @setTxt="setTxt"/>
            <note-map/> -->
            <button class="btn-add-note">Add Note</button>
        </form>
        <note-list v-if="cmps" :notes="cmps"/>
    </section>
    `,
    data() {
        return {
            cmps: null,
            selectedType: 'note-txt',
            //types: 'note-txt', 'note-img','note-todos'
            userNote: null
        }
    },
    computed: {
        notes() {
            return this.cmps
        }
    },
    methods: {
        selectNoteType(ev) {
            if (ev.target.value) {
                this.selectedType = ev.target.value;
            }
            console.log('Note Added:');
            // this.cmps.then(res => console.log(res))
            const type = keepService.getNoteTypeFormat(this.selectedType)
            this.userNote = type
                // this.addNote(this.userNote)
        },
        addNote() {

        },
        setTxt(txt) {
            console.log('txt is...', txt);
            this.txtNote.info.txt = txt;
            console.log(this.txtNote.info.txt);

        }
    },
    created() {
        // this.cmps = keepService.getById()
        this.cmps = keepService.query()
            //    .then(res => {
            //             console.log(res);
            //         })
            // this.cmp = keepService.getById()
    },
}