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
      var COUNTRIES2 = [
        {
          x: 219,
          y: 734,
          fill: 'rgba(255,0,0,1)',
          line: 'rgba(255,0,0,0.3)',
          percent:  0.33// USA
        },
        {
          x: 815,
          y: 750,
          fill: 'rgba(0,255,0,1)',
          line: 'rgba(0,255,0,0.3)',
          percent: 0.18 // JAPAN
        },
        {
          x: 753,
          y: 786,
          fill: 'rgba(0,0,255,1)',
          line: 'rgba(0,0,255,0.3)',
          percent:  0.10 // CHINA
        },
        {
          x: 795,
          y: 745,
          fill: 'rgba(128,128,0,1)',
          line: 'rgba(128,128,0,0.3)',
          percent: 0.08 // SOUTH KOREA
        },
        {
          x: 840,
          y: 1000,
          fill: 'rgba(128,0,128,1)',
          line: 'rgba(128,0,128,0.3)',
          percent: 0.05 // AUSTRALIA
        },
        {
          x: 480,
          y: 715,
          fill: 'rgba(0,128,128,1)',
          line: 'rgba(0,128,128,0.3)',
          percent: 0.03 // GERMANY
        },
        {
          x: 219,
          y: 674,
          fill: 'rgba(255,128,0,1)',
          line: 'rgba(255,128,0,0.3)',
          percent: 0.03 // CANADA
        },
        {
          x: 460,
          y: 725,
          fill: 'rgba(255,0,128,1)',
          line: 'rgba(255,0,128,0.3)',
          percent: 0.02 // FRANCE
        },
        {
          x: 470,
          y: 730,
          fill: 'rgba(128,255,0,1)',
          line: 'rgba(128,255,0,0.3)',
          percent: 0.02 // SWITZERLAND
        },
        {
          x: 785,
          y: 786,
          fill: 'rgba(0,255,128,1)',
          line: 'rgba(0,255,128,0.3)',
          percent:  0.02 // TAIWAN
        },
        {
          x: 0,
          y: 0,
          fill: 'rgba(128,128,128,1)',
          line: 'rgba(128,128,128,0.3)',
          percent:  0.14 // REST
        }
      ];
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
          id: 'vietnam',
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
      var COUNTRIESFULL2 = [
        {
          x: 1136,
          y: 1398,
          fill: 'rgba(255,0,0,1)',
          line: 'rgba(255,0,0,0.3)',
          percent:  0.33// USA
        },
        {
          x: 4230,
          y: 1381,
          fill: 'rgba(0,255,0,1)',
          line: 'rgba(0,255,0,0.3)',
          percent: 0.18 // JAPAN
        },
        {
          x: 3791,
          y: 1496,
          fill: 'rgba(0,0,255,1)',
          line: 'rgba(0,0,255,0.3)',
          percent:  0.10 // CHINA
        },
        {
          x: 4073,
          y: 1403,
          fill: 'rgba(128,128,0,1)',
          line: 'rgba(128,128,0,0.3)',
          percent: 0.08 // SOUTH KOREA
        },
        {
          x: 4228,
          y: 2574,
          fill: 'rgba(128,0,128,1)',
          line: 'rgba(128,0,128,0.3)',
          percent: 0.05 // AUSTRALIA
        },
        {
          x: 2467,
          y: 1441,
          fill: 'rgba(0,128,128,1)',
          line: 'rgba(0,128,128,0.3)',
          percent: 0.03 // GERMANY
        },
        {
          x: 1077,
          y: 1094,
          fill: 'rgba(255,128,0,1)',
          line: 'rgba(255,128,0,0.3)',
          percent: 0.03 // CANADA
        },
        {
          x: 2369,
          y: 1339,
          fill: 'rgba(255,0,128,1)',
          line: 'rgba(255,0,128,0.3)',
          percent: 0.02 // FRANCE
        },
        {
          x: 2438,
          y: 1337,
          fill: 'rgba(128,255,0,1)',
          line: 'rgba(128,255,0,0.3)',
          percent: 0.02 // SWITZERLAND
        },
        {
          x: 4048,
          y: 1644,
          fill: 'rgba(0,255,128,1)',
          line: 'rgba(0,255,128,0.3)',
          percent:  0.02 // TAIWAN
        },
        {
          x: 0,
          y: 0,
          fill: 'rgba(128,128,128,1)',
          line: 'rgba(128,128,128,0.3)',
          percent:  0.14 // REST
        }
      ];
      var COUNTRIESFULL = [
        {
          x: 3463,
          y: 1745,
          fill: 'rgba(255,0,0,1)',
          line: 'rgba(255,0,0,0.3)',
          percent: 0.21 // INDIA
        },
        {
          x: 1200,
          y: 2118,
          fill: 'rgba(0,255,0,1)',
          line: 'rgba(0,255,0,0.3)',
          percent: 0.12 // ECUADOR
        },
        {
          x: 1126,
          y: 1560,
          fill: 'rgba(0,0,255,1)',
          line: 'rgba(0,0,255,0.3)',
          percent: 0.12 // USA
        },
        {
          x: 3778,
          y: 1820,
          fill: 'rgba(128,128,0,1)',
          line: 'rgba(128,128,0,0.3)',
          percent: 0.11 // THAILAND
        },
        {
          id: 'vietnam',
          x: 3874,
          y: 1889,
          fill: 'rgba(128,0,128,1)',
          line: 'rgba(128,0,128,0.3)',
          percent: 0.07 // VIETNAM
        },
        {
          x: 4029,
          y: 2110,
          fill: 'rgba(0,128,128,1)',
          line: 'rgba(0,128,128,0.3)',
          percent: 0.07 // INDONESIA
        },
        {
          x: 891,
          y: 1785,
          fill: 'rgba(255,128,0,1)',
          line: 'rgba(255,128,0,0.3)',
          percent: 0.06 // MEXICO
        },
        {
          x: 3923,
          y: 1651,
          fill: 'rgba(255,0,128,1)',
          line: 'rgba(255,0,128,0.3)',
          percent: 0.04 // CHINA
        },
        {
          x: 3840,
          y: 2149,
          fill: 'rgba(128,255,0,1)',
          line: 'rgba(128,255,0,0.3)',
          percent: 0.02 // MALAYSIA
        },
        {
          x: 1235,
          y: 2245,
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
      var window2Open = false;
      var active = true;
      var chartVisible = false;
      var chart2Visible = false;
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
      var hokkaidoEl = document.getElementById('hokkaido');
      var honshuEl = document.getElementById('honshu');
      var kyushuEl = document.getElementById('kyushu');
      var shikokuEl = document.getElementById('shikoku');
      var southKoreaEl = document.getElementById('south korea');
      var australiaEl = document.getElementById('australia');
      var tasmaniaEl = document.getElementById('tasmania');
      var germanyEl = document.getElementById('germany');
      var canadaEl = document.getElementById('canada');
      var franceEl = document.getElementById('france');
      var switzerlandEl = document.getElementById('switzerland');
      var taiwanEl = document.getElementById('taiwan');
      var groupEl;
      var fullScreen = document.location.pathname.indexOf('full') !== -1;
      var usaX;
      var usaY;
      var vietnamX;
      var vietnamY;
      var strokeWidth;
      var dashLength;
      var radius;
      var countries;
      var countries2;
      var grid;
      if (fullScreen) {
        usaX = 994;
        usaY = 1387;
        vietnamX = 3878;
        vietnamY = 1802;
        strokeWidth = 50;
        dashLength = 4000;
        radius = 32;
        countries = COUNTRIESFULL;
        countries2 = COUNTRIESFULL2;
        grid = new thr0w.FlexGrid(
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
      } else {
        usaX = 190;
        usaY = 740;
        vietnamX = 750;
        vietnamY = 823;
        strokeWidth = 10;
        radius = 8;
        dashLength = 1000;
        countries = COUNTRIES;
        countries2 = COUNTRIES2;
        grid = new thr0w.Grid(
          frameEl,
          document.getElementById('my_content'), [
            thr0w.getChannel()
          ]);
        thr0w.draw.load(grid);
      }
      var wm = new thr0w.windows.WindowManager('my_wm', grid);
      var sync = new thr0w.Sync(
        grid,
        'chart',
        message,
        receive
      );
      document.addEventListener('thr0w_windows_close_window',
        windowCloseCallback);
      thr0w.svg.manage(grid, svgEl, 10);
      frameEl.addEventListener('mousedown', keepActive);
      frameEl.addEventListener('touchstart', keepActive);
      document.getElementById('shrimp').
        addEventListener('mousedown', toggleShrimp);
      document.getElementById('shrimp').
        addEventListener('touchstart', toggleShrimp);
      document.getElementById('shrimp2').
        addEventListener('mousedown', toggleVietnam);
      document.getElementById('shrimp2').
        addEventListener('touchstart', toggleVietnam);
      // checkIdle();
      function keepActive(e) {
        e.preventDefault();
        active = true;
      }
      function toggleShrimp(e) {
        e.preventDefault();
        if (chart2Visible) {
          hideVietnam();
        }
        if (chartVisible) {
          hideUSA();
        } else {
          showUSA();
        }
      }
      function toggleVietnam(e) {
        e.preventDefault();
        if (chartVisible) {
          hideUSA();
        }
        if (chart2Visible) {
          hideVietnam();
        } else {
          showVietnam();
        }
      }
      function hideUSA() {
        chartVisible = false;
        sync.update();
        sync.idle();
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
      function showVietnam() {
        var i;
        var circleEl;
        chart2Visible = true;
        sync.update();
        sync.idle();
        window2Open = true;
        wm.openWindow('vietnam', 100, 1420, 400, 450, 'chart2.html');
        groupEl = document.createElementNS(SVG_NS, 'g');
        for (i = 0; i < countries2.length; i++) {
          if (countries2[i].x !== 0) {
            groupEl.appendChild(createArc(
              vietnamX,
              vietnamY,
              countries2[i].x,
              countries2[i].y,
              countries2[i].line
            ));
            circleEl = document.createElementNS(SVG_NS, 'circle');
            circleEl.setAttribute('cx', countries2[i].x);
            circleEl.setAttribute('cy', countries2[i].y);
            circleEl.setAttribute('r', radius);
            circleEl.setAttribute('fill', countries2[i].fill);
            groupEl.appendChild(circleEl);
          }
        }
        backgroundEl.appendChild(groupEl);
        usaEl.style.fill = FG;
        alaskaEl.style.fill = FG;
        hawaiiEl.style.fill = FG;
        hawaii1El.style.fill = FG;
        hawaii2El.style.fill = FG;
        hawaii3El.style.fill = FG;
        hokkaidoEl.style.fill = FG;
        honshuEl.style.fill = FG;
        kyushuEl.style.fill = FG;
        shikokuEl.style.fill = FG;
        southKoreaEl.style.fill = FG;
        australiaEl.style.fill = FG;
        tasmaniaEl.style.fill = FG;
        germanyEl.style.fill = FG;
        canadaEl.style.fill = FG;
        franceEl.style.fill = FG;
        chinaEl.style.fill = FG;
        switzerlandEl.style.fill = FG;
        taiwanEl.style.fill = FG;
      }
      function hideVietnam() {
        chart2Visible = false;
        sync.update();
        sync.idle();
        if (window2Open) {
          wm.closeWindow('vietnam');
          window2Open = false;
        }
        backgroundEl.removeChild(groupEl);
        usaEl.style.fill = BG;
        alaskaEl.style.fill = BG;
        hawaiiEl.style.fill = BG;
        hawaii1El.style.fill = BG;
        hawaii2El.style.fill = BG;
        hawaii3El.style.fill = BG;
        hokkaidoEl.style.fill = BG;
        honshuEl.style.fill = BG;
        kyushuEl.style.fill = BG;
        shikokuEl.style.fill = BG;
        southKoreaEl.style.fill = BG;
        australiaEl.style.fill = BG;
        tasmaniaEl.style.fill = BG;
        germanyEl.style.fill = BG;
        canadaEl.style.fill = FG;
        franceEl.style.fill = BG;
        chinaEl.style.fill = BG;
        switzerlandEl.style.fill = BG;
        taiwanEl.style.fill = BG;
      }
      function createArc(sx, sy, ex, ey, color) {
        var dx = Math.abs((sx - ex) / 2);
        var dy = Math.abs((sy - ey) / 2);
        var dl = Math.sqrt(dx * dx + dy * dy);
        var dAngle = Math.atan(dy / dx);
        var nAngle = Math.PI / 2 - dAngle;
        var nx = dl * Math.cos(nAngle);
        var ny = dl * Math.sin(nAngle);
        var cx = ex - sx >= 0 ? sx + dx :
          sx - dx;
        var cy = ey - sy >= 0 ? sy + dy :
          sy - dy;
        cx = (ex - sx) * (ex - sy) >= 0 ?
          cx + nx : cx - nx;
        cy = cy - ny;
        var movement = 'M' + sx + ' ' + sy +
          ' Q' + cx + ' ' + cy + ' ' +
          ex + ' ' + ey;
        var curveEl = document.createElementNS(SVG_NS, 'path');
        curveEl.setAttribute('d', movement);
        curveEl.setAttribute('stroke', color);
        curveEl.setAttribute('stroke-width', strokeWidth);
        curveEl.setAttribute('fill', 'none');
        curveEl.style.strokeDasharray = dashLength;
        curveEl.style.strokeDashoffset = dashLength;
        curveEl.classList.add('curve');
        return curveEl;
      }
      function showUSA() {
        var i;
        var circleEl;
        chartVisible = true;
        sync.update();
        sync.idle();
        windowOpen = true;
        wm.openWindow('usa', 100, 1420, 400, 450, 'chart.html');
        groupEl = document.createElementNS(SVG_NS, 'g');
        for (i = 0; i < countries.length; i++) {
          if (countries[i].x !== 0) {
            groupEl.appendChild(createArc(
              countries[i].x,
              countries[i].y,
              usaX,
              usaY,
              countries[i].line
            ));
            circleEl = document.createElementNS(SVG_NS, 'circle');
            circleEl.setAttribute('cx', countries[i].x);
            circleEl.setAttribute('cy', countries[i].y);
            circleEl.setAttribute('r', radius);
            circleEl.setAttribute('fill', countries[i].fill);
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
      }
      function message() {
        return {
          chartVisible: chartVisible,
          chart2Visible: chart2Visible
        };
      }
      function receive(data) {
        if (data.chartVisible !== chartVisible) {
          if (data.chartVisible) {
            showUSA();
          } else {
            hideUSA();
          }
        }
        if (data.chart2Visible !== chart2Visible) {
          if (data.chart2Visible) {
            showVietnam();
          } else {
            hideVietnam();
          }
        }
      }
      function checkIdle() {
        if (!active) {
          window.location.href = '../';
        }
        active = false;
        window.setTimeout(checkIdle, INTERVAL);
      }
      function windowCloseCallback(e) {
        if (e.detail.id === 'usa') {
          windowOpen = false;
        } else {
          window2Open = false;
        }
      }
    }
    function messageCallback() {}
  }
})();
