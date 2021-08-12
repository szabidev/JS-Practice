//  MAKE THE BUTTONS TO TOGGLE THE RESULTS



// 1. Using control structures, do the following:
//  a.display in the console the numbers from 1 to 20

//  SELECT THE FIRST DIV
let displayNumbersDiv = document.querySelector('.display-numbers-1');
//  SELECT THE FIRST BUTTON
let displayNumbersBtn = document.querySelector('.display-numbers-btn');
// CREATE AN ul ELEMENT
let ulElement = document.createElement('ul');
//  ADD A CLASS TO ul
ulElement.className = 'ulElement'
console.log(ulElement);

// APPEND THE ul ELEMENT TO THE div ELEMENT
displayNumbersDiv.appendChild(ulElement);
console.log(displayNumbersDiv);
// WHEN CLICKED ON THE FIRST BUTTON INVOKE displayNumbers FUNCTION
displayNumbersBtn.addEventListener('click', displayNumbers);

function displayNumbers() {
    // LOOP FROM 1 TO 20
    for (let i = 1; i <= 20; i++) {
        //  FOR EVERY ITERATION CREATE AN li ELEMENT
        let listElement = document.createElement('li');
        // ADD THE VALUE OF i AS HTML TEXT IN THE ELEMENT
        listElement.innerHTML = i;
        // ADD A CLASS TO li
        listElement.className = 'listElement';
        // APPEND THE li ELEMENT TO THE ul ELEMENT
        ulElement.appendChild(listElement);
        // LOG TO THE CONSOLE THE VALUE OF i
        console.log(i);
    }
}

//  b.display in the console the odd numbers from 1 to 20
// SELECT THE SECOND DIV
let displayOddNumbersDiv = document.querySelector('.display-numbers-2');
// SELECT THE SECOND BUTTON
let displayOddBtn = document.querySelector('.display-numbers-btn-2');
// CREATE AN UL ELEMENT
let ulOdd = document.createElement('ul');
ulOdd.className = 'ulElement';
// APPEND ul ELEMENT TO div
displayOddNumbersDiv.appendChild(ulOdd);
// ADD THE EVENT LISTENER TO THE BUTTON
displayOddBtn.addEventListener('click', displayOddNumbers);

// CREATE FUNCTION
function displayOddNumbers() {
    // LOOP FROM 1 TO 20
    for (let i = 1; i <= 20; i++) {
        // CHECK IF NUMBER IS ODD OR NOT
        if (i % 2 === 1) {
            //  FOR EVERY ITERATION CREATE AN li ELEMENT
            let oddListElement = document.createElement('li');
            // ADD THE VALUE OF i AS HTML TEXT IN THE ELEMENT
            oddListElement.innerHTML = i;
            // ADD A CLASS TO li
            oddListElement.className = 'listElement';
            // APPEND THE li ELEMENT TO THE ul ELEMENT
            ulOdd.appendChild(oddListElement);
            // LOG TO THE CONSOLE THE VALUE OF i
            console.log(i);
        }
    }
}









// 2.   For var list = [2, 3, 5, 7, 5, 3];
let list = [2, 3, 5, 7, 5, 3];
let sum = 0;

let sumDiv = document.querySelector('.sum-of-elements');
let sumParagraph = document.createElement('p');
sumParagraph.className = 'paragraph';
let sumBtn = document.querySelector('.sum-btn');

sumBtn.addEventListener('click', sumOfArray);
//  a.compute the sum of the elements of an array and display it in the console
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
console.log(sum);

function sumOfArray() {
    sumDiv.appendChild(sumParagraph);
    sumParagraph.innerHTML = sum;
}

//  b.compute the maximum of the elements of an array and display it in the console
// console.log(Math.max(...list)); - Shortest solution with Math.max() and the spread operator
let max = list[0];
let maxDiv = document.querySelector('.max-of-elements');
let maxParagraph = document.createElement('p');
maxParagraph.className = 'paragraph';
let maxBtn = document.querySelector('.max-btn');

maxBtn.addEventListener('click', maxOfAnArray);

for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i]
    }
};

console.log(max);

function maxOfAnArray() {
    maxDiv.appendChild(maxParagraph);
    maxParagraph.innerHTML = max;
}

// function maxOfAnArray(arr) {
//     // max VALUE IS THE FIRST ELEMENT IN THE ARRAY
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         // IF THE CURRENT ELEMENT IS BIGGER THEN max VALUE THEN CHANGE max VALUE
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max);
// }

// maxOfAnArray(list);



//  c.compute how many times a certain element appears in an array

let appDiv = document.querySelector('.appearance-of-elements');
let appParagraph = document.createElement('p');
appParagraph.className = 'paragraph';
let appBtn = document.querySelector('.app-btn');

let appears = 0;
function appearanceOfElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            appears++;
        }
    }
    console.log(appears);
}

console.log(appears);
appearanceOfElement(list, 5);
console.log(appears);

appBtn.addEventListener('click', displayElement);

function displayElement() {
    appDiv.appendChild(appParagraph);
    appParagraph.innerHTML = appears;
}


// 3.  Write a program to print Fibonacci series of the first 50 terms:
// 0 1 1 2 3 5 8 13 24 .....
let fibSection = document.querySelector('.fibonacci');
let fibList = document.createElement('ul');
let fibBtn = document.querySelector('.fib-btn');
fibList.className = 'fib-list';
fibSection.appendChild(fibList);

fibBtn.addEventListener('click', fibonacciSequence);

function fibonacciSequence() {
    let fibonacci;
    let firstNum = 0;
    let secondNum = 1;
    for (let i = 1; i < 50; i++) {
        // console.log(firstNum);
        fibonacci = firstNum + secondNum;
        // console.log(fibonacci);
        firstNum = secondNum;
        // console.log(firstNum);
        secondNum = fibonacci;
        // console.log(secondNum);
        console.log(fibonacci);
        let fibListItem = document.createElement('li');
        fibListItem.className = 'fibListItem';
        fibListItem.innerHTML = fibonacci;
        fibList.appendChild(fibListItem);
    }
}
// fibonacciSequence();






// 4. Write a program that prints the numbers from 1 to 100.
//    But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
//    For numbers which are multiples of both three and five print “FizzBuzz”.
let multiSection = document.querySelector('.multiples-of-3-and-5');
let multiBtn = document.querySelector('.multiple-btn');
let multiUl = document.createElement('ul');
multiUl.className = 'multi-list';
multiSection.appendChild(multiUl);

multiBtn.addEventListener('click', fizzBuzz);

function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            let multiUlItem = document.createElement('li');
            multiUlItem.innerHTML = 'FizzBuzz';
            multiUlItem.className = 'multi-item';
            multiUl.appendChild(multiUlItem);
            console.log('FizzBuzz');

        } else if (i % 5 == 0) {
            let multiUlItem = document.createElement('li');
            multiUlItem.innerHTML = 'Buzz';
            multiUlItem.className = 'multi-item';
            multiUl.appendChild(multiUlItem);
            console.log('Buzz')
        } else if (i % 3 == 0) {
            let multiUlItem = document.createElement('li');
            multiUlItem.innerHTML = 'Fizz';
            multiUlItem.className = 'multi-item';
            multiUl.appendChild(multiUlItem);
            console.log('Fizz');
        } else {
            let multiUlItem = document.createElement('li');
            multiUlItem.innerHTML = i;
            multiUlItem.className = 'multi-item';
            multiUl.appendChild(multiUlItem);
            console.log(i);
        }
    }

}


// Write a function for each of the following printing patterns:



