hljs.initHighlightingOnLoad();

(function() {

  var current = 0;
  var slides = document.getElementsByTagName('section');
  var total = slides.length;

  slides[0].classList.add('current');

  // show the current slide by adding the `current` class
  var showCurrent = function() {
    var showSlide = Math.abs(current % total);

    [].forEach.call(slides, function(el) {
      el.classList.remove('current');
    });

    slides[showSlide].classList.add('current');
  };

  // listen for keypresses to navigate slides
  document.onkeydown = function(event) {
    var e = event || window.event;

    if (e.keyCode == '37' || // left
        e.keyCode == '40' || // down
        e.keyCode == '8'  || // backspace
        e.keyCode == '72' || // h
        e.keyCode == '74') { // j
      current--;
      showCurrent();
    }

    if (e.keyCode == '39' || // right
        e.keyCode == '38' || // up
        e.keyCode == '32' || // space
        e.keyCode == '76' || // l
        e.keyCode == '75') { // k
      current++;
      showCurrent();
    }
  };

})();
