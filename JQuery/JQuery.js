$('<button>' + "Click Me!" + '</button>').appendTo('body');

$('button').click(function() {
    alert('Hello Beautiful');
})

$('<form></form>').appendTo('body').insertAfter('button');

$('<input class = "text" type = "text"></input>').appendTo('form');

$('<input class = "submitBtn" type = "submit"></input>').appendTo('form');

$('.submitBtn').click(function() {
    alert($('.text').val());
})

$('<div id = "divBox"></div>').appendTo('body').insertAfter('form');

$('#divBox').css({
    "height": "100px",
    "width": "100px",
    "backgroundColor": "green"
});

$('#divBox').mouseover(function(){
    $('#divBox').css("backgroundColor", "red");
})

$('#divBox').mouseout(function() {
    $('#divBox').css("backgroundColor", "green");
})

$('<p>' + "It's a wonderful day to learn to code!" + '</p>').appendTo('body').insertAfter('div');

$('p').click(function() {
    // $('p').css("color", "red");
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    $('p').css({
        "color": getRandomColor()
    });
})

$('<button id = "nameBtn"> Add Name</button>').appendTo('body').insertAfter('p');

$('<div class = "emptyDiv"></div>').appendTo('body').insertAfter('#nameBtn');

$('#nameBtn').click(function() {
    $('<span>Santita Humphries</span>').appendTo('.emptyDiv');
})

$('<button id = "addBtn">Add to List</button>').appendTo('body').insertAfter('.emptyDiv');

$('<ul></ul>').appendTo('body').insertAfter('#addBtn');

let friendArr = ["Pearl", "Tiffany", "Tristan", "Sandra", "Mary", "Juanita", "Jane", "Chloe", "James", "William"];

$('#addBtn').click(function() {
    for(let i = 0; i < friendArr.length; i++) {
        $('<li>' + friendArr[i] + '</li>').appendTo('ul');
    }
})