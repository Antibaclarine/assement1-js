// Write a function that takes in a string and returns it when reversed
// let food = "eating"
    
    // let food = "eating"
    
// console.log(food1.reverse());

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function mergeSort(num){
    if(num<=1){
        return num
    }
    let middle=Math.floor(num.length/2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    
    console.log({left});
    console.log({right});
    return sortedArray(mergeSort(left),mergeSort(right))
}
function sortedArray(left,right){
    let emptyArray=[]
    while (left.length && right.length) {
        
        if (left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    console.log(emptyArray);
    return[...emptyArray,...left,...right]
    
}
let num=[2,8,0,23,5,45,76]
console.log(mergeSort(num));
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for (i = 0;i < year.length;i++) {
   if(i%2==0){
    console.log("2020 is a leap year");

   }
   else{
    console.log("2001 is not a leap year");
   }
    
}
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for ( i = 0; i < array.length; i++) {
    if(array/2==0){
console.log("fizz");
    }
    else{
        console.log("Fizzbuzz");
    }
    
}

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
for ( i = 0; i < numArray.length; i++) {
    
    
}

