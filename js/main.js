const paths = document.querySelectorAll('#map path')
const pie = document.querySelector('#piechart')
const bar = document.querySelector('#barchart')
const h1Title = document.querySelector('#title')
const buttons = document.querySelectorAll('#products button')
const cropButton = document.querySelectorAll('#left button')
const secondBar = document.querySelector('#secondBar')
const thirdBar = document.querySelector('#thirdBar')
const linGraph = document.querySelector('#linGraph')
const reg = document.querySelectorAll('.count-reg')


reg.forEach(r => r.style.display = 'none')

cropButton[1].style.background = '#5c6374'
buttons[0].style.background = '#5c6374'

cropButton.forEach((btn) => {
    const id = Number(btn.id)
    btn.addEventListener('click', (e) => {
        if (id != cropButton[1]) {
            cropButton[1].style.background = ''
        } else {
            cropButton[1].style.background = '#5c6374'
        }
        linGraph.innerHTML = ''
        const cropFind = Object.entries(crops_data_uz)
        const series = cropFind[id][1]
        if (series) {
            LineRender(series)
        }
    })
})



buttons.forEach((btn) => {
    const id = Number(btn.id)
    btn.addEventListener('click', (e) => {
        if (id != buttons[0]) {
            buttons[0].style.background = ''

        } else {
            buttons[0].style.background = '#5c6374'
        }
        secondBar.innerHTML = ''
        const rFind = Object.entries(agro_data.map((data) => Object.entries(data)))
        const series = [
            rFind[0][1][id][1][10],
            rFind[1][1][id][1][10],
            rFind[2][1][id][1][10],
            rFind[3][1][id][1][10],
            rFind[4][1][id][1][10],
            rFind[5][1][id][1][10],
            rFind[6][1][id][1][10],
            rFind[7][1][id][1][10],
            rFind[8][1][id][1][10],
            rFind[9][1][id][1][10],
            rFind[10][1][id][1][10],
            rFind[11][1][id][1][10],
            rFind[12][1][id][1][10],
        ]
        if (series) {
            secondBarRender(series)
        }
    })
})

paths.forEach((path) => {
    const title = path.getAttribute('title')
    const id = path.id
    const regs = document.querySelectorAll('.count-reg')

    const reg1 = document.querySelector('#count-reg1')
    const reg2 = document.querySelector('#count-reg2')
    const reg3 = document.querySelector('#count-reg3')
    const uz = document.querySelectorAll('.count-uz')




    path.style.fill = '#4b4f5c'
    path.style.opacity = '0.3'
    path.style.stroke = '#fff'


    path.addEventListener('mouseover', (e) => {
        path.style.opacity = '1'
    })
    path.addEventListener('mouseout', (e) => {
        path.style.opacity = '0.3'
    })
    path.addEventListener('focus', (e) => {
        let titletext = title == 'Qoraqalpog‘iston Respublikasi' ? title : title + ' viloyati'
        h1Title.innerHTML = titletext
        reg1.style.display = 'block'
        reg2.style.display = 'block'
        reg3.style.display = 'block'

        uz.forEach((i) => {
            i.style.fontSize = '17px'
        })

        pie.innerHTML = ''
        bar.innerHTML = ''
        const RegFind = agro_data.find((r) => r.id == id)
        const rFind = Object.entries(RegFind)






        const series = [
            rFind[3][1][10],
            rFind[4][1][10],
            rFind[5][1][10],
            rFind[6][1][10],
            rFind[7][1][10],
            rFind[8][1][10],
            rFind[9][1][10],
            rFind[10][1][10],
        ]
        const barSeries = [
            rFind[3][1].slice(8, 11),
            rFind[4][1].slice(8, 11),
            rFind[5][1].slice(8, 11),
            rFind[6][1].slice(8, 11),
            rFind[7][1].slice(8, 11),
            rFind[8][1].slice(8, 11),
            rFind[9][1].slice(8, 11),
            rFind[10][1].slice(8, 11),
        ]
        if (series) {
            pieRender(series)
        }
        if (barSeries) {

            const MFind = agro_data.find(r => r.id == id)
            const mFind = Object.entries(MFind)
            reg1.innerHTML = Math.round(mFind[11][1] / 1000)


            const LFind = land_data.find(r => r.id == id)
            const lFind = Object.entries(LFind)
            reg2.innerHTML = lFind[3][1]


            const AFind = atmosphera_data.find(r => r.id == id)
            const aFind = Object.entries(AFind)
            reg3.innerHTML = Math.round(aFind[3][1] / 1000)


            barRender(barSeries)
        }
    })
    path.addEventListener('blur', (e) => {


        cropButton[1].style.background = '#5c6374'
        buttons[0].style.background = '#5c6374'

        h1Title.innerHTML = "O'zbekiston Respublikasi"
        uz.forEach((i) => {
            i.style.fontSize = '25px'
        })


        reg1.style.display = 'none'
        reg2.style.display = 'none'
        reg3.style.display = 'none'

        reg1.innerHTML = ''
        reg2.innerHTML = ''
        reg3.innerHTML = ''

        pie.innerHTML = ''
        bar.innerHTML = ''
        pieRender(defaultData)
        barRender(defaultBarData)
    })
})