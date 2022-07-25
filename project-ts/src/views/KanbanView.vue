<script lang="ts" setup>
import { ref } from 'vue'
import KanbanForm from '../components/KanbanForm.vue'
import KanbanBoard from '../components/KanbanBoard.vue'


interface taskIntr {
    proj: string,
    desc: string,
    sts: string
}

const newTaskRef = ref<taskIntr>({
    proj: '',
    desc: '',
    sts: ''
})


function addTaskCard(emitObj: taskIntr) {
    console.log(emitObj)
    console.log(newTaskRef.value)

    newTaskRef.value = emitObj

    console.log(newTaskRef.value)

}
</script>
<!------------------------------------------------->
<template>
<main>
    <KanbanForm @add-task="addTaskCard"/>
    <KanbanBoard :new-task="newTaskRef"/>
</main>
</template>
<!------------------------------------------------->
<style scoped>
main {
    min-height: calc(100% - 200px);
}
</style>
