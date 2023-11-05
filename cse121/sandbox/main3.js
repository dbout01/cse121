console.log(square(3));
show();


// FUNCTION METHODS

// function output
function show(){
    console.log('This is the output for developers.')
}



// function declaration 1
function square(number) {
    console.log('This is the output for developers.')
}
// function declaration 2
function square(number){
    return number * number;
}
// Both declaration do the same thing



// function expression - can't hoist or call before function
    // to create anonymous functions assigned to constants or variables.
const sq = function (number) {
    return number * number;
}
console.log(sq(5));
document.querySelector('#result').textContent = sq(5);



// function using the arrow syntax
    // same as function expression just different syntax
let squ = (number) => {
    return number * number;
}

console.log(squ(4));

// even shorter syntax -- same as arrow above
const squared = (number) => number * number;

console.log(squ(4));



// ARRAY METHODS
const simple_array = ['a', 'b', 'c'];

//forEach method - with declaration function
simple_array.forEach(show_array); //declaring function

function show_array(item) { //calling function
    console.log(item);
}

//forEach w/ expressions function as the parameter
simple_array.forEach(function show_array(item) {
    console.log(item);
})

//forEach w/ the arrow function
simple_array.forEach(item => console.log(item));



// example 1
const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
    console.log(luckyIndex);
  }
});



// map array method
        // make a new array by changing each of the original array values
    // example 1 - map
        //const steps = ["one", "two", "three"];
        const stepsHtml = steps.map(function (step) {
        return `<li>${step}</li>`;
        });
        document.getElementById("myList").innerHTML = stepsHtml.join(' ');
        console.log(steps);
        console.log(stepsHtml);

        const array1 = [1, 4, 9, 16]
        // pass function to map
        const map1 = array1.map(x => x *2);
        console.log(array1);
        console.log(map1);
    
        // example 2 - map
            const grades = ["A", "B", "A"];
            function convertGradeToPoints(grade) {
            let points = 0;
            if (grade === "A") {
                points = 4;
            } else if (grade === "B") {
                points = 3;
            }
            return points;
            }
            const gpaPoints = grades.map(convertGradeToPoints);
            //console.log(gpaPoints);
        
        // // example 3 - reduce
        //     //reduce array
        // const pointsTotal = gpaPoints.reduce(function (total, item) {
        // return total + item;
        // });
        // const gpa = pointsTotal / gpaPoints.length;

        // console.log(gpa);

                            // example 2
                            // this is the same thing as above, but with an arrow function
                            // const pointsTotal = gpaPoints.reduce((total, item) => total + item);
                            // const gpa = pointsTotal / gpaPoints.length;
                            // console.log(gpa);
    

// filter array
    // create a new array but only with items that pass a certain condition
            const words = ["watermelon", "peach", "apple", "tomato", "grape"];
            const shortWords = words.filter(function (word) {
            return word.length < 6;
            });

            //same thing with an arrow function
            const Words = words.filter((word) => word.length < 6);      
            
            console.log(shortWords);
            console.log(words);









// EVENTS

const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value; //don't forget the '.value'
}
buttonElement.addEventListener("click", copyInput);

// like homework

let btn = document.querySelector('#add');
let output = document.querySelector('#sum');

function addNums() {
    let number1 = document.querySelector('#add').value;
     let number2 = document.querySelector('#add2').value;

     output.value = Number(number1) + Number(number2);
}

btn.addEventListener('click', addNums);





// modules

const nums = [1, 2, 3, 4];
function getEvens(even) {
    return(even % 2 === 0)
}
let evens = nums.filter(getEvens);
console.log(evens );