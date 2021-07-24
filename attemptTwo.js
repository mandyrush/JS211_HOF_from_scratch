let animals = [
    'Dog',
    'Cat',
    'Horse',
    'Turtle',
    'Hippo'
]

// Foreach

// Test Callback Function to pass to Foreach
let foreachCallbackTest = (element, i) => {
    console.log(element);
}

// Foreach from Scratch
let foreachScratch = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        callback(element, i);
    }
}

// Testing Scratch function
foreachScratch(animals, foreachCallbackTest);




// Filter

// Test Callback Function to pass to Filter
let filterCallbackTest = (element, i) => {
    return element[0] === 'H';
}

// Filter from Scratch
let filterScratch = (array, callback) => {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if(newElement) {
            newArray.push(element);        
        }
    }
    return newArray;
}

// Testing Scratch Function
let hAnimalList = filterScratch(animals, filterCallbackTest);
console.log(hAnimalList);




// Find

// Test Callback Function to pass to Find
let findCallbackTest = (element, i) => {
    return element === 'Dog';
}

// Find from Scratch
let findScratch = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if(newElement) {
            return element;
        }
    }
}

// Testing Scratch Function
let threeLetterAnimals = findScratch(animals, findCallbackTest);
console.log(threeLetterAnimals);



// FindIndex

// Test Callback Function to pass to FindIndex
let findIndexCallbackTest = (element, i) => {
    return element === 'Turtle';
}

// FindIndex from Scratch
let findIndexScratch = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if(newElement) {
            return i;
        }   
    }
}

// Testing Scratch Function
let indexOfTurtle = findIndexScratch(animals, findIndexCallbackTest);
console.log(indexOfTurtle);
