function handleSubmit(event) {
    event.preventDefault()

    const form = document.getElementsByTagName('form')
    // check what text was put into the form field
    let formText = document.getElementById('destination').value
    document.getElementById('formentry').innerHTML = formText
}

export { handleSubmit }
