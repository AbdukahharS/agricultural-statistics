// 'Don va dukkakli ekinlar',
// 'TeXnik ekinlar',
// 'Moyli ekinlar',
// 'Kartoshka',
// 'Sabzavotlar',
// 'Oziqbop poliz ekinlar',
// 'Mevalar va rezavorlar',
// 'Uzum',

const lineData = [246562, 235881, 209349, 211175, 223517, 224019, 251187, 258222, 258988, 281302, 282740]

const LineRender = (data) => {
    var options = {
        colors: ["#FF1654", "#247BA0"],
        series: [{
            name: '',
            data: data,
        }, ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        markers: {
            size: 0
        },

        yaxis: {
            labels: {
                style: {
                    colors: '#d8d6d6',
                    fontSize: '16px'

                }
            },
            title: {
                text: "Tonna",
                style: {
                    color: "#d8d6d6"
                }
            }
        },
        xaxis: {
            labels: {
                style: {
                    colors: '#d8d6d6'
                },
            },
            title: {
                text: "Yil",
                style: {
                    color: "#d8d6d6",
                }
            },
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
            ],
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

    var chart = new ApexCharts(document.querySelector('#linGraph'), options)
    chart.render()
}

LineRender(lineData)