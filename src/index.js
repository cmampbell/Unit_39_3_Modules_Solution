import {choice, remove} from './helpers'
import foods from './foods'

const fruit = choice(foods)

console.log(`I'd like one ${fruit}, please.`)
const removed = remove(foods, fruit)
console.log(`Here you go: ${removed}`)
console.log(`Delicious! May I have another?`)
console.log(`I’m sorry, we’re all out. We have ${foods.length} left.`)