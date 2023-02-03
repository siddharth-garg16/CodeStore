var ctx3 = document.getElementById('cpc-canvas');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
                label: 'COST PER CLICK',
                data: [3.76, 4.02, 2.87, 3.72],
                backgroundColor: "	rgba(80, 200, 120, 0.5)",
                borderColor: "	rgb(80, 200, 120)",
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
