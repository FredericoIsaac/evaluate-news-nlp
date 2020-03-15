function urlValidator(inputText) {

    let regex = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

    return regex.test(inputText)
}

export { urlValidator }
