(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var WIDTH = 8000;
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.setBase('http://192.168.1.2'); // PROD
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var shift = 0;
      var map1El = document.getElementById('map1');
      var map2El = document.getElementById('map2');
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
      var sync = new thr0w.Sync(
        grid,
        'animation',
        message,
        receive
      );
      if (thr0w.getChannel() === 0) {
        loop();
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
      function loop() {
        shift = shift < WIDTH ? shift + 1 : 0;
        map1El.style.marginLeft = shift + 'px';
        map2El.style.marginLeft = shift + 'px';
        sync.update();
        window.setTimeout(loop, 30);
      }
    }
  }
  function messageCallback() {}
})();

