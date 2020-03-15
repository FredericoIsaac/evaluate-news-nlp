function urlValidator(inputText) {
    //adapted from https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
    //url must include http or https to be in valid format for fetching from Aylein API
    let regex = /^(https?:\/\/)(([\da-z\.-]+)\.)?([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    return regex.test(inputText)
}

export { urlValidator }
