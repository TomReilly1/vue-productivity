<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
    screenOutput: string
}>()

const screenArr = ref<string[]>([])

watch(() => props.screenOutput, () => {
    console.log('task watch activated')
    let temp: string[] = props.screenOutput.split('')
    console.log(temp)
    console.log(temp.length)

    for (let i: number = 0; i < (12-temp.length); i++) {
        screenArr.value[i] = ''
        console.log(i)
    }

    for (let i: number = (12-temp.length); i < 12; i++) {
        screenArr.value[i] = temp[i - (12-temp.length)]
        console.log(i)
    }

})
</script>
<!------------------------------------------------->
<template>
<div id="calc-screen">
    <!-- <span>{{screenOutput}}</span> -->
    <!-- <div v-for="elem of screenArr">
        <span>{{elem}}</span>
    </div> -->
    <div>{{screenArr[0] || ''}}</div>
    <div>{{screenArr[1] || ''}}</div>
    <div>{{screenArr[2] || ''}}</div>
    <div>{{screenArr[3] || ''}}</div>
    <div>{{screenArr[4] || ''}}</div>
    <div>{{screenArr[5] || ''}}</div>
    <div>{{screenArr[6] || ''}}</div>
    <div>{{screenArr[7] || ''}}</div>
    <div>{{screenArr[8] || ''}}</div>
    <div>{{screenArr[9] || ''}}</div>
    <div>{{screenArr[10] || ''}}</div>
    <div>{{screenArr[11] || ''}}</div>
</div>
</template>
<!------------------------------------------------->
<style scoped>
#calc-screen {
    width: 90%;
    height: 3rem;
    /* display: flex;
    justify-content: end;
    align-items: center; */
    display: grid;
    gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);
    background-color: var(--green1);
    color: var(--black1);
    font-size: 2rem;
    font-family: monospace;
    padding: 0 3px;
}

div > div {
    width: 100%;
    height: 86%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(76, 216, 76);
}
</style>
