/*global window, document, getElementsByClassName, moveAt, $, console, screen, windowWidth, self*/

var html = document.documentElement,
  body = document.body,
  separator = document.getElementById('separator'),
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

function startPosition() {
  'use strict';
  if (html.clientWidth === 1903) { // 100%
    separator.style.left = 812 + 'px';
    showcasePartRight.style.left = 837 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 2114) { // 90%
    separator.style.left = 916 + 'px';
    showcasePartRight.style.left = 941 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 2379) { // 80%
    separator.style.left = 1048 + 'px';
    showcasePartRight.style.left = 1073 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 2537) { // 75%
    separator.style.left = 1128 + 'px';
    showcasePartRight.style.left = 1153 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 2855) { // 67%
    separator.style.left = 1287 + 'px';
    showcasePartRight.style.left = 1312 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 3806) { // 50%
    separator.style.left = 1764 + 'px';
    showcasePartRight.style.left = 1789 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 5709) { // 33%
    separator.style.left = 2715 + 'px';
    showcasePartRight.style.left = 2740 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 7612) { // 25%
    separator.style.left = 3668 + 'px';
    showcasePartRight.style.left = 3693 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 1730) { // 110%
    separator.style.left = 725 + 'px';
    showcasePartRight.style.left = 750 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  } else if (html.clientWidth === 1522 || html.clientWidth === 1269 || html.clientWidth === 1087 || html.clientWidth === 952 || html.clientWidth === 761 || html.clientWidth === 634 || html.clientWidth === 476 || html.clientWidth === 381) { // 125%, 150%, 175%, 200%, 250%, 300%, 400%, 500%
    separator.style.left = 660 + 'px';
    showcasePartRight.style.left = 685 + 'px';
    showcasePartRight.style.width = 430 + 'px';
  }
}

separator.onmousedown = function (e) {
  'use strict';
  separator.style.position = 'absolute';
  var coords = getCoords(separator),
    shiftX = e.pageX - coords.left - 25;
  document.body.appendChild(separator);
  moveAt(e);
  showcasePartRightVisible.style.zIndex = 1000;
  separator.style.zIndex = 1200;
  showcasePartLeft.style.zIndex = 800;
  showcasePartRight.style.zIndex = 900;

  function moveAt(e) {
    var field = (html.clientWidth - 1600) / 2;
    if (field > 0) {
      if (e.pageX > (field + 685 + shiftX) && e.pageX < (field + 835 + shiftX)) {
        separator.style.left = e.pageX - shiftX - 25 + 'px';
        showcasePartRight.style.left = e.pageX - shiftX + 'px';
        showcasePartRight.style.width = 250 + 'px';
      }
    } else {
      if (e.pageX > 685 + shiftX && e.pageX < 835 + shiftX) {
        separator.style.left = e.pageX - shiftX - 25 + 'px';
        showcasePartRight.style.left = e.pageX - shiftX + 'px';
        showcasePartRight.style.width = 250 + 'px';
      }
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

startPosition();

// Slider initialization
$('.slider').slick({
  infinite: true,
  draggable: false,
  centerMode: true,
  variableWidth: true,
  lazyLoad: 'progressive',
  initialSlide: 2,
  slidesToShow: 3,
  slidesToScroll: 1
});
