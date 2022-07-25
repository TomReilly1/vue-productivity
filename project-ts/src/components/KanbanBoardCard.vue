<script lang="ts" setup>
import Popper from "vue3-popper";
import type taskIntr from "../interfaces/taskInterface";



const props = defineProps<{
    taskObj: taskIntr
}>()

const emit = defineEmits<{
  (e: 'changeStatus', taskObj: taskIntr, action: string): void
}>()


function taskStatusTrigger(action: string) {
    emit('changeStatus', props.taskObj, action)
}
</script>
<!------------------------------------------------->
<template>
<Popper arrow>
    <div class="list-item">
        <span>{{taskObj.proj}}</span>
        <p>{{taskObj.desc}}</p>
    </div>
    <template #content>
        <button v-if="taskObj.sts === 'completed'" disabled>promote</button>
        <button v-else @click="taskStatusTrigger('promote')" class="green-btn">promote</button>

        <button v-if="taskObj.sts === 'ideas'" disabled>demote</button>
        <button v-else @click="taskStatusTrigger('demote')" class="yellow-btn">demote</button>
        
        <button @click="taskStatusTrigger('remove')" class="red-btn">remove</button>
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
