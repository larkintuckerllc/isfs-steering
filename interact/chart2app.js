(function() {
  'use strict';
  var c3 = window.c3;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    c3.generate({
      bindto: '#my_chart',
      data: {
        columns: [
          ['USA', 0.33],
          ['Japan', 0.18],
          ['China', 0.10],
          ['South Korea', 0.08],
          ['Australia', 0.05],
          ['Germany', 0.03],
          ['Canada', 0.03],
          ['France', 0.02],
          ['Switzerland', 0.02],
          ['Taiwan', 0.02],
          ['Other', 0.14]
        ],
        type: 'pie'
      },
      color: {
        pattern: [
          'rgb(255,0,0)',
          'rgb(0,255,0)',
          'rgb(0,0,255)',
          'rgb(128,128,0)',
          'rgb(128,0,128)',
          'rgb(0,128,128)',
          'rgb(255,128,0)',
          'rgb(255,0,128)',
          'rgb(128,255,0)',
          'rgb(0,255,128)',
          'rgb(128,128,128)'
        ]
      }
    });
  }
})();
