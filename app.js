(function() {
  'use strict';
  var INTERVAL = 33;
  var SCREENSAVER_INTERVAL = 1000 * 60 * 20;
  var TOUCH_SCREENS = [6, 7, 8, 9];
  var WIDTH = 8000;
  var HAND_ON = 1000 * 5;
  var HAND_INTERVAL_BASE = 1000 * 20;
  var HAND_INTERVAL_FLEX = 1000 * 20;
  var HAND_HORIZONTAL = 1080 - 400;
  var HAND_VERTICAL = 1920 - 400;
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.setBase('http://192.168.1.2'); // PROD
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var shift = 0;
      var screensaverShift = 0;
      var map1El = document.getElementById('map1');
      var map2El = document.getElementById('map2');
      var rightHandEl = document.getElementById('right_hand');
      var leftHandEl = document.getElementById('left_hand');
      var screensaverEl = document.getElementById('screensaver');
      var grid = new thr0w.FlexGrid(
        document.getElementById('my_frame'),
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
      var width = grid.getWidth();
      var sync = new thr0w.Sync(
        grid,
        'animation',
        message,
        receive
      );
      var screensaverSync = new thr0w.Sync(
        grid,
        'screensaver',
        messageScreensaver,
        receiveScreensaver
      );
      if (thr0w.getChannel() === 0) {
        loop();
        startScreensaver();
      }
      if (TOUCH_SCREENS.indexOf(thr0w.getChannel()) !== -1) {
        leftHandEl.style.opacity = 0;
        rightHandEl.style.opacity = 0;
        leftHandEl.style.display = 'block';
        rightHandEl.style.display = 'block';
        loopHand();
      }
      function message() {
        return {
          shift: shift
        };
      }
      function receive(data) {
        map1El.style.marginLeft = data.shift + 'px';
        map2El.style.marginLeft = data.shift + 'px';
      }
      function messageScreensaver() {
        return {
          shift: screensaverShift
        };
      }
      function receiveScreensaver(data) {
        screensaverEl.style.left = data.shift + 'px';
      }
      function loop() {
        shift = shift < WIDTH ? shift + 1 : 0;
        map1El.style.marginLeft = shift + 'px';
        map2El.style.marginLeft = shift + 'px';
        sync.update();
        window.setTimeout(loop, INTERVAL);
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
      function startScreensaver() {
        loopScreensaver();
        window.setTimeout(startScreensaver, SCREENSAVER_INTERVAL);
      }
      function loopScreensaver() {
        screensaverShift = screensaverShift < width - 1 ?
          screensaverShift + 2 : -16;
        if (screensaverShift !== -16) {
          screensaverEl.style.left = screensaverShift + 'px';
          screensaverSync.update();
          window.setTimeout(loopScreensaver, INTERVAL);
        }
      }
    }
  }
  function messageCallback() {}
})();

