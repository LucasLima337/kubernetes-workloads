import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess (callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes (parent) {
    if (!parent) parent = 'body'

    $(parent).find('[wm-include]').each(async (index, element) => {
        const url = $(element).attr('wm-include')

        try {
            const data = await $.ajax({ url })
            $(element).html(data)
            $(element).removeAttr('wm-include')

            loadHtmlSuccessCallbacks.forEach(callback => callback(data))
        }
        catch (e) {
            console.log('There was an Error: ', e)
        }

        loadIncludes(element)
    })
}

loadIncludes()