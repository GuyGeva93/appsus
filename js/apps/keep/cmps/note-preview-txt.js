import colorPalette from "./color-palette.js"
// import { eventBus } from "../../../services/event-bus-service.js"
import { keepService } from "../services/keep-service.js"
export default {
    components: {
        colorPalette,
        // eventBus
    },
    props: ['note'],
    template: `
    <div class="note txt note-preview" :style="{backgroundColor: selectedColor}" :id="note.id">
         <div class="note-content">
       <u @click.stop.prevent="isNoteClicked('title')" v-show="!isTitleClicked" class="title"> {{note.info.title}}:</u>
       <input class="title-input" @blur="editValue('title',$event)" type="text" :value="note.info.title" v-show="isTitleClicked"/>

       <p @click.stop.prevent="isNoteClicked('txt')" 
       v-show="isTxtClicked">
       <textarea  @blur="editValue('txt',$event)" 
       class="txt-note-textarea" 
       type="text"><span>{{note.info.txt}}</span></textarea>
       </p>
       <p @click.stop.prevent="isNoteClicked('txt')" :id="note.id" v-show="!isTxtClicked">{{note.info.txt}}</p>
      </div>
        <div class="note-btns">
    <button @click="removeNote" class="remove">X</button>
    <button @click="isPaletteOpen = !isPaletteOpen" class="colors fa-solid fa-palette"></button>
    <color-palette v-if="isPaletteOpen"  @selectColor="selectColor" :note="note"/>
        </div>
    </div>
    `,
    data() {
        return {
            type: 'notePreviewTxt',
            noteId: '',
            backgroundColor: '',
            isPaletteOpen: false,
            isTxtClicked: false,
            isTitleClicked: false,
        }
    },
    computed: {
        selectedColor() {
            return this.backgroundColor
        }
    },

    methods: {
        editValue(whatToEdit, ev) {
            if (whatToEdit === 'txt') {
                this.note.info.txt = ev.target.value
                this.isTxtClicked = false
            } else if ('title') {
                this.note.info.title = ev.target.value
                this.isTitleClicked = false
            }
            keepService.update(this.note)
        },
        returnTxt() {
            this.$emit('setNotePreview', this.type)
        },
        removeNote() {
            this.$emit('removeNote', this.note.id)
        },
        openColorPalette() {
            this.$emit('openColorPalette', this.selectedBGC)
        },
        selectColor(color) {
            this.backgroundColor = color
            this.note.style.backgroundColor = color
            keepService.update(this.note)
                // eventBus.$emit('selectColor', color)

            this.$emit('selectColor', color)
        },
        isNoteClicked(whatToEdit) {
            if (whatToEdit === 'txt') {
                this.isTxtClicked = true
                Promise.resolve().then(() => {
                    document.querySelector('.txt-note-textarea').focus()
                })
            } else if (whatToEdit === 'title') {
                console.log(whatToEdit);
                this.isTitleClicked = true
                Promise.resolve().then(() => {
                    document.querySelector('.title-input').focus()
                })
            }
        }
    },
    created() {
        // console.log('created');
    },
}