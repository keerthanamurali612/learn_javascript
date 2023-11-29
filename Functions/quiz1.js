// Write a JavaScript function that reverses a number.

function reverseNumber(num){
    //convert the number to a string
    const str=num.toString();  

    //split the string into an array of char
    const arr=str.split('');


    console.log("Original array");
    console.log(num);


    //reverse the array
    arr.reverse();

    //join the reversed array back into a string
    const reversedStr=arr.join('');

    //convert the string back into a number
    const reversedNum=parseInt(reversedStr);

    //return reversed number
    console.log("Reverse array");
    return reversedNum

}
const reversedNum=reverseNumber(346662);
console.log(reversedNum);



