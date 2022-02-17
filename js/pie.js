const uz_agro = Object.entries(agro_data_uz)

const defaultData = [
    uz_agro[3][1][10],
    uz_agro[4][1][10],
    uz_agro[5][1][10],
    uz_agro[6][1][10],
    uz_agro[7][1][10],
    uz_agro[8][1][10],
    uz_agro[9][1][10],
    uz_agro[10][1][10],
]

const pieRender = (data = []) => {
    var options = {
        name: '',
        series: data,
        stroke: {
            show: true,
            // curve: 'smooth',
            // lineCap: 'butt',
            // colors: ['#d5d8e0'],
            width: 1,
            dashArray: 0,
        },
        chart: {
            height: 360,
            type: 'pie',
            // foreColor: '#373d3f'
        },
        labels: [
            'Don va dukkakli ekinlar',
            'Texnik ekinlar',
            'Moyli ekinlar',
            'Kartoshka',
            'Sabzavotlar',
            'Oziqbop poliz ekinlar',
            'Mevalar va rezavorlar',
            'Uzum',
        ],
        legend: {
            position: 'bottom',
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
                ],
            },
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
            ],
        },



    }

    var chart = new ApexCharts(document.querySelector('#piechart'), options)

    chart.render()
}

pieRender(defaultData)