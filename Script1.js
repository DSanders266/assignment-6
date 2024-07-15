// JavaScript source code
console.log("Pyramid")
const buildPyramid = (num) => {
    let pyramid = '';
    // Loop through each row
    for (let i = 0; i < num; i++) {
        // Add spaces for alignment
        for (let j = 0; j < num - i - 1; j++) {
            pyramid += ' ';
        }

        // Add stars for this row and start new line
        for (let k = 0; k <= i; k++) {
            pyramid += '* ';
        }
        pyramid += '\n';
    }
    return pyramid;
};

// Run the function with a height of 10.
//This value can be changed to change the number of levels
console.log(buildPyramid(10));