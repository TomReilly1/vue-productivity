<script lang="ts" setup>

const props = defineProps<{
    btnValue: number
}>()

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
}

button {
    border: 0;
    border-radius: 5px;
    background-color: var(--black1);
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 3px 1px rgba(10, 10, 10, 0.3);
    transition: background-color 0.1s, box-shadow 0.1s;
}

button:hover {
    background-color: var(--black2);
}

button:active {
    background-color: var(--black3);
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.5),
                0 0 3px 1px rgba(10, 10, 10, 0.3);
}
</style>
