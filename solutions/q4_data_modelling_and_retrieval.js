// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruits = [
    {
        id : 1,
        name : 'Apple',
        color : 'red',
        pricePerKg : 150
    },
    {
        id : 2,
        name : 'Orange',
        color : 'Orange',
        pricePerKg : 100
    },
    {
        id : 3,
        name : 'Mango',
        color : 'yellow',
        pricePerKg : 80
    },
    {
        id : 4,
        name : 'Watermelon',
        color : 'green',
        pricePerKg : 50
    }
]

// write a function to retrive the fruits details with name property

let retriveFruits = (fname) =>{
    console.log('Inside Javascript function ');
    const output = fruits.find(fruit => fruit.name === fname);
    document.getElementById("display").innerHTML = (JSON.stringify(output));
    return output;
}

