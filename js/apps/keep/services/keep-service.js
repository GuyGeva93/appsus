import { utilService } from '../../../services/utils.js'
import { storageService } from '../../../services/async-storage-service.js';
export const keepService = {
    query,
    remove,
    save,
    getById,
    getNoteTypeFormat
}
const NOTES_KEY = 'notes';
const gNotes = [{
        id: storageService._makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: storageService._makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "img/some-img.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: _createRandColor()
        }
    },
    {
        id: storageService._makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function getNoteTypeFormat(type) {
    let cmp;
    switch (type) {
        case 'note-txt':
            cmp = {
                id: storageService._makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    title: '',
                    txt: ''
                }
            }
            break;
        case 'note-img':
            cmp = {
                id: storageService._makeId(),
                type: "note-img",
                isPinned: false,
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: _createRandColor()
                }
            };
            break;
        case 'note-todos':
            cmp = {
                id: storageService._makeId(),
                type: "note-todos",
                isPinned: false,
                info: {
                    label: "",
                    todos: []
                }
            }
            break;

    }
    return cmp
}


function query() {
    // console.log(utilService.loadFromStorage(NOTES_KEY));

    return storageService.queryNotes(NOTES_KEY).then(res => {
        if (!res.length || !res) {
            console.log('accessed "cash"');
            storageService.postMany(NOTES_KEY, gNotes)
            return gNotes
        } else {
            return res
        }
    })
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    return storageService.post(NOTES_KEY, note);
}

function getById(notesId) {
    return storageService.get(NOTES_KEY, notesId);
}

function _createRandColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}