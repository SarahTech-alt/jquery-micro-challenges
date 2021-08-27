$(document).ready(readyNow);

let myArray = [ 'lion', 'tigers', 'bears' ];

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  // YOUR CODE HERE
  let header = $('<h1>Challenge 120</h1>');
  $('.container').append(header);
  let ul = $('<ul id="myList"></ul>');
  $('.container').append(ul);
  for (let animals in myArray){
    let myAnimals = myArray[animals];
    
  // Loop through a list and append all the values to the DOM.
    $('.container').append('<li>' + myAnimals + '</li>');
}
}

