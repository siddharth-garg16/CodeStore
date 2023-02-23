var ctx6 = document.getElementById('efficiency-canvas');
new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: [
            'Q1',
            'Q2',
            'Q3',
            'Q4'
        ],
        datasets: [{
                label: 'AD EFFICIENCY',
                data: [0.32, 0.45, 0.73, 0.51],
                backgroundColor: [
                    'rgb(227, 11, 92)',
                    'rgb(54, 162, 235)',
                    'rgb(54, 69, 79)',
                    'rgb(233, 116, 81)'
                ],
                hoverOffset: 4
            }]
    }
});
