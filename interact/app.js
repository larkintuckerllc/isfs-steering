(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    thr0w.setBase('http://localhost');
// PROD   thr0w.setBase('http://192.168.1.2'); 
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var INTERVAL = 1000 * 60;
      var active = true;
      var chart2015ShrimpUsaInVisible = false;
      var frameEl = document.getElementById('my_frame');
      var svgEl = document.getElementById('my_svg');
      var chart2015ShrimpUsaInEl = document.
        getElementById('chart_2015_shrimp_usa_in');
      var grid = new thr0w.Grid(
        frameEl,
        document.getElementById('my_content'), [
          thr0w.getChannel()
        ]);
      thr0w.svg.manage(grid, svgEl, 10);
      frameEl.addEventListener('click', keepActive);
      document.getElementById('button_2015_shrimp_usa_in').
        addEventListener('click', handleClick2015ShrimpUsaIn);
      renderCharts();
      checkIdle();
      function keepActive() {
        active = true;
      }
      function handleClick2015ShrimpUsaIn() {
        chart2015ShrimpUsaInVisible = !chart2015ShrimpUsaInVisible;
        renderCharts();
      }
      function renderCharts() {
        if (chart2015ShrimpUsaInVisible) {
          chart2015ShrimpUsaInEl.style.display = 'inline';
        } else {
          chart2015ShrimpUsaInEl.style.display = 'none';
        }
      }
      function checkIdle() {
        if (!active) {
          window.location.href = '../';
        }
        active = false;
        window.setTimeout(checkIdle, INTERVAL); 
      }
    }
    function messageCallback() {}
  }
})();
