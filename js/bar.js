const defaultBarData = [
    [6535.5, 7437.8, 7566.6],
    [5.8, 8.8, 0],
    [59.8, 92.2, 0],
    [2911.9, 3089.7, 3143.5],
    [9760.3, 10215.1, 10459.5],
    [1837, 2068.7, 2134.4],
    [2706.2, 2752.7, 2864],
    [1589.8, 1603.3, 1639.2]
]

const barRender = (data) => {
    var options = {
        series: [{
                name: 'Don va dukkakli ekinlar',
                data: data[0],
            },
            {
                name: 'Texnik ekinlar',
                data: data[1],
            },
            {
                name: 'Moyli ekinlar',
                data: data[2],
            },
            {
                name: 'Kartoshka',
                data: data[3],
            },
            {
                name: 'Sabzavotlar',
                data: data[4],
            },
            {
                name: 'Oziqbop poliz ekinlar',
                data: data[5],
            },
            {
                name: 'Mevalar va rezavorlar',
                data: data[6],
            },
            {
                name: 'Uzum',
                data: data[7],
            },
        ],
        chart: {
            type: 'bar',
            height: 260,

            toolbar: {
                show: false
            }
        },
        legend: {
            labels: {
                colors: '#d8d6d6'
            },
            markers: {
                fillColors: [
                    'rgba(0,123,255, 0.8)',
                    'rgba(131,137,150, 0.8)',
                    '#00a300',
                    'rgba(235,76,66, 0.8)',
                    'rgba(254, 176, 25, 0.8)',
                    '#9f00a7',
                    'rgba(0, 227, 150, 0.8)',
                    'rgba(244,225,50, 0.8)',
                ]
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '90%',
                endingShape: 'rounded',
            },
        },

        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['2018', '2019', '2020'],
            labels: {
                style: {
                    colors: ['#d8d6d6', '#d8d6d6', '#d8d6d6']
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#d8d6d6']
                }
            }
        },
        fill: {
            opacity: 1,
            colors: [
                'rgba(0,123,255, 0.8)',
                'rgba(131,137,150, 0.8)',
                '#00a300',
                'rgba(235,76,66, 0.8)',
                'rgba(254, 176, 25, 0.8)',
                '#9f00a7',
                'rgba(0, 227, 150, 0.8)',
                'rgba(244,225,50, 0.8)',
            ]
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false,

            },
            marker: {
                show: false,
            },
            y: {
                formatter: function(val) {
                    return val + ' tonna'
                },
            },
        },
    }

    var chart = new ApexCharts(document.querySelector('#barchart'), options)
    chart.render()
}

barRender(defaultBarData)