<script lang="ts" setup>
import { ref } from "vue";
import CalculatorScreen from "./CalculatorScreen.vue";
import CalculatorBtns from "./CalculatorBtns.vue";

const screenOutput = ref<string>('')

function addToScreenOutput(txt: string) {
    console.log('addToScreenOutput() reached')
    screenOutput.value = txt
}

function calculateForScreenOutput(txt: string) {
    console.log('calculateForScreenOutput() reached')

    console.log(txt)
    const splits = txt.split(/([+\-*/])/)
    const splitsCopy = txt.split(/([+\-*/])/)
    console.log(splits)


    let currNumTotal: number;
    let currOpr: string = '';

    try {
        currNumTotal = Number(splits[0])
    } catch (error) {
        console.error(error)
        return
    }

    for (let i of splitsCopy) {
        if (i === '') {
            console.error(
                'There was an empty string.\n' +
                'This is likely because operators were used out of place.\n' +
                'Example: "5+*6" or "24-2++6" or "45*8-5+" or "*17+5/6"'
            )
            screenOutput.value = 'ERROR'
            return
        }

        if (i === '*' || i === '/') {
            console.log('Before:', splits)
            const tempExpr: string[] = splits.splice(splits.indexOf(i)-1 , splits.length)
            console.log('After:', splits)
            console.log(tempExpr)
            let tempTotal: number;
            if (i === '*') {
                tempTotal = Number(tempExpr[0]) * Number(tempExpr[2])
            } else if (i === '/') {
                tempTotal = Number(tempExpr[0]) / Number(tempExpr[2])
            } else {
                throw 'Not "*" or "/"'
            }
            splits.push(tempTotal.toString())
        }
    }

    for (let i of splits) {
        if (i === '') {
            console.error(
                'There was an empty string.\n' +
                'This is likely because operators were used out of place.\n' +
                'Example: "5+*6" or "24-2++6" or "45*8-5+" or "*17+5/6"'
            )
            screenOutput.value = 'ERROR'
            return
        }

        // opr
        if (splits.indexOf(i) % 2 === 1) {
            console.log(i, ' ==> it is an opr')
            if (i === '+' || i === '-') {
                if (splits.indexOf(i) === splits.length - 1) {
                    console.error(
                        'Operators used incorrectly\n' +
                        'Operator is out of place'
                    )
                    return
                } else {
                    currOpr = i
                }
                
            } else {
                console.error(
                    'Operators used incorrectly\n' +
                    'Operator is out of place'
                )
                return
            }
        }
        // num
        else {
            console.log(i, ' ==> it is a num')
            let currNum: number = Number(i)
            // first num
            if (splits.indexOf(i) === 0) {
                continue
            }
            // middle nums
            else {  
                switch (currOpr) {
                    case '+':
                        currNumTotal = (currNumTotal + currNum)
                        break
                    case '-':
                        currNumTotal = (currNumTotal - currNum)
                        break
                    case '*':
                        currNumTotal = (currNumTotal * currNum)
                        break
                    case '/':
                        currNumTotal = (currNumTotal / currNum)
                        break
                }
            }
        }
    }
    console.log(currNumTotal)
    currNumTotal = Number(currNumTotal.toPrecision(10))
    // let numTotalString: string = currNumTotal.toPrecision(10)


    screenOutput.value = currNumTotal.toString()


}

</script>
<!------------------------------------------------->
<template>
<section>
    <div id="calc-container">
        <CalculatorScreen :screen-output="screenOutput"/>
        <CalculatorBtns @add-to-screen="addToScreenOutput" @calculate-expression="calculateForScreenOutput" :computed-value="screenOutput"/>
    </div>
</section>
</template>
<!------------------------------------------------->
<style scoped>
section {
    display: flex;
    justify-content: center;
}

section > div {
    width: 25rem;
    max-width: 50%;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--blue3);
    margin: 30px 0 70px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
