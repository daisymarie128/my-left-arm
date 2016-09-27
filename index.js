/* -------------------------

  I'd give my left to work for you.
  This is a quick site built to send to potential employers where I really want to work.
  This file simply listens to the mouse movement and updates the css accordingly.

---------------------------- */



// (function () {
    var container,
        reveal,
        infoBtn,
        closeBtn,
        infoPopOut;

    reveal = document.getElementsByClassName('reveal')[0];
    infoBtn = document.getElementById('info-btn');
    closeBtn = document.getElementById('close');
    infoPopOut = document.getElementById('info-pop-out');
    document.addEventListener('mousemove', function (ev) {
        reveal.style.top = ev.clientY - 65 + 'px';
        return reveal.style.left = ev.clientX - 65 + 'px';
    });

    infoBtn.addEventListener('click', function() {
      infoPopOut.classList.add('show');
    });

    closeBtn.addEventListener('click', function() {
      infoPopOut.classList.remove('show');
    });



// }.call(this));


// this is for a future version on mobile
// // create our hammer element
// var hammerEl = new Hammer(container);
//
// // listen for our movement on a device
// // then move our div
// hammerEl.on("panstart panmove", function(ev) {
//   var yPosition = ev.srcEvent.touches[0].clientY;
//   var xPosition = ev.srcEvent.touches[0].clientX;
//   reveal.style.top = yPosition - 65 + 'px';
//   return reveal.style.left = xPosition - 65 + 'px';
// });
