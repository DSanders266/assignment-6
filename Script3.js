// JavaScript source code
console.log("Flatten a given n-dimensional array")
const flatten = (arr) => {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            // Flatten nested arrays
            result = result.concat(flatten(element));
        } else {
            // Add non-array elements directly
            result.push(element);
        }
    });

    return result;
};

// Example usage:
console.log(flatten([1, [2, 3], [[4], [5]]]));