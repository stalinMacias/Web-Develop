/*
    A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

    Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

    You can expect all test case arguments to be strings representing values greater than 0.

*/

function divisibleByThree(str){
    var sum = 0;
    var cont = 0;
    var arr = str.split('');

    while(cont < str.length){
        sum += parseInt(arr[cont],10);
        cont++;
    }
    
    return sum % 3 == 0 ? true : false;
}


console.log(divisibleByThree('100853'));