<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { emit } from 'process';
import Calculator from "../components/Calculator.vue";



</script>
<!------------------------------------------------->
<template>
<main>
    <Calculator />
</main>
</template>
<!------------------------------------------------->
<style scoped>
main {
    min-height: calc(100% - 200px);
}
</style>
