$(document).ready(readyNow);

function readyNow(){
    appendBulletItem();
}

function appendBulletItem(){
  // YOUR CODE HERE
  // Use jQuery to add third bullet item to list.
  let header = $('<h1>Append to DOM</h1>');
  $('.container').append(header);

  let ulStart = $('<ul id="myList">');
  $('.container').append(ulStart);
  let li0 = $('<li>First Item</li>');
  $('.container').append(li0);
  let li1 = $('<li>Second Item</li>');
  $('.container').append(li1);
  let ulEnd = $('</ul>');
  $('.container').append(ulEnd);
}
