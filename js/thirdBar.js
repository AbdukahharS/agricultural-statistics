const defaultThirdBarData = [
    608826, 620143, 759549, 527475, 492434, 247187, 995909, 299816, 813057,
    804718, 461219, 629651, 723480, 333876
]

const thirdBarRender = (data) => {
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
                    fontSize: '16px',
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '20%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            title: {
                text: 'Tonna',
                style: {
                    color: '#d8d6d6',
                },
            },
            labels: {
                style: {
                    colors: '#d8d6d6',
                },
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

    var chart = new ApexCharts(document.querySelector('#thirdBar'), options)
    chart.render()
}