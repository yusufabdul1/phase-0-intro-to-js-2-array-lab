const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.splice(2, 1)
}

function destructivelyRemoveFirstCat(){
    cats.splice(0, 1)
}

function appendCat(){
    return [...cats, "Broom"]
}

function prependCat(){
    return ["Arnold", ...cats]
}

function removeLastCat(){
    return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}
// Write your solution here!
