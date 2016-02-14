(function() {
  'use strict';
  var c3 = window.c3;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    c3.generate({
      bindto: '#my_chart',
      data: {
        columns: [
          ['India', 0.21],
          ['Ecuador', 0.12],
          ['USA', 0.12],
          ['Thailand', 0.11],
          ['Vietnam', 0.07],
          ['Indonesia', 0.07],
          ['Mexico', 0.06],
          ['China', 0.04],
          ['Malaysia', 0.02],
          ['Peru', 0.02],
          ['Other', 0.16],
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
