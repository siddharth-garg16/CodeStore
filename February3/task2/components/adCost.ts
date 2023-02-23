const ctx1 = document.getElementById('adcost-canvas');

new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'AD COST ($)',
        data: [3228, 4209, 4572, 3003],
        borderWidth: 3
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