<script setup>
import { ref, watch } from "vue"
import Popper from "vue3-popper";


const props = defineProps(['proj','desc','sts'])
const emit = defineEmits(['promote','demote','remove'])

function promoteTrigger(event) {
    console.log('promoteTrigger reached')
    const task = event.target
    emit(
        'promote',
        {'proj': props.proj, 'desc': props.desc, 'sts': props.sts}
    )
}

function demoteTrigger(event) {
    console.log('demoteTrigger reached')
    const task = event.target
    emit(
        'demote',
        {'proj': props.proj, 'desc': props.desc, 'sts': props.sts}
    )
}

function removeTrigger(event) {
    console.log('removeTrigger reached')
    const task = event.target
    emit(
        'remove',
        {'proj': props.proj, 'desc': props.desc, 'sts': props.sts}
    )
}
</script>
<!------------------------------------------------->
<template>
<Popper arrow>
    <div class="list-item">
        <span>{{proj}}</span>
        <p>{{desc}}</p>
    </div>
    <template #content>
        <button v-if="sts === 'completed'" disabled>promote</button>
        <button v-else @click="promoteTrigger" class="green-btn">promote</button>
        <button v-if="sts === 'ideas'" disabled>demote</button>
        <button v-else @click="demoteTrigger" class="yellow-btn">demote</button>
        <button @click="removeTrigger" class="red-btn">remove</button>
    </template>
</Popper>
</template>
<!------------------------------------------------->
<style scoped>
.list-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: var(--black1);
    border-radius: 3px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    padding: 5px;
    margin: 0 0 15px;
}

span {
    width: min-content;
    padding: 0 10px;
    color: var(--purple1);
}

p {
    margin: 0;
    border-left: 3px solid var(--gold1);
    padding-left: 10px;
}

div button {
    background-color: var(--black1);
    border: 0;
    border-radius: 3px;
    padding: 5px;
    box-shadow: inset 0 0 2px 1px rgba(100, 100, 100, 0.5),
                0 0 2px 1px rgba(0, 0, 0, 0.2);
    transition: background-color 0.5s;
}

/* div button:hover {
    background-color: rgba(164, 175, 255, 0.3);
} */

.green-btn:hover {
    background-color: rgba(0, 200, 0, 0.5);
}

.yellow-btn:hover {
    background-color: rgba(200, 200, 0, 0.5);
}

.red-btn:hover {
    background-color: rgba(200, 0, 0, 0.5);
}

/* Popper styles */
:deep(.popper) button {
    margin: 0 3px;
}
</style>
