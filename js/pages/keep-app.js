import { keepService } from "../apps/keep/services/keep-service.js";
import noteTxt from "../apps/keep/cmps/note-txt.js";
import noteList from "../apps/keep/pages/note-list.js";

export default {
    components: {
        noteTxt,
        noteList
    },
    template: `
    <section class="keep-app">
        <form class="notes-form" @submit.prevent="addNote" autocomplete="off">
            <note-txt :info="cmps" @setTxt="setTxt"/>
            <!-- <note-img :info="cmps.url" @setTxt="setUrl"/>
            <note-todos :info="cmps.txt" @setTxt="setTxt"/>
            <note-video :info="cmps.txt" @setTxt="setTxt"/>
            <note-audio :info="cmps.txt" @setTxt="setTxt"/>
            <note-map/> -->
            <button class="addNote">Add Note</button>
        </form>
        <note-list v-if="cmps" :notes="cmps"/>
    </section>
    `,
    data() {
        return {
            cmps: null,
            //probably needs to be computed or in another cmp
            txtNote: {
                type: 'NoteTxt',
                isPinned: true,
                info: {
                    txt: ''
                }
            },
            imgNote: {
                type: 'NoteImg',
                isPinned: true,
                info: {
                    url: '',
                    title: ''
                }
            },
            todosNote: {
                type: 'NoteTodos',
                isPinned: true,
                todos: [
                    // { txt: '', doneAt: Date.now },
                ]
            },
        }
    },
    computed: {
        notes() {
            return this.cmps
        }
    },
    methods: {
        addNote() {
            console.log('Note Added:');
            this.cmps.then(res => console.log(res))

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