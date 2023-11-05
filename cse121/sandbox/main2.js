// Comparisons
show();
console.log(5 > 5 || 9 === 9);



// Conditions

let yourage = 17;

if (yourage > 17) {
  console.log('You can vote!');
} else {
  console.log('You cannot vote!');
}

let numSales = 1001;

if (numSales <= 50) {
  console.log('Way to few sales');
} else if (numSales <= 1000) {
  console.log('Average number of sales');
} else {
  console.log('A good number of sales.');
}

let age = 18;

if (age > 18) {
  console.log('Can go to University');
} else if (age <= 5) {
  console.log('No school');
} else {
  console.log('High School');
}



// Switch

let grade = 'A'; // case sensistive
let gpaPoints = 0;
switch (grade) {
  case 'A':
    gpaPoints = 4;
    break;
  case 'B':
    gpaPoints = 3;
    break;
  case 'C':
    gpaPoints = 2;
    break;
  case 'D':
    gpaPoints = 1;
    break;
  default:
    gpaPoints = -1;
}
console.log(gpaPoints);

console.log(Math.random());

num = 0.5;
if (num > 0.5) {
  console.log('heads');
} else {
  console.log('tails');
}



// DOM

document.querySelector('h1').txtContent = 'New Output'; //looks into document, finds h1 & makes new output
document.getElementById('main_title').textContent = 'Newer Output';
document.querySelector('#main_title').textContent = 'Newest Output';
document.querySelector('div').textContent = 'Div Output';



// setAttribute Method

let student = 'images/student.jpeg';

document.querySelector('img').setAttribute('src', 'student');
document.querySelector('img').setAttribute('alt', 'happy student');
document.querySelector('img').setAttribute(width, 400);

// Create element in JS
//     1. create element
//     2. add content
//     3. add to the page
let newPara = document.createElement('p');
newPara.textContent = 'This is text for my paragraph.';
document.body.appendChild(newPara);

// OR

// adding a brand new p1
let para = document.querySelector('.p1');
para.innerHTML += '<span>This is more information.</span>';



// Functions
function show() {
  console.log('This is it');
}

show();

let num1 = 2;
let num2 = 8;

function addIt(n1, n2) {
  return(n1 + n2);
}

document.querySelector('.t1').textContent = addIt(num1, num2);

let newH1 = document.createElement('h1');
newH1.textContent = addIt (num1, num2);
document.body.appendChild(newH1);



// Arrays

let classes = ['CSE121B', 'CIT354', 'WDD130'];

console.log(classes);

console.log(classes[2]);

classes[2] = 'WDD130';

classes[2] = 'WDD130';

document.querySelector('#courses').textContent = classes.join(', '); //'join' adds space between courses



// Array methods

        // Push adds to end of array
        classes.push('CIT222');
        document.querySelector('#courses').textContent = classes.join(', ');

        // shift takes off from the beginning
        classes.shift();
        document.querySelector('#courses').textContent = classes.join(', ');

        // splice removes from the index as 1st parameter & how many from 2nd parameter
        classes.splice(2,1);
        document.querySelector('#courses').textContent = classes.join(', ');

        //pop removes from the end of array
        classes.pop();
        document.querySelector('#courses').textContent = classes.join(', ');

        let date = new Date();
        let year = date.getFullYear(date);

        console.log(date);
        console.log(date);