(function() {
    const ctx = document.getElementById("traffic").getContext("2d");

    const trafficChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0', '16 - 22', '23 - 29', '30 - 5', '6 - 12', '13 - 19', '20 - 26', '27 - 3', '4 - 10', '11 - 17', '18 - 24', '25 - 31'],
            datasets: [
            {
                label:  'Hourly',
                data:   [750, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
                borderColor:    'rgba(168, 179, 229, 1)',
                backgroundColor: 'rgba(204, 204, 255, 0.1)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(251, 251, 251, 1)',
                pointBorderColor: 'rgba(116, 119, 191, 1)'
            },
            {
                label:  'Daily',
                data:   [750, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
                borderColor:    'rgba(168, 179, 229, 1)',
                backgroundColor: 'rgba(204, 204, 255, 0.1)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(251, 251, 251, 1)',
                pointBorderColor: 'rgba(116, 119, 191, 1)'
            },{
                label: 'Weekly',
                data:   [750, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
                borderColor:    'rgba(168, 179, 229, 1)',
                backgroundColor: 'rgba(204, 204, 255, 0.1)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(251, 251, 251, 1)',
                pointBorderColor: 'rgba(116, 119, 191, 1)'
            },
            {
                label: 'Monthly',
                data:   [750, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
                borderColor:    'rgba(168, 179, 229, 1)',
                backgroundColor: 'rgba(204, 204, 255, 0.1)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(251, 251, 251, 1)',
                pointBorderColor: 'rgba(116, 119, 191, 1)'
            }]
        },
        options: {
            scales: {
                yAxes:  [{
                    ticks:  {
                        beginAtZero:  true
                    }
                }],
            }
        }
    });

    const cdt = document.getElementById("daily-traffic").getContext('2d');

    const dailyTrafficChart = new Chart(cdt, {
        type: 'bar',
        data: '',
        options: {
            scales: {
                yAxes:  [{
                    ticks:  {
                        beginAtZero: true
                    }
                }]
            }

        }
    });

    const cmu = document.getElementById("mobile-users").getContext('2d');

    const mobileUsersChart = new Chart(cmu, {
        type: 'doughnut',
        data: '',
        options: {
            cutoutPercentage:   50,
            labels: [
                "Phones",
                "Tablets",
                "Desktop"
            ]
        }
    });
})();