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
      var chart2015ShrimpUsaInVisible = false;
      var svgEl = document.getElementById('my_svg');
      var chart2015ShrimpUsaInEl = document.
        getElementById('chart_2015_shrimp_usa_in');
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
      thr0w.svg.manage(grid, svgEl, 10);
      var sync = new thr0w.Sync(
        grid,
        'charts',
        message,
        receive
      );
      document.getElementById('button_2015_shrimp_usa_in').
        addEventListener('click', handleClick2015ShrimpUsaIn);
      renderCharts();
      function message() {
        return {
          chart2015ShrimpUsaInVisible: chart2015ShrimpUsaInVisible
        };
      }
      function receive(data) {
        chart2015ShrimpUsaInVisible = data.chart2015ShrimpUsaInVisible;
        renderCharts();
      }
      function handleClick2015ShrimpUsaIn() {
        chart2015ShrimpUsaInVisible = !chart2015ShrimpUsaInVisible;
        renderCharts();
        sync.update();
        sync.idle(); 
      }
      function renderCharts() {
        if (chart2015ShrimpUsaInVisible) {
          chart2015ShrimpUsaInEl.style.display = 'inline';
        } else {
          chart2015ShrimpUsaInEl.style.display = 'none';
        }
      }
    }
    function messageCallback() {}
  }
})();
