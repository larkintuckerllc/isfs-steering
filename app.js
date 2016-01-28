(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
// DEV    thr0w.setBase('http://localhost');
    thr0w.setBase('http://192.168.1.2'); 
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var INTERVAL = 100;
      var RIGHT = 950;
      var BOTTOM = 620;
      var WIDTH = 400;
      var HEIGHT = 311;
      var shiftVertical = 0.5;
      var shiftHorizontal = 0.5;
      var left = 0;
      var top = 0;
      var frameEl = document.getElementById('my_frame');
      var svgEl = document.getElementById('my_svg');
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
      frameEl.addEventListener('click', interact);
      setSvgViewBox();
      if (thr0w.getChannel() === 0) {
        loop();
      }
      function message() {
        return {
          left: left,
          top: top
        };
      }
      function receive(data) {
        left = data.left;
        top = data.top;
        setSvgViewBox();
      }
      function interact() {
        window.location.href = 'interact/';
      }
      function setSvgViewBox() {
        svgEl.setAttribute('viewBox', left + ' ' + top +
          ' ' + WIDTH + ' ' + HEIGHT);
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
        setSvgViewBox();
        sync.update(); 
        window.setTimeout(loop, INTERVAL); 
      }
    }
    function messageCallback() {}
  }
})();
