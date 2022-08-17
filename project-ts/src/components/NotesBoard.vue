<script lang="ts" setup>
import { ref } from "vue"
import NotesBoardCard from "./NotesBoardCard.vue"

const noteList = ref<string[]>([])

</script>
<!------------------------------------------------->
<template>
    <section>
        <div class="board">
            <NotesBoardCard v-for="note in noteList" :note-text="note"/>
            <NotesBoardCard :note-text="null"/>
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
