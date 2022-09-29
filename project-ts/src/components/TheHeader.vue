<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, type RouteRecordName } from 'vue-router'


const route = useRoute()
const header = ref<string>('')


function capitalizeWord(header: string) {
    const lower: string = header.toLowerCase()
    const first: string = lower.charAt(0).toUpperCase()
    const output: string = first + lower.slice(1)
    return output
}


watch(route, () => {
    const routeName: RouteRecordName | null | undefined = route.name

    if (routeName === null || routeName === undefined) {
        console.error('Page not found: route is null or undefined')
    } else {
        if (typeof routeName === "symbol") {
            console.error('Page not found: route is a symbol')
        } else {
            header.value = routeName
            console.log(typeof routeName)
        }
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
