let animals = [
    'Dog',
    'Cat',
    'Horse',
    'Turtle',
    'Hippo'
]




// Foreach Higher Order Function from Scratch
let foreachScratch = (array, callback) => {
    // Loop through the array and call callback function on each element in the array 
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        callback(element, i);
    }
}

// Test Callback Function to pass to Foreach
let foreachCallbackTest = (element, i) => {
    console.log(element);
}

// Testing Foreach Scratch function
foreachScratch(animals, foreachCallbackTest);




// Filter Higher Order Function from Scratch
let filterScratch = (array, callback) => {
    let newArray = [];

    // Loop through the array and call callback function on each element in the array
    // If the callback function returns true, push the element to a new array
    // Return the new array
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if(newElement) {
            newArray.push(element);        
        }
    }
    return newArray;
}

// Test Callback Function to pass to Filter
let filterCallbackTest = (element, i) => {
    return element[0] === 'H';
}

// Testing Scratch Function
let hAnimalList = filterScratch(animals, filterCallbackTest);
console.log(hAnimalList);




// Find Higher Order Function from Scratch
let findScratch = (array, callback) => {
    // Loop through the array and call callback function on each element in the array
    // If the callback function returns true, return the element 
    // (it only returns the first element that returns true)
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if (newElement) {
            return element;
        }
    }
}

// Test Callback Function to pass to Find
let findCallbackTest = (element, i) => {
    return element === 'Dog';
}

// Testing Scratch Function
let findDog = findScratch(animals, findCallbackTest);
console.log(findDog);




// FindIndex Higher Order Function from Scratch
let findIndexScratch = (array, callback) => {
    // Loop through the array and call callback function on each element in the array
    // If the callback function returns true, return the index of that element
    // (it only returns the index of the first element that returns true)
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = callback(element, i);

        if(newElement) {
            return i;
        }   
    }
}

// Test Callback Function to pass to FindIndex
let findIndexCallbackTest = (element, i) => {
    return element === 'Turtle';
}

// Testing Scratch Function
let indexOfTurtle = findIndexScratch(animals, findIndexCallbackTest);
console.log(indexOfTurtle);
