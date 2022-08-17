<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
    noteText: string | null
}>()

const cardText = ref<string | null>(props.noteText)

function editNote() {
    console.log('editNote() reached')
    cardText.value = ""
}

</script>
<!------------------------------------------------->
<template>
    <div v-if="cardText === null" class="card empty" @click="editNote()">
        <span>Add Note</span>
        <span>+</span>
    </div>
    <div v-else class="card full">
        <div class="card-head">
            <button>
                <span>&#x1F4DD;</span>
            </button>
            <button>
                <span>&#x274C;</span>
            </button>
        </div>
        <div class="card-body">
            <textarea name="note-text" id="note-text" cols="20" rows="5"></textarea>
            {{cardText}}
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
