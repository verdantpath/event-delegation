function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

// set up event listeners to call itemDone() on click event
// get shopping list <ul>
var el = document.getElementById('shoppingList');
// if event listeners are supported
if (el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
  el.attachEvent('onclick', function(e) {
    itemDone(e);
  });
}
