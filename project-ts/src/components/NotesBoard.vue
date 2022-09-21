<script lang="ts" setup>
import { ref, watch } from "vue"
import NotesBoardCard from "./NotesBoardCard.vue"

interface noteCardIntr {
    id: number,
    text: string
}

const noteList = ref<noteCardIntr[]>([])

// watch(noteList, () => {
//     console.log('watch for noteList activated:')
//     console.log(noteList.value)
// })

function addToNoteList(text: string) {
    console.log(noteList.value)

    noteList.value.push(text)

    console.log(noteList.value)
}

function assignId(inputCard: noteCardIntr) {
    for (let i = 0; noteList.value.length; i++) {
        let idExists: boolean = false
        
        for (let note of noteList.value) {
            if (note.id === i) {
                idExists = true
            }
        }

        if (!idExists) {
            inputCard.id = i
        }
    }
}

</script>
<!------------------------------------------------->
<template>
    <section>
        <div class="board">
            <NotesBoardCard v-for="note in noteList"
                            :note-text="note"
                            :is-note-new="false"
                            @add="(e) => noteList.push(e)"
                            @delete="(e) => noteList.splice(noteList.indexOf(e))"
                            />
            <NotesBoardCard :note-text="null"
                            :is-note-new="true"
                            @add="(e) => noteList.push(e)"
                            @delete="(e) => noteList.splice(noteList.indexOf(e))"
                            />
        </div>
    </section>
</template>
<!------------------------------------------------->
<style scoped>
section {
    height: 25rem;
    /* min-height: calc(100% - 200px); */
}

.board {
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    padding: 15px 10px;
    cursor: default;
    background-color: var(--purple1);
    min-height: 100%;
}
</style>
