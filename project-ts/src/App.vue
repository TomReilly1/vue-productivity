<script lang="ts" setup>
import TheNavbar from "./components/TheNavbar.vue"
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"
</script>
<!------------------------------------------------->
<template>
    <TheNavbar />
    <div id="content">
        <TheHeader />
        <router-view/>
        <TheFooter />
    </div>
</template>
<!------------------------------------------------->
<style scoped>
:deep(a) {
    color: unset;
    text-decoration: none;
    transition: color 0.3s;
}

:deep(a):visited {
    color: unset;
}

:deep(a):hover {
    color: var(--purple1);
}

#content {
    padding: 0;
    width: calc(100% - 150px);
}

:deep(main) {
    min-height: calc(100% - 150px);
}
</style>
