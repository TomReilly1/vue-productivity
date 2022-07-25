<script lang="ts" setup>

const props = defineProps<{
    btnValue: string
}>()

// const emit = defineProps<{
//     btnValue: string
// }>()

</script>
<!------------------------------------------------->
<template>
    <button>{{btnValue}}</button>
</template>
<!------------------------------------------------->
<style scoped>
div {
    width: 90%;
    height: 70%;
    background-color: var(--black1);
}

button {
    border: 0;
    border-radius: 5px;
    background-color: var(--carbon1);
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 3px 1px rgba(10, 10, 10, 0.3);
    transition: background-color 0.1s, box-shadow 0.1s;
}

button:hover {
    background-color: var(--carbon2);
}

button:active {
    background-color: var(--carbon3);
    box-shadow: inset 0 0 2px 2px rgba(10, 10, 10, 0.3),
                0 0 3px 1px rgba(10, 10, 10, 0.3);
}
</style>
