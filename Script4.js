// JavaScript source code
console.log("Fruit List")
const fruitList = [
    { name: "banana", color: 'yellow', pricePerKg: 50 },
    { name: "apple", color: 'red', pricePerKg: 100 },
    { name: "orange", color: 'orange', pricePerKg: 120 }
];


// Get fruit detailss
function getDetails(fruitName) {
    // Find the fruit object in the fruitList array
    const fruit = fruitList.find(fruit => fruit.name === fruitName);

    // Check if fruit is found
    if (fruit) {
        return {
            color: fruit.color,
            pricePerKg: fruit.pricePerKg
        };
    } else {
        // If fruit is not found, return null or handle as needed
        return null;
    }
}

// Example usage:
console.log(getDetails("apple"));
console.log(getDetails("banana")); 
console.log(getDetails("orange")); 
console.log(getDetails("grape")); 