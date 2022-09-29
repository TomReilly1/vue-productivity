<script lang="ts" setup>
import { ref } from "vue";

// PROPS
const props = defineProps<{
    noteText: string | null,
    isNoteNew: boolean
}>()

// EMITS
const emit = defineEmits<{
    (e: 'add', textValue: string): void
    (e: 'delete', textValue: string): void
    (e: 'update', textValue: string, textToReplace: string): void
}>()
// const emit = defineEmits(['add'])

// REFS
const cardText = ref<string | null>(props.noteText)
// const isNewNote = ref<boolean>(false)
const isBeingEdited = ref<boolean>(false)
// const cardNew = ref<boolean>(false)
// const cardInProg = ref<boolean>(false)
// const cardComplete = ref<boolean>(false)


// FUNCTIONS
function editNote() {
    console.log('editNote() reached')
    
    if (props.isNoteNew) {
        cardText.value = ""
    } else {
        const noteTextArea: HTMLElement | null = document.getElementById('note-text')
        
        if (!(noteTextArea instanceof HTMLTextAreaElement)) {
            throw Error('not a textarea element')
        } else if (cardText.value === null) {
            throw Error("cardtext.value should not be null if card is not new")
        } else {
            noteTextArea.value = cardText.value
        }
    }

    isBeingEdited.value = true
}

function submitNote() {
    console.log('submitNote() reached')

    const noteTextArea: HTMLElement | null = document.getElementById('note-text')
    if (!(noteTextArea instanceof HTMLTextAreaElement)) {
        console.log('not a textarea element')
        return
    }

    console.log('ta val ==>',noteTextArea.value)

    
    if (noteTextArea === null) {
        console.log('null textarea element')
    } else if (noteTextArea.value === '') {
        console.log('empty note')
    } else {
        cardText.value = noteTextArea.value

        if (cardText.value === '') {
            console.log('note is empty after adding textarea content')
            return
        } else if (cardText.value === null) {
            console.log('note is null after adding textarea content')
            return
        } else {
            isBeingEdited.value = false
            console.log(`emit the cardText value ==> ${cardText.value}`)
            emit('add', cardText.value)
            cardText.value = null
        }
    }

}

function discardNote() {
    console.log('discardNote() reached')
    if (cardText.value === '') {
        console.log('note is empty discardNote()')
    } else if (cardText.value === null) {
        console.log('note is null discardNote()')
    } else {
        emit('delete', cardText.value)
    }

    cardText.value = null
}

</script>
<!------------------------------------------------->
<template>
    <div v-if="props.isNoteNew && cardText === null" class="card empty" @click="editNote()">
        <span>Add Note</span>
        <span>+</span>
    </div>
    <div v-else-if="isBeingEdited === true" class="card editing">
        <div class="card-head">
            <button @click="submitNote()" class="icon submit">
                <span>Submit</span>
            </button>
            <button @click="discardNote()" class="icon delete">
                <span>&#x274C;</span>
            </button>
        </div>
        <div class="card-body">
            <textarea name="note-text" id="note-text" rows="7" placeholder="Write note here...">{{cardText}}</textarea>
        </div>
    </div>
    <div v-else class="card complete">
        <div class="card-head">
            <button @click="editNote()">
                <span>&#x1F4DD;</span>
            </button>
            <button @click="discardNote()">
                <span>&#x274C;</span>
            </button>
        </div>
        <div class="card-body">
            <p>{{cardText}}</p>
        </div>
    </div>
</template>
<!------------------------------------------------->
<style scoped>
.card {
    width: 12rem;
    height: 10rem;
    /* background-color: rgb(224, 205, 92); */
    background-color: var(--yellow1);
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

.empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: brightness(100%);
    transition: filter 0.1s;
}

.empty:hover {
    filter: brightness(95%);
}

.empty > span:first-child {
    color: var(--black2);
    font-size: 1.5rem
}

.empty > span:last-child {
    font-size: 2rem;
    color: rgb(0, 255, 0);
}

.card-head {
    display: flex;
    justify-content: end;
}

button {
    width: min-content;
    height: min-content;
    margin: 0 5px;
    border: 0;
    padding: 3px 5px;
    background-color: unset;
}

button > span {
    font-size: 1.1rem;
}

#note-text {
    height: 100%;
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    resize: none;
    color: black;
    background-color: unset;
}

#note-text:focus {
    background-color: var(--yellow2);
    outline: none;
}


</style>
