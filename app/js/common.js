/*global window, document, getElementsByClassName, moveAt*/

var separator = document.getElementById('separator'),
  showcasePartRight = document.getElementById('showcasePartRight'),
  showcasePartLeft = document.getElementById('showcasePartLeft'),
  showcasePartRightVisible = document.getElementById('showcasePartRightVisible');

function getCoords(elem) {
  'use strict';
  var box = elem.getBoundingClientRect(),
    body = document.body,
    docEl = document.documentElement,
    scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop = docEl.clientTop || body.clientTop || 0,
    clientLeft = docEl.clientLeft || body.clientLeft || 0,
    top  = box.top +  scrollTop - clientTop,
    left = box.left + scrollLeft - clientLeft;
  return { top: Math.round(top), left: Math.round(left) };
}

separator.onmousedown = function (e) {
  'use strict';
  var coords = getCoords(separator),
    shiftX = e.pageX - coords.left - 25; // сдвиг по X относительно центра сепаратора
  separator.style.position = 'absolute';
  document.body.appendChild(separator);
  moveAt(e);
  showcasePartRightVisible.style.zIndex = 1000;
  separator.style.zIndex = 1200;
  showcasePartLeft.style.zIndex = 800;
  showcasePartRight.style.zIndex = 900;

  function moveAt(e) {
    if (e.pageX > 837 && e.pageX < 1000) {
      separator.style.left = e.pageX - 25 + 'px';
      showcasePartRight.style.left = e.pageX + 'px';
      showcasePartRight.style.width = 965 - (e.pageX - shiftX - 350) + 'px';
    }
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  separator.onmouseup = function () {
    document.onmousemove = null;
    separator.onmouseup = null;
  };
};

separator.ondragstart = function () {
  'use strict';
  return false;
};