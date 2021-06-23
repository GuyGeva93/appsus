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
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: storageService._makeId(),
        type: "NoteImg",
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
        type: "NoteTodos",
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
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: ""
                }
            }
            break;
        case 'note-img':
            cmp = {
                id: storageService._makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: _createRandColor()
                }
            };
        case 'note-todos':

            cmp = {
                id: storageService._makeId(),
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "",
                    todos: [
                        { txt: "", doneAt: null }
                        // { txt: "", doneAt: Date.now() }

                    ]
                }
            }
            break;

    }
    return cmp
}


function query() {
    if (!utilService.loadFromStorage(NOTES_KEY)) {
        console.log('accessed "cash"');
        utilService.saveToStorage(NOTES_KEY, gNotes)
    }
    return storageService.query(NOTES_KEY);
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note);
    } else {
        return storageService.post(NOTES_KEY, note);
    }
}

function getById(notesId) {
    return storageService.get(NOTES_KEY, notesId);
}

function _createRandColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}