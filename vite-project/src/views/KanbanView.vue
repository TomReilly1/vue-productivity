<script setup>
import { ref, reactive } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import TaskBoard from '../components/TaskBoard.vue'

// const taskList = ref([])
const newTask = reactive({})

function addTaskCard(emitObj) {
    console.log(emitObj)
    // taskList.value.push(emitObj)
    // newTask.value = {}
    newTask.value = emitObj
    console.log(newTask.value)
}
</script>
<!------------------------------------------------->
<template>
    <main>
        <TaskForm @add-task="addTaskCard"/>
        <TaskBoard :new-task="newTask"/>
    </main>
</template>
<!------------------------------------------------->
<style scoped>
main {
    min-height: calc(100% - 200px);
}
</style>
