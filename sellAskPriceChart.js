// 우선 컨텍스트를 가져옵니다. 
var sapct = document.getElementById("sellAskPriceChart");
/*
- Chart를 생성하면서, 
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍니다. 
*/
var sellAskPriceChart = new Chart(sapct, {
    type: 'horizontalBar',
    data: {
        labels: ["316500", "316000", "315500", "315000", "314500", "314000","313500","313000","312500"],
        datasets: [{
            data: [68, 128,56,45,422,338,580,610,848],
            backgroundColor: ['#3399ff','#3399ff','#3399ff','#3399ff','#3399ff','#3399ff','#3399ff','#3399ff','#3399ff'],
            hoverBackgroundColor: ['#e6ffff','#e6ffff','#e6ffff','#e6ffff','#e6ffff','#e6ffff','#e6ffff','#e6ffff','#e6ffff']
        }]
    },
    options: {
        legend:{display:false},
        scales: {
            xAxes: [{
              ticks:{
                reverse:true
              },
              display: false
            }],
            yAxes: [{
              
              display: false
            }],
          }
    }
});