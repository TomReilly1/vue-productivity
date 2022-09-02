<script lang="ts" setup>
import { ref, watch } from "vue"
import NotesBoardCard from "./NotesBoardCard.vue"

const noteList = ref<string[]>([])

watch(noteList, () => {
    console.log('watch for noteList activated:')
    console.log(noteList.value)
})

function addToNoteList(text: string) {
    console.log(noteList.value)

    noteList.value.push(text)

    console.log(noteList.value)
}

</script>
<!------------------------------------------------->
<template>
    <section>
        <div class="board">
            <NotesBoardCard v-for="note in noteList" :note-text="note"/>
            <NotesBoardCard :note-text="null" @add="(e) => noteList.push(e)"/>
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
