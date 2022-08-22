import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 800

async function cityFilter (city) {
    $('[wm-city]').each((index, element) => {
        if (city == null) {
            $(element).fadeIn(duration)
            $(element).parent().removeClass('d-none')
        }

        else {
            if ($(element).attr('wm-city') == city) {
                $(element).parent().removeClass('d-none')
                $(element).fadeIn(duration)
            }
            else {
                $(element).parent().addClass('d-none')
                $(element).fadeOut(duration)
            }
        }
    })
}

$.fn.cityButtons = function () {
    const cities = new Set()

    $('[wm-city]').each((i, e) => {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info'])
            .html(city)

        btn.on('click', e => {
            e.preventDefault
            cityFilter(city)
        })

        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info'])
        .html('Exibir todas')

    btnAll.on('click', e => {
        e.preventDefault
        cityFilter(null)
    })
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass('btn-group')
    btnGroup.append(btns)

    $(this).html(btnGroup)

    return this // para que eu consiga concatenar
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})

