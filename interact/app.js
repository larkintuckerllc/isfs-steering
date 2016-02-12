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
      var COUNTRIES = [
        {
          x: 672,
          y: 806,
          fill: 'rgba(255,0,0,1)',
          line: 'rgba(255,0,0,0.3)',
          percent: 0.21 // INDIA
        },
        {
          x: 230,
          y: 885,
          fill: 'rgba(0,255,0,1)',
          line: 'rgba(0,255,0,0.3)',
          percent: 0.12 // ECUADOR
        },
        {
          x: 209,
          y: 774,
          fill: 'rgba(0,0,255,1)',
          line: 'rgba(0,0,255,0.3)',
          percent: 0.12 // USA
        },
        {
          x: 734,
          y: 830,
          fill: 'rgba(128,128,0,1)',
          line: 'rgba(128,128,0,0.3)',
          percent: 0.11 // THAILAND
        },
        {
          x: 755,
          y: 837,
          fill: 'rgba(128,0,128,1)',
          line: 'rgba(128,0,128,0.3)',
          percent: 0.07 // VIETNAM
        },
        {
          x: 788,
          y: 883,
          fill: 'rgba(0,128,128,1)',
          line: 'rgba(0,128,128,0.3)',
          percent: 0.07 // INDONESIA
        },
        {
          x: 172,
          y: 813,
          fill: 'rgba(255,128,0,1)',
          line: 'rgba(255,128,0,0.3)',
          percent: 0.06 // MEXICO
        },
        {
          x: 753,
          y: 786,
          fill: 'rgba(255,0,128,1)',
          line: 'rgba(255,0,128,0.3)',
          percent: 0.04 // CHINA
        },
        {
          x: 755,
          y: 885,
          fill: 'rgba(128,255,0,1)',
          line: 'rgba(128,255,0,0.3)',
          percent: 0.02 // MALAYSIA
        },
        {
          x: 238,
          y: 909,
          fill: 'rgba(0,255,128,1)',
          line: 'rgba(0,255,128,0.3)',
          percent: 0.02 // PERU
        },
        {
          x: 0,
          y: 0,
          fill: 'rgba(128,128,128,1)',
          line: 'rgba(128,128,128,0.3)',
          percent: 0.16 // REMAINING
        }
      ];
      var SVG_NS = 'http://www.w3.org/2000/svg';
      var INTERVAL = 1000 * 60;
      var BG = '#bfbfbf';
      var FG = '#888888';
      var windowOpen = false;
      var active = true;
      var chartVisible = false;
      var frameEl = document.getElementById('my_frame');
      var svgEl = document.getElementById('my_svg');
      var backgroundEl = document.getElementById('background');
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
      var groupEl;
      var grid = new thr0w.Grid(
        frameEl,
        document.getElementById('my_content'), [
          thr0w.getChannel()
        ]);
      var wm = new thr0w.windows.WindowManager('my_wm', grid);
      thr0w.draw.load(grid);
      document.addEventListener('thr0w_windows_close_window',
        windowCloseCallback);
      thr0w.svg.manage(grid, svgEl, 10);
      frameEl.addEventListener('mousedown', keepActive);
      frameEl.addEventListener('touchstart', keepActive);
      document.getElementById('shrimp').
        addEventListener('mousedown', toggleShrimp);
      document.getElementById('shrimp').
        addEventListener('touchstart', toggleShrimp);
      checkIdle();
      function keepActive(e) {
        e.preventDefault();
        active = true;
      }
      function toggleShrimp(e) {
        e.preventDefault();
        chartVisible = !chartVisible;
        renderCharts();
      }
      function renderCharts() {
        var i;
        var dx;
        var dy;
        var dl;
        var dAngle;
        var nAngle;
        var nx;
        var ny;
        var cx;
        var cy;
        var movement;
        var curveEl;
        var circleEl;
        if (chartVisible) {
          windowOpen = true;
          wm.openWindow('usa', 100, 1420, 400, 450, 'chart.html');
          groupEl = document.createElementNS(SVG_NS, 'g');
          for (i = 0; i < COUNTRIES.length; i++) {
            if (COUNTRIES[i].x !== 0) {
              dx = Math.abs((COUNTRIES[i].x - 190) / 2);
              dy = Math.abs((COUNTRIES[i].y - 740) / 2);
              dl = Math.sqrt(dx * dx + dy * dy);
              dAngle = Math.atan(dy / dx);
              nAngle = Math.PI / 2 - dAngle;
              nx = dl * Math.cos(nAngle);
              ny = dl * Math.sin(nAngle);
              cx = 190 - COUNTRIES[i].x >= 0 ? COUNTRIES[i].x + dx :
                COUNTRIES[i].x - dx;
              cy = 740 - COUNTRIES[i].y >= 0 ? COUNTRIES[i].y + dy :
                COUNTRIES[i].y - dy;
              cx = (190 - COUNTRIES[i].x) * (740 - COUNTRIES[i].y) >= 0 ?
                cx + nx : cx - nx;
              cy = cy - ny;
              movement = 'M' + COUNTRIES[i].x + ' ' + COUNTRIES[i].y +
                ' Q' + cx + ' ' + cy + ' ' +
                190 + ' ' + 740;
              curveEl = document.createElementNS(SVG_NS, 'path');
              curveEl.setAttribute('d', movement);
              curveEl.setAttribute('stroke', COUNTRIES[i].line);
              curveEl.setAttribute('stroke-width', 10);
              curveEl.setAttribute('fill', 'none');
              curveEl.classList.add('curve');
              groupEl.appendChild(curveEl);
              circleEl = document.createElementNS(SVG_NS, 'circle');
              circleEl.setAttribute('cx', COUNTRIES[i].x);
              circleEl.setAttribute('cy', COUNTRIES[i].y);
              circleEl.setAttribute('r', 8);
              circleEl.setAttribute('fill', COUNTRIES[i].fill);
              groupEl.appendChild(circleEl);
            }
          }
          backgroundEl.appendChild(groupEl);
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
          if (windowOpen) {
            wm.closeWindow('usa');
            windowOpen = false;
          }
          backgroundEl.removeChild(groupEl);
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
      function windowCloseCallback() {
        windowOpen = false;
      }
    }
    function messageCallback() {}
  }
})();
