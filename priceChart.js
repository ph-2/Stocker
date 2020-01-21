// 우선 컨텍스트를 가져옵니다. 
var pct = document.getElementById("priceChart");
/*
- Chart를 생성하면서, 
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍니다. 
*/
var priceChart = new Chart(pct, {
    type: 'line',
    data: {
        labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        datasets: [{
            label: '1일',
            data: [315000, 313500, 313000, 313200, 313000, 313000],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: "rgba(255, 159, 64, 1)",
            fill:false,
            lineTension:0
        }]
    },
    options: {
        responsive: true,
        tootips:{
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});