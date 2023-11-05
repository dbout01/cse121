// 1 - objects
const car = {type: 'Fiat', model: '500', color: 'white'}; //object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

console.log(person.firstName + ' drives a ' + car.type);





// 2 - A course object
const aCourse = {
    code:'CSE121b',
    name: 'JavaScript Language',
    logo: 'images/placeholder.png',
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TR', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 361', enrolled: 40, days: 'MW', instructor: 'Sis A'}
    ],
    showSection: function() {
        console.log(this.sections[0].sectionNum);
    },
    enrollStudent: function(sectionNum) {
        //takes user section # and gets index for that section
        const sectionIndex = this.sections.findIndex((item) => item.sectionNum == sectionNum);
        //add one to that section
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled ++;
            renderSections(this.sections);
            console.log(this.item);
        }
    }
};

document.querySelector('#enrollStudent').addEventListener('click', function () {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
})

// aCourse.enrollStudent(2); 

aCourse.showSection();


function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join(" - ");
}


console.log(aCourse.sections[0].roomNum);

// adding an 'li' with the first room number in array
document.querySelector('#sections').innerHTML = '<li>' + aCourse.sections[0].roomNum +'</li>';

// adding all the room numbers of the array
aCourse.sections.forEach(item => {
    document.querySelector('#sections').innerHTML +=  '<li>' + item.roomNum +'</li>';
});

//adding new 'li' elements from scratch
aCourse.sections.forEach(function(item) {
    let newListItem = document.createElement('li');
    newListItem.textContent = item.roomNum;
    document.querySelector('#sections').appendChild(newListItem);
});

console.log(aCourse.name);

//Adding an image
document.querySelector('#title').textContent = aCourse.name;

document.querySelector('img').setAttribute('src', aCourse.logo);
document.querySelector('img').setAttribute('alt', aCourse.logo);