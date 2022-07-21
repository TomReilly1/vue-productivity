<script setup>
import TheNavbar from "./components/TheNavbar.vue"
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"
</script>
<!------------------------------------------------->
<template>
    <TheNavbar />
    <div>
        <TheHeader />
        <router-view/>
        <TheFooter />
    </div>
</template>
<!------------------------------------------------->
<style scoped>
    /* body :deep(nav) {
        height: 20rem;
        background-color: aqua;
    } */
    div {
        padding: 0 20px;
        width: 100%;
    }
</style>
