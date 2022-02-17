const defaultSecondBarData = [
    652036, 546556, 759262, 732628, 510735, 240942, 885665, 277685, 813057,
    298134, 678347, 566981, 435546,
]

const secondBarRender = (data) => {
    var options = {
        series: [{
            name: '',
            data: data,
        }, ],
        chart: {
            type: 'bar',
            height: 500,
            toolbar: {
                show: false,
            },
        },

        yaxis: {
            labels: {

                style: {
                    colors: '#d8d6d6',
                    fontSize: '16px'

                }
            },

        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -3,
            style: {
                fontSize: '11px',
                colors: ['#fff']
            }
        },

        xaxis: {
            title: {
                text: "Tonna",
                style: {
                    color: "#d8d6d6",
                }
            },
            labels: {
                style: {
                    colors: '#d8d6d6'
                }
            },

            categories: [
                'Andijon',
                'Buxoro',
                'Farg`ona',
                'Jizzax',
                'Namangan',
                'Navoiy',
                'Qashqadaryo',
                'Qoraqalpog`iston Respublikasi',
                'Samarqand',
                'Sirdaryo',
                'Surxondaryo',
                'Toshkent',
                'Xorazm',
            ],
        },

        // title: {
        //     text: 'Product Trends by Year',
        //     align: 'right',
        // },

        fill: {
            opacity: 1,
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

    var chart = new ApexCharts(document.querySelector('#secondBar'), options)
    chart.render()
}

secondBarRender(defaultSecondBarData)