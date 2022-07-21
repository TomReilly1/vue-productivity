<script setup>
import { ref } from 'vue'
import TaskForm from '../components/TaskForm.vue'
import TaskBoard from '../components/TaskBoard.vue'

const taskList = ref([]);

function addTaskCard(emitObj) {
    console.log(emitObj)
    taskList.value.push(emitObj)
}
</script>
<!------------------------------------------------->
<template>
    <TaskForm @add-task="addTaskCard"/>
    <TaskBoard :tasks="taskList"/>
</template>
<!------------------------------------------------->
<style scoped>
    
</style>
