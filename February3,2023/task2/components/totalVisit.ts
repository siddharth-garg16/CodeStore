const ctx5 = document.getElementById('totalvisits-canvas');

new Chart(ctx5, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'TOTAL VISITS',
        data: [11032, 13113, 17702, 15001, 12056, 19004, 21778, 24889, 32908, 30088, 27876, 29854],
        fill : true,
        borderColor : "rgb(170, 51, 106)",
        borderWidth: 3,
        tension : 0
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });