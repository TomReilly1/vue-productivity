<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from 'vue-router'


const router = useRouter()
const route = useRoute()
const header = ref('')


function capitalizeWord(header) {
    const lower = header.toLowerCase()
    const first = lower.charAt(0).toUpperCase()
    return first + lower.slice(1)
}


watch(route, () => {
    const projName = route.params.project
    if (projName === undefined) {
        header.value = 'Home'
    } else {
        header.value = capitalizeWord(projName)
    }
})
</script>
<!------------------------------------------------->
<template>
    <header>
        <div>
            <h1>{{header}}</h1>
        </div>
    </header>
</template>
<!------------------------------------------------->
<style scoped>
header {
    width: 100%;
    height: 100px;
    cursor: default;
    /* margin: 0 0 30px; */
}

div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 0;
    font-size: 2.2rem;
    text-decoration: underline;
}
</style>
