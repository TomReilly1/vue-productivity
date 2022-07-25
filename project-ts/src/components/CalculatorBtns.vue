<script lang="ts" setup>
import { ref, watch } from "vue";


// const inputString = '5+65/4-34*3'
// const splits = inputString.split(/([*+-/])/)

// console.log(splits)


// PROPS
const props = defineProps(['computedValue'])


// EMITS
const emit = defineEmits(['addToScreen', 'calculateExpression'])


// REFS
const inputStr1 = ref<string>('')
const inputStr2 = ref<string>('')
const currOpr = ref<string>('')
const expression = ref<string>(
    inputStr1.value + currOpr.value + inputStr2.value
)


// WATCHERS
watch([inputStr1, inputStr2, currOpr], () => {
    console.log('watch activated')
    expression.value = inputStr1.value + currOpr.value + inputStr2.value
    console.log('Expression: ', expression.value)
    emit('addToScreen', expression.value)
})

watch(expression, () => {
    console.log('"expression" watch activated')
    console.log('Expression: ', expression.value)
    emit('addToScreen', expression.value)
})

watch(() => props.computedValue, () => {
    console.log('"props - computedValue" watch activated')
    console.log('Expression: ', expression.value)
    expression.value = props.computedValue
})


// FUNCTIONS
function clearEverything() {
    inputStr1.value = ''
    inputStr2.value = ''
    currOpr.value = ''
    expression.value = ''
}

function addToExpression(charToAdd: string) {
    if (expression.value.length >= 12) {
        return
    }
    expression.value += charToAdd
    console.log('Expression after adding char: ', expression.value)
}

function removeFromExpression() {
    expression.value = expression.value.slice(0,-1)
    console.log('Expression after removing char: ', expression.value)
}

function sendExpression() {
    emit('calculateExpression', expression.value)
}
</script>
<!------------------------------------------------->
<template>
<div id="calc-btnpad">
    <button id="btn-backspace" class="row-one" @click="removeFromExpression()">&larr;</button>
    <button id="btn-ce" class="row-one" @click="clearEverything()">CE</button>

    <button class="row-two btn-num" @click="addToExpression('7')">7</button>
    <button class="row-two btn-num" @click="addToExpression('8')">8</button>
    <button class="row-two btn-num" @click="addToExpression('9')">9</button>
    <button class="row-two btn-opr" @click="addToExpression('+')">+</button>

    <button class="row-three btn-num" @click="addToExpression('4')">4</button>
    <button class="row-three btn-num" @click="addToExpression('5')">5</button>
    <button class="row-three btn-num" @click="addToExpression('6')">6</button>
    <button class="row-three btn-opr" @click="addToExpression('-')">-</button>

    <button class="row-four btn-num" @click="addToExpression('1')">1</button>
    <button class="row-four btn-num" @click="addToExpression('2')">2</button>
    <button class="row-four btn-num" @click="addToExpression('3')">3</button>
    <button class="row-four btn-opr" @click="addToExpression('*')">*</button>

    <button class="row-five btn-num" @click="addToExpression('0')">0</button>
    <button class="row-five btn-dec" @click="addToExpression('.')">.</button>
    <button class="row-five btn-eql" @click="sendExpression()">=</button>
    <button class="row-five btn-opr" @click="addToExpression('/')">/</button>
</div>
</template>
<!------------------------------------------------->
<style scoped>
div {
    width: 90%;
    height: 70%;
    display: grid;
    grid-gap: 10px 15px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
}

.row-one {
    grid-column: span 2;
    font-size: 2rem;
}

button {
    border: 0;
    border-radius: 5px;
    background-color: var(--carbon1);
    color: white;
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

.btn-num {
    background-color: var(--darkblue1);
}

.btn-num:hover {
    background-color: var(--darkblue2);
}

.btn-num:active {
    background-color: var(--darkblue3);
    box-shadow: inset 0 0 5px 1px rgba(2, 2, 59, 0.363),
                0 0 3px 1px rgba(10, 10, 10, 0.3);
}

#btn-ce {
    background-color: var(--red1);
}

#btn-ce:hover {
    background-color: var(--red2);
}

#btn-ce:active {
    background-color: var(--red3);
}
</style>
