var ctx4 = document.getElementById('pageviews-canvas');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
                label: 'PAGE VIEWS',
                data: [27083, 31004, 39056, 34071],
                backgroundColor: 'rgba(255, 215, 0, 0.5)',
                borderColor: 'rgb(255, 215, 0)',
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
