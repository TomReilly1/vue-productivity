<script setup>
import { ref, onMounted } from 'vue'


// onMounted(() => {
    
// })


const emit = defineEmits(['addTask'])

const statuses = ref([
    'idea',
    'in-progress',
    'testing',
    'completed'
])

const getFormData = () => {
    const proj_val = document.getElementById("task-proj").value
    const name_val = document.getElementById("task-name").value
    const status = document.getElementById("task-status")
    const status_val = status.options[status.selectedIndex].value


    const emitObj = {
        'project': proj_val,
        'name': name_val,
        'status': status_val
    }

    console.log(emitObj)
    // emit('addTask', emitObj)
    return emitObj
}
</script>
<!------------------------------------------------->
<template>
    <section>
        <div>
            <div>
                <label for="task-proj">Project&#8195;</label>
                <input type="text" id="task-proj" name="task-proj">
            </div>
            <div>
                <label for="task-name">Task&#8195;&#8195;</label>
                <input type="text" id="task-name" name="task-name">
            </div>
            <div>
                <select name="task-status" id="task-status">
                    <option value="" disabled selected hidden>Select status...</option>
                    <option v-for="status in statuses" :value="status">
                        {{status}}
                    </option>
                </select>
            </div>
            <div>
                <button @click="$emit('addTask', getFormData())">Add task</button>
                <!-- <button @click="getFormData()">Add task</button> -->
            </div>
        </div>
    </section>
</template>
<!------------------------------------------------->
<style scoped>
section {
    display: flex;
    justify-content: center;
}

section > div {
    width: 35rem;
    max-width: 50%;
    min-height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

div > div {
    padding-left: 10px;
    /* width: calc(100% - 10px); */
}

div > div:nth-child(3),
div > div:nth-child(4) {
    display: flex;
    justify-content: center;
}
</style>
