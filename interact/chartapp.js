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
        ],
        type: 'pie'
      },
      color: {
        pattern: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)']
      }
    });
  }
})();
