(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    thr0w.setBase('http://localhost'); // DEV
    // thr0w.setBase('http://192.168.1.2'); // PROD
    thr0w.addAdminTools(document.getElementById('my_frame'),
      connectCallback, messageCallback);
    function connectCallback() {
      var INTERVAL = 1000 * 60;
      var BG = '#bfbfbf';
      var FG = '#ff0000';
      var active = true;
      var chart2015ShrimpUsaInVisible = false;
      var frameEl = document.getElementById('my_frame');
      var svgEl = document.getElementById('my_svg');
      var indiaEl = document.getElementById('india');
      var ecuadorEl = document.getElementById('ecuador');
      var vietnamEl = document.getElementById('vietnam');
      var thailandEl = document.getElementById('thailand');
      var chinaEl = document.getElementById('china');
      var mexicoEl = document.getElementById('mexico');
      var malaysiaEl = document.getElementById('malaysia');
      var eastMalaysiaEl = document.getElementById('east malaysia');
      var peruEl = document.getElementById('peru');
      var sumatraEl = document.getElementById('sumatra');
      var kalimantanEl = document.getElementById('kalimantan');
      var sulawesiEl = document.getElementById('sulawesi');
      var malukuEl = document.getElementById('maluku');
      var irianJayaEl = document.getElementById('irian jaya');
      var seramEl = document.getElementById('seram');
      var javaEl = document.getElementById('java');
      var baliEl = document.getElementById('bali');
      var lombokEl = document.getElementById('lombok');
      var sumbaEl = document.getElementById('sumba');
      var floresEl = document.getElementById('flores');
      var timorEl = document.getElementById('timor');
      var usaEl = document.getElementById('usa');
      var alaskaEl = document.getElementById('path212');
      var hawaiiEl = document.getElementById('hawaii');
      var hawaii1El = document.getElementById('path13645');
      var hawaii2El = document.getElementById('path13643');
      var hawaii3El = document.getElementById('path13641');
      var grid = new thr0w.Grid(
        frameEl,
        document.getElementById('my_content'), [
          thr0w.getChannel()
        ]);
      thr0w.svg.manage(grid, svgEl, 10);
      frameEl.addEventListener('mousedown', keepActive);
      frameEl.addEventListener('touchstart', keepActive);
      document.getElementById('button_2015_shrimp_usa_in').
        addEventListener('mousedown', toggle2015ShrimpUsaIn);
      document.getElementById('button_2015_shrimp_usa_in').
        addEventListener('touchstart', toggle2015ShrimpUsaIn);
      renderCharts();
      checkIdle();
      function keepActive(e) {
        e.preventDefault();
        active = true;
      }
      function toggle2015ShrimpUsaIn(e) {
        e.preventDefault();
        chart2015ShrimpUsaInVisible = !chart2015ShrimpUsaInVisible;
        renderCharts();
      }
      function renderCharts() {
        if (chart2015ShrimpUsaInVisible) {
          indiaEl.style.fill = FG;
          ecuadorEl.style.fill = FG;
          vietnamEl.style.fill = FG;
          thailandEl.style.fill = FG;
          chinaEl.style.fill = FG;
          mexicoEl.style.fill = FG;
          malaysiaEl.style.fill = FG;
          eastMalaysiaEl.style.fill = FG;
          peruEl.style.fill = FG;
          sumatraEl.style.fill = FG;
          kalimantanEl.style.fill = FG;
          sulawesiEl.style.fill = FG;
          malukuEl.style.fill = FG;
          irianJayaEl.style.fill = FG;
          seramEl.style.fill = FG;
          javaEl.style.fill = FG;
          baliEl.style.fill = FG;
          lombokEl.style.fill = FG;
          sumbaEl.style.fill = FG;
          floresEl.style.fill = FG;
          timorEl.style.fill = FG;
          usaEl.style.fill = FG;
          alaskaEl.style.fill = FG;
          hawaiiEl.style.fill = FG;
          hawaii1El.style.fill = FG;
          hawaii2El.style.fill = FG;
          hawaii3El.style.fill = FG;
        } else {
          indiaEl.style.fill = BG;
          ecuadorEl.style.fill = BG;
          vietnamEl.style.fill = BG;
          thailandEl.style.fill = BG;
          chinaEl.style.fill = BG;
          mexicoEl.style.fill = BG;
          malaysiaEl.style.fill = BG;
          peruEl.style.fill = BG;
          eastMalaysiaEl.style.fill = BG;
          sumatraEl.style.fill = BG;
          kalimantanEl.style.fill = BG;
          sulawesiEl.style.fill = BG;
          malukuEl.style.fill = BG;
          irianJayaEl.style.fill = BG;
          seramEl.style.fill = BG;
          javaEl.style.fill = BG;
          baliEl.style.fill = BG;
          lombokEl.style.fill = BG;
          sumbaEl.style.fill = BG;
          floresEl.style.fill = BG;
          timorEl.style.fill = BG;
          usaEl.style.fill = BG;
          alaskaEl.style.fill = BG;
          hawaiiEl.style.fill = BG;
          hawaii1El.style.fill = BG;
          hawaii2El.style.fill = BG;
          hawaii3El.style.fill = BG;
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
