/* -------------------------

  I'd give my left to work for you.
  This is a quick website built for potential employers I'd really like to work with.
  This file simply listens to the mouse movement and updates the css accordingly.

---------------------------- */



window.onload = function() {
  var reveal = document.getElementById('reveal'),
      xray = document.getElementById('xray'),
      container = document.getElementById('container'),
      hammerEl = new Hammer(container),
      infoBtn = document.getElementById('info-btn'),
      closeBtn = document.getElementById('close'),
      infoPopOut = document.getElementById('info-pop-out'),
      errorBanner = document.getElementById('error-banner'),
      currentMousePos = {
        x: -1,
        y: -1
      };

  uglyBrowserSniff();

  // this handles opening and closing of about text
  infoBtn.addEventListener('click', function() {
    infoPopOut.classList.add('show');
  });

  closeBtn.addEventListener('click', function() {
    infoPopOut.classList.remove('show');
  });

  // this handles the image reveal on desktop
  reveal.addEventListener('mousemove', function(e) {
    currentMousePos.x = e.pageX;
    currentMousePos.y = e.pageY;
    xray.style.webkitMaskPositionY = currentMousePos.y - 75 + 'px' ;
    xray.style.webkitMaskPositionX = currentMousePos.x - 75 + 'px' ;
  })

  // listen for our movement on a device
  // then move our div
  hammerEl.on("panstart panmove", function(e) {
    var pagePositions = e.srcEvent.touches[0]
    currentMousePos.x = pagePositions.pageX;
    currentMousePos.y = pagePositions.pageY;
    xray.style.webkitMaskPositionY = currentMousePos.y - 75 + 'px' ;
    xray.style.webkitMaskPositionX = currentMousePos.x - 75 + 'px' ;
  });

  // unfortunatly I'm browser sniffing - css masking property not supported in Firefox
  function uglyBrowserSniff() {
    var browserName;

      // Opera 8.0+
      if ((window.opr && opr.addons) || window.opera || (navigator.userAgent.indexOf(' OPR/') >= 0)) {
        browserName = "Opera";
      }

      // Firefox 1.0+
      if (typeof InstallTrigger !== 'undefined') {
        browserName = "Firefox";
      }

      // At least Safari 3+: "[object HTMLElementConstructor]"
      if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
        browserName = "Safari";
      }

      // Internet Explorer 6-11
      if ((/*@cc_on!@*/false) || (document.documentMode)) {
        browserName = "IE";
      }

      // Edge 20+
      if (!(document.documentMode) && window.StyleMedia) {
        browserName = "Edge";
      }

      // Chrome 1+
      if (window.chrome && window.chrome.webstore) {
        browserName = "Chrome";
      }

      if (browserName == "Firefox" || browserName == "Opera" || browserName == "IE" || browserName == "Edge"){
        errorBanner.classList.add('show')
        console.log(browserName)
      };
  }
}
