(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.setBase('http://192.168.1.2'); // PROD
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var TOUCH_SCREENS = [6, 7, 8, 9];
      var INTERVAL = 33;
      var COLOR_INTERVAL = 1000 * 60 * 20;
      var HAND_ON = 1000 * 5;
      var HAND_INTERVAL_BASE = 1000 * 20;
      var HAND_INTERVAL_FLEX = 1000 * 20;
      var HAND_HORIZONTAL = 1080 - 400;
      var HAND_VERTICAL = 1920 - 400;
      var RIGHT = 950;
      var BOTTOM = 620;
      var WIDTH = 400;
      var HEIGHT = 311;
      var shiftVertical = 0.1;
      var shiftHorizontal = 0.1;
      var left = 0;
      var top = 0;
      var inverted = false;
      var frameEl = document.getElementById('my_frame');
      var svgEl = document.getElementById('my_svg');
      var rightHandEl = document.getElementById('right_hand');
      var leftHandEl = document.getElementById('left_hand');
      var grid = new thr0w.FlexGrid(
        frameEl,
        document.getElementById('my_content'), [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8, 9]
        ],
        [
        {
          width: 1920,
          height: 1080,
          spacing: 28,
          scale: 0.84,
          margin: 20
        },
        {
          width: 1920,
          height: 1080,
          spacing: 28,
          scale: 0.84,
          margin: 60
        },
        {
          width: 1080,
          height: 1920,
          spacing: 112,
          padding: 111
        }
        ]);
      var sync = new thr0w.Sync(
        grid,
        'animation',
        message,
        receive
      );
      if (TOUCH_SCREENS.indexOf(thr0w.getChannel()) !== -1) {
        leftHandEl.style.opacity = 0;
        rightHandEl.style.opacity = 0;
        leftHandEl.style.display = 'block';
        rightHandEl.style.display = 'block';
        loopHand();
      }
      frameEl.addEventListener('mousedown', interact);
      frameEl.addEventListener('touchstart', interact);
      setSvgViewBox(left, top);
      setSvgColors(inverted);
      if (thr0w.getChannel() === 0) {
        loop();
        loopColor();
      }
      function message() {
        return {
          inverted: inverted,
          left: left,
          top: top
        };
      }
      function receive(data) {
        left = data.left;
        top = data.top;
        setSvgViewBox(left, top);
        if (inverted !== data.inverted) {
          setSvgColors(data.inverted);
          inverted = data.inverted;
        }
      }
      function loopHand() {
        var handEl = Math.random() > 0.5 ? leftHandEl : rightHandEl;
        var interval = HAND_INTERVAL_BASE + Math.floor(Math.random() *
          HAND_INTERVAL_FLEX);
        handEl.style.left = Math.floor(Math.random() *
          HAND_HORIZONTAL) + 'px';
        handEl.style.top = Math.floor(Math.random() *
          HAND_VERTICAL) + 'px';
        handEl.style.opacity = 1;
        window.setTimeout(hideHand, HAND_ON);
        window.setTimeout(loopHand, interval);
        function hideHand() {
          handEl.style.opacity = 0;
        }
      }
      function interact(e) {
        e.preventDefault();
        window.location.href = 'interact/';
      }
      function setSvgViewBox(newLeft, newTop) {
        window.requestAnimationFrame(animation);
        function animation() {
          svgEl.setAttribute('viewBox', newLeft + ' ' + newTop +
           ' ' + WIDTH + ' ' + HEIGHT);
        }
      }
      function setSvgColors(newInverted) {
        var ORANGE = 'rgb(243,112,33)';
        var BLUE = 'rgb(0,84,150)';
        var fg = newInverted ? BLUE : ORANGE;
        var bg = newInverted ? ORANGE : BLUE;
        var i;
        var fgElements = document.querySelectorAll('.my_svg__fg');
        document.querySelector('.my_svg__bg').style.fill = bg;
        for (i = 0; i < fgElements.length; i++) {
          fgElements[i].style.fill = fg;
        }
      }
      function loop() {
        if (left + WIDTH + shiftHorizontal <= RIGHT &&
          left + shiftHorizontal >= 0) {
          left += shiftHorizontal;
        } else {
          shiftHorizontal = shiftHorizontal * -1;
        }
        if (top + HEIGHT + shiftVertical <= BOTTOM &&
          top + shiftVertical >= 0) {
          top += shiftVertical;
        } else {
          shiftVertical = shiftVertical * -1;
        }
        setSvgViewBox(left, top);
        sync.update();
        window.setTimeout(loop, INTERVAL);
      }
      function loopColor() {
        inverted = !inverted;
        setSvgColors(inverted);
        sync.update();
        window.setTimeout(loopColor, COLOR_INTERVAL);
      }
    }
    function messageCallback() {}
  }
})();
