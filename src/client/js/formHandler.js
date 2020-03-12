function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    Client.checkForName(formText)

    //pass the formText to the server
    const url = `http://localhost:8081/api?input=${formText}`
    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        console.log(res.categories)
        document.getElementById('results').innerHTML = res.categories
    })
}

export { handleSubmit }

