<script setup>
import { ref } from 'vue'


const emit = defineEmits(['addTask'])

const statuses = ref([
    'ideas',
    'in-progress',
    'completed'
])

const getFormData = () => {
    const proj_val = document.getElementById("task-proj").value
    const desc_val = document.getElementById("task-desc").value
    const status = document.getElementById("task-sts")
    const status_val = status.options[status.selectedIndex].value


    const emitObj = {
        'proj': proj_val,
        'desc': desc_val,
        'sts': status_val
    }

    console.log(emitObj)

    return emitObj
}
</script>
<!------------------------------------------------->
<template>
    <section>
        <div>
            <h3>Add a task to the board</h3>
            <div>
                <!-- <label for="task-proj">Project&#8195;</label> -->
                <span>Project&#8195;</span>
                <input type="text" id="task-proj" name="task-proj" placeholder="Enter project name...">
            </div>
            <div>
                <!-- <label for="task-desc">Task&#8195;&#8195;</label> -->
                <span>Task&#8195;</span>
                <!-- <input type="text" id="task-desc" name="task-desc"> -->
                <textarea name="task-desc" id="task-desc" cols="22" rows="4" maxlength="100" placeholder="Enter description of task (Max char: 100)"></textarea>
            </div>
            <div>
                <select name="task-sts" id="task-sts">
                    <option value="" disabled selected hidden>Select status...</option>
                    <option v-for="status in statuses" :value="status">
                        {{status}}
                    </option>
                </select>
            </div>
            <div>
                <button @click="$emit('addTask', getFormData())">Add task</button>
            </div>
        </div>
    </section>
</template>
<!------------------------------------------------->
<style scoped>
h3 {
    margin: 0;
    text-decoration: underline;
}

section {
    display: flex;
    justify-content: center;
}

section > div {
    width: 25rem;
    max-width: 50%;
    min-height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--black2);
    margin: 30px 0 70px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

div > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    padding-left: 10px;
}

#task-proj {
    width: 194px;
}

div > div:nth-child(4),
div > div:last-child {
    display: flex;
    justify-content: center;
}


textarea {
    resize: none;
}

div input,
div textarea,
div button,
div select {
    background-color: var(--black1);
    border: 0;
    border-radius: 3px;
    padding: 5px;
    box-shadow: inset 0 0 2px 1px rgba(100, 100, 100, 0.5),
                0 0 2px 1px rgba(0, 0, 0, 0.2);
    transition: background-color 0.5s;
}

div input:hover,
div input:focus,
div textarea:hover,
div textarea:focus,
div select:hover,
div select:focus {
    background-color: rgba(164, 175, 255, 0.3);
}

div button:hover {
    background-color: rgba(41, 207, 0, 0.384);
}
</style>
