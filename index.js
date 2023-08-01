// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function arrayfunction() {
    beforeEach(function () {
        cats.length=0;

        cats.push('Milo','Otis','Garfield')
    })
}

function destructivelyAppendCat(name) {
    cats.push('Ralph')
    console.log('after push', cats);
}
const catspush = destructivelyAppendCat()

function destructivelyPrependCat(params) {
    cats.unshift("Bob")
    console.log('after unshift', cats);
}
const afterUnshift = destructivelyPrependCat()

function destructivelyRemoveLastCat() {
    cats.pop()
    console.log('after pop', cats);
}
const catAfterremove = destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    cats.shift()
}


function appendCat() {
    return [ ...cats, "Broom"]
}

function prependCat() {
    return ["Arnold", ... cats]
}
function removeLastCat() {
    return cats.slice(0, 2)
}

function removeFirstCat() {
    return cats.slice(1)
}