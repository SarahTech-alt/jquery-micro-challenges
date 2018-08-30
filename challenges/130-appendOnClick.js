$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  let header = $('<h1>Append to DOM</h1>');
  $('.container').append(header);
  let button = $('<button id="appendButton">Click Me</button>');
  $('.container').append(button);
  let ulStart = $('<ul id="myList">');
  $('.container').append(ulStart);
  let ulEnd = $('</ul>');
  $('.container').append(ulEnd);

  // YOUR CODE HERE
  // Append a new row to the DOM on a click
}

