const ctx2 = document.getElementById('visitstrend-canvas');

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'VISITS - TREND',
        data: [11032, 15113, 17702, 19001, 20007, 18992, 23986, 27003, 25987, 21985, 29876, 31899],
        fill : false,
        borderColor : "rgb(196, 30, 58)",
        borderWidth: 3,
        tension : 0.75
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