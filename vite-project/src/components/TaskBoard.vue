<script setup>
import { ref, watch } from "vue"
import TaskBoardCard from "./TaskBoardCard.vue";

// const props = defineProps({
//     newtask: Object
// })
const props = defineProps(['newTask'])

const ideasList = ref([])
const inProgList = ref([])
const completedList = ref([])


watch(props.newTask, () => {
    console.log('task watch activated')
    console.log(props.newTask.value)

    const taskVal = props.newTask.value
    const status = taskVal.sts


    let flag;

    switch(status) {
        case 'ideas':
            flag = checkIfTaskExists(taskVal, ideasList)
            break;
        case 'in-progress':
            flag = checkIfTaskExists(taskVal, inProgList)
            break;
        case 'completed':
            flag = checkIfTaskExists(taskVal, completedList)
            break;
        default:
            flag = [null, null]
            console.error('Error: No match found')
    }

    console.log(flag)

    if (!flag[0]) {
        flag[1].value.push(taskVal)
    } else {
        console.error('Error: task may already exist')
    }
})

function checkIfTaskExists(taskVal, taskList) {
    for (let i of taskList.value) {
        if (i.proj === taskVal.proj && i.desc === taskVal.desc && i.sts === taskVal.sts) {
            console.log('already exists!!!')
            return [true, taskList]
        }
    }

    return [false, taskList]
}

function promoteTask(obj) {
    console.log('promoteTask reached')
    if (obj.sts === 'ideas') {
        for (let i of ideasList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                ideasList.value.splice(ideasList.value.indexOf(i), 1)
                inProgList.value.push({
                    'proj': obj.proj,
                    'desc': obj.desc,
                    'sts': 'in-progress'
                })
                break
            }
        }
    } else if (obj.sts === 'in-progress') {
        for (let i of inProgList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                inProgList.value.splice(inProgList.value.indexOf(i), 1)
                completedList.value.push({
                    'proj': obj.proj,
                    'desc': obj.desc,
                    'sts': 'completed'
                })
                break
            }
        }
    }
}
function demoteTask(obj) {
    console.log('demoteTask reached')
    if (obj.sts === 'completed') {
        for (let i of completedList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                completedList.value.splice(completedList.value.indexOf(i), 1)
                inProgList.value.push({
                    'proj': obj.proj,
                    'desc': obj.desc,
                    'sts': 'in-progress'
                })
                break
            }
        }
    } else if (obj.sts === 'in-progress') {
        for (let i of inProgList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                inProgList.value.splice(inProgList.value.indexOf(i), 1)
                ideasList.value.push({
                    'proj': obj.proj,
                    'desc': obj.desc,
                    'sts': 'ideas'
                })
                break
            }
        }
    }
}
function removeTask(obj) {
    if (obj.sts === 'completed') {
        for (let i of completedList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                console.log('remove MATCH')
                completedList.value.splice(completedList.value.indexOf(i), 1)
                break
            }
        }
    } else if (obj.sts === 'in-progress') {
        for (let i of inProgList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                console.log('remove MATCH')
                inProgList.value.splice(inProgList.value.indexOf(i), 1)
                break
            }
        }
    } else if (obj.sts === 'ideas') {
        for (let i of inProgList.value) {
            if (i.proj === obj.proj && i.desc === obj.desc && i.sts === obj.sts) {
                console.log('remove MATCH')
                inProgList.value.splice(inProgList.value.indexOf(i), 1)
                break
            }
        }
    }
}
</script>
<!------------------------------------------------->
<template>
<section>
    <div>
        <div id="board-ideas">
            <h3>Ideas</h3>
            <ul>
                <li v-for="task in ideasList">
                    <TaskBoardCard
                        @promote="promoteTask"
                        @demote="demoteTask"
                        @remove="removeTask"
                        :proj="task.proj"
                        :desc="task.desc"
                        :sts="task.sts"
                    />
                </li>
            </ul>
        </div>
        <div id="board-in-progress">
            <h3>In-Progress</h3>
            <ul>
                <li v-for="task in inProgList">
                    <TaskBoardCard
                        @promote="promoteTask"
                        @demote="demoteTask"
                        @remove="removeTask"
                        :proj="task.proj"
                        :desc="task.desc"
                        :sts="task.sts"
                    />
                </li>
            </ul>
        </div>
        <div id="board-completed">
            <h3>Completed</h3>
            <ul>
                <li v-for="task in completedList">
                    <TaskBoardCard
                        @promote="promoteTask"
                        @demote="demoteTask"
                        @remove="removeTask"
                        :proj="task.proj"
                        :desc="task.desc"
                        :sts="task.sts"
                    />
                </li>
            </ul>
        </div>
    </div>
</section>
</template>
<!------------------------------------------------->
<style scoped>
section > div {
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    padding: 15px 10px;
    cursor: default;
    background-color: var(--black2);
    border-radius: 15px;
    box-shadow: inset 0 0 5px 3px rgba(100, 100, 100, 0.2);
}

div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32%;
    min-height: 25rem;
    border-radius: 15px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

div > div:nth-child(1) {
    background-color: var(--gray1);
}

div > div:nth-child(2) {
    background-color: var(--yellow1);
}

div > div:nth-child(3) {
    background-color: var(--green1);
}

h3 {
    text-decoration: underline;
    color: var(--black1);
}

ul {
    margin: 0;
    padding: 0;
    width: 90%;
    max-width: 20rem;
}

li {
    list-style: none;
    padding: 0;
}
</style>
