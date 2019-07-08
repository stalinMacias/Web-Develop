/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/

function sortArray(array) {
    let odd = array.filter(number => number % 2 !== 0).sort((num1,num2) => num1 - num2);
    let even = array.filter(number => number % 2 === 0).sort((num1,num2) => num1 - num2).reverse();
    return array.map(num => num % 2 ? odd.shift() : even.shift());
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]));
