function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    // Client.checkForName(formText)

    let requestBody = {
        url: formText
    };

    fetch("http://localhost:8081/classify", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      })
    .then((res) => {
        console.log(res)
        const response = res.json()
        return response;
    })
    .then(function(response) {
        console.log('test')
        // console.log(res.categories)
        // document.getElementById('results').innerHTML = res.categories
        document.getElementById('results').innerHTML = response.language
    })
}


export { handleSubmit }


