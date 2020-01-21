var bapct = document.getElementById("buyAskPriceChart");
/*
- Chart를 생성하면서, 
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍니다. 
*/
var buyAskPriceChart = new Chart(bapct, {
    type: 'horizontalBar',
    data: {
        labels: ["312000", "311500", "311000", "310500", "310000", "309500","309000","308500","308000"],
        datasets: [{
            data: [2186, 1625,1676,1009,1250,346,113,139,217],
            backgroundColor: ['#ff6666','#ff6666','#ff6666','#ff6666','#ff6666','#ff6666','#ff6666','#ff6666','#ff6666']
        }]
    },
    options: {
        legend:{display:false},
        scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
    }
});