function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

function itemDone(e) {
  // remove item from the list
  var target, elParent, elGrandparent
  // get the item clicked link
  target = getTarget(e);
  // get its list item (parent element)
  elParent = target.parentNode;
  // get the list (ul parent element)
  elGrandparent = target.parentNode.parentNode;
  // remove the list item from the list
  elGrandparent.removeChild(elParent);

  // prevent the link from taking you away from the current page (default behavior)
  if (e.preventDefault) {
    e.preventDefault;
  } else {
    // for older versions of IE (lte IE8)
    e.returnValue = false;
  }
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
