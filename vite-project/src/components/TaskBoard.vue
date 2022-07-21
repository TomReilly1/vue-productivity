<script setup>
const props = defineProps({
    tasks: Array
})

</script>
<!------------------------------------------------->
<template>
<section>
    <div>
        <div id="board-idea">
            <h3>Ideas</h3>
            <ul>
                <li v-for="task in tasks">{{task}}</li>
            </ul>
        </div>
        <div id="board-in-progress">
            <h3>In-Progress</h3>
        </div>
        <div id="board-completed">
            <h3>Completed</h3>
        </div>
    </div>
</section>
</template>
<!------------------------------------------------->
<style scoped>
section > div {
    display: flex;
}

div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    min-height: 15rem;
    background-color: aqua;
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
</style>
