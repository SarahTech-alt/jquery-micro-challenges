$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  // YOUR CODE HERE
  let header = $('<h1>Append to DOM</h1>');
  $('.container').append(header);
  let ulStart = $('<ul id="myList">');
  $('.container').append(ulStart);
  let ulEnd = $('</ul>');
  $('.container').append(ulEnd);

  // // Loop through a list and append all the values to the DOM.
}

