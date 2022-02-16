let button = document.createElement('button');
button.textContent = "Click Me!"
document.body.appendChild(button);

button.addEventListener('click', function() {
    alert('Hello Beautiful! (1)');
})
let contaimer = document.createElement('div');
document.body.appendChild(contaimer);

let form = document.createElement('form');
form.style.marginTop = "4px";
contaimer.appendChild(form);

let input1 = document.createElement('input');
input1.type = "text";
input1.id = "message"
form.appendChild(input1);

let input2 = document.createElement('input');
input2.type = "submit"
input2.id = "submitBtn"
form.appendChild(input2);

input2.addEventListener('click', function() {
    alert(input1.value);
})


let newDiv = document.createElement('div');
contaimer.appendChild(newDiv);
newDiv.style.marginTop = "5px";
newDiv.style.height = '100px'
newDiv.style.width = '100px'
newDiv.style.backgroundColor = 'green';



newDiv.addEventListener('mouseover', function() {
    newDiv.style.backgroundColor = 'red';

    newDiv.addEventListener('mouseout', function() {
        newDiv.style.backgroundColor = 'green';
    })
})

let paragraph = document.createElement('p');
paragraph.textContent =
"It's a beautiful day to learn to code!";

contaimer.appendChild(paragraph);

paragraph.addEventListener('click', function() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
   paragraph.style.color = getRandomColor(); 
})

let anotherDiv = document.createElement('div');

contaimer.appendChild(anotherDiv);

let newButton = document.createElement('button');
newButton.textContent = 'Add Name';
anotherDiv.appendChild(newButton);

let emptyDiv = document.createElement('div')
emptyDiv.style.marginTop = '5px';
contaimer.appendChild(emptyDiv);

newButton.addEventListener('click', function() {
    let span = document.createElement('span');
    span.textContent = "Santita Humphries";
    emptyDiv.appendChild(span);
}, {once: true})

let listButton = document.createElement('button');
listButton.textContent = 'Add to list';
contaimer.appendChild(listButton);

let ul = document.createElement('ul');
contaimer.appendChild(ul);

let friendArr = ["Pearl", "Tiffany", "Tristan", "Sandra", "Mary", "Juanita", "Jane", "Chloe", "James", "William"];

listButton.addEventListener('click', function() {
    for(let i = 0; i < friendArr.length; i++) {
        let li = document.createElement('li');
        li.textContent = friendArr[i];
        ul.appendChild(li);
    }
})










