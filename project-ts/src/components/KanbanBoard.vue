<script lang="ts" setup>
import { ref, watch } from "vue"
import type { Ref } from "vue"
import KanbanBoardCard from "./KanbanBoardCard.vue";
import type taskIntr from "../interfaces/taskInterface";



const props = defineProps<{
    newTask: taskIntr
}>()

const ideasList = ref<taskIntr[]>([])
const inProgList = ref<taskIntr[]>([])
const completedList = ref<taskIntr[]>([])


watch(() => props.newTask, () => {
    const taskVal: taskIntr = props.newTask
    const status: string = taskVal.sts

    let flag: Array<any>;

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

function checkIfTaskExists(taskVal: taskIntr, taskList: Ref<taskIntr[]>) {
    for (let i of taskList.value) {
        if (i.proj === taskVal.proj && i.desc === taskVal.desc && i.sts === taskVal.sts) {
            console.log('already exists!!!')
            return [true, taskList]
        }
    }

    return [false, taskList]
}

function checkIfTasksMatch(obj1: taskIntr, obj2: taskIntr) {
    if (obj1.proj === obj2.proj &&
        obj1.desc === obj2.desc &&
        obj1.sts === obj2.sts) {
        return true
    } else {
        return false
    }
}

function changeTaskStatus(obj: taskIntr, action: string) {
    if (obj.sts === 'ideas') {
        for (let i of ideasList.value) {
            if (checkIfTasksMatch(i, obj)) {
                ideasList.value.splice(ideasList.value.indexOf(i), 1)
                if (action === 'promote') {
                    inProgList.value.push({
                        'proj': obj.proj,
                        'desc': obj.desc,
                        'sts': 'in-progress'
                    })
                }
                break
            }
        }
    } else if (obj.sts === 'in-progress') {
        for (let i of inProgList.value) {
            if (checkIfTasksMatch(i, obj)) {
                inProgList.value.splice(ideasList.value.indexOf(i), 1)
                if (action === 'promote') {
                    completedList.value.push({
                        'proj': obj.proj,
                        'desc': obj.desc,
                        'sts': 'completed'
                    })
                } else if (action === 'demote') {
                    ideasList.value.push({
                        'proj': obj.proj,
                        'desc': obj.desc,
                        'sts': 'ideas'
                    })
                }
                break
            }
        }
    } else if (obj.sts === 'completed') {
        for (let i of completedList.value) {
            if (checkIfTasksMatch(i, obj)) {
                completedList.value.splice(ideasList.value.indexOf(i), 1)
                if (action === 'demote') {
                    inProgList.value.push({
                        'proj': obj.proj,
                        'desc': obj.desc,
                        'sts': 'in-progress'
                    })
                }
                break
            }
        }
    } else {
        console.error('Object status did not match any of the 3 statuses')
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
                    <KanbanBoardCard @changeStatus="changeTaskStatus" :task-obj="task"/>
                </li>
            </ul>
        </div>
        <div id="board-in-progress">
            <h3>In-Progress</h3>
            <ul>
                <li v-for="task in inProgList">
                    <KanbanBoardCard @changeStatus="changeTaskStatus" :task-obj="task"/>
                </li>
            </ul>
        </div>
        <div id="board-completed">
            <h3>Completed</h3>
            <ul>
                <li v-for="task in completedList">
                    <KanbanBoardCard @changeStatus="changeTaskStatus" :task-obj="task"/>
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
    background-color: var(--carbon1);
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
