(function() {
    const ctx = document.getElementById("traffic").getContext("2d");

    const trafficChart = new Chart(ctx, {
        type: 'line',
        data: '',
        options: {

        }
    });

    const cdt = document.getElementById("daily-traffic").getContext('2d');

    const dailyTrafficChart = new Chart(cdt, {
        type: 'bar',
        data: '',
        options: {

        }
    });

    const cmu = document.getElementById("mobile-users").getContext('2d');

    const mobileUsersChart = new Chart(cmu, {
        type: 'doughnut',
        data: '',
        options: {

        }
    })
})();