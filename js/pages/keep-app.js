import noteTxt from "../apps/keep/cmps/note-txt.js";
export default {
    components: {
        noteTxt,
    },
    template: `
    <section class="keep-app">
<h1>notes</h1>
<hr>
<form class="notes-form" @submit.prevent="save">
    <note-txt :info="cmp.txt"/>
    <!-- <note-img/>
    <note-todos/>
    <note-video/>
    <note-audio/>
    <note-map/> -->
<button class="save">Save</button>
</form>
    </section>
    `,
    data() {
        return {
            cmp: {
                info: {
                    txt: 'this is your first note!'
                }
            }
        }
    },
    methods: {
        save() {
            console.log('saved');
        }
    },
}