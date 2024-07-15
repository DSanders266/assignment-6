// JavaScript source code
console.log("Array to Object")
const convert = (arr, key) => {
    let result = {};

    // Iterate through the array
    arr.forEach(obj => {
        // Use the value of `key` as the object property name
        // and assign the object itself as its value
        result[obj[key]] = obj;
    });

    return result;
};

// Example usage:
console.log(convert([{ id: 1, value: 'abc' }, { id: 2, value: 'xyz' }], 'id'));