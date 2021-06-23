import { utilService } from '../../../services/utils'
export const keepService = {
    query,
    remove,
    save,
    getById,
}
const NOTES_KEY = 'notes';
const gNotes = [{
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

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