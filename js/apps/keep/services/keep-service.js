import { utilService } from '../../../services/utils.js'
import { storageService } from '../../../services/async-storage-service.js';
export const keepService = {
    query,
    remove,
    save,
    getById,
    getNoteTypeFormat,
    update,
    queryPinned,
    savePinned
}
const gPinnedNotes = []
const PINNED_NOTES_KEY = 'pinned notes'
const NOTES_KEY = 'notes';
const gNotes = [{
        id: storageService._makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: _getDarkColor()
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
            backgroundColor: _getDarkColor()
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
        },
        style: {
            backgroundColor: _getDarkColor()
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
                },
                style: {
                    backgroundColor: _getDarkColor()
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
                    backgroundColor: _getDarkColor()
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
                },
                style: {
                    backgroundColor: _getDarkColor()
                }
            }
            break;
        case 'note-vid':
            cmp = {
                id: storageService._makeId(),
                type: "note-vid",
                isPinned: false,
                info: {
                    label: "",
                    url: "",
                },
                style: {
                    backgroundColor: _getDarkColor()
                }
            }
            break;

    }
    return Promise.resolve(cmp).then(res => {
        return res
    });
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

function queryPinned() {
    return storageService.queryNotes(PINNED_NOTES_KEY).then(res => {
        if (!res.length || !res) {
            console.log('accessed "cash"');
            storageService.postMany(PINNED_NOTES_KEY, gPinnedNotes)
            return gPinnedNotes
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

function savePinned(note) {
    return storageService.post(PINNED_NOTES_KEY, note);
}

function update(note) {
    return storageService.put(NOTES_KEY, note);
}

function getById(notesId) {
    return storageService.get(NOTES_KEY, notesId);
}

function _getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}