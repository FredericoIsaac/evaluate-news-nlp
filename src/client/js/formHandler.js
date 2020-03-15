function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    if (Client.urlValidator(formText)) {

    //create an object to be used in the fetch
    let requestBody = {
        url: formText
    };

    console.log(requestBody)

    fetch("http://localhost:8081/classify", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('errors').innerHTML = ''
        res.categories.length === 0 ? document.getElementById('category').innerHTML = 'Uncategorized' : document.getElementById('category').innerHTML = res.categories[0].label
    
    })
}
    else {
        document.getElementById('errors').innerHTML = 'Please enter a URL in the format http://www.example.com'
        document.getElementById('category').innerHTML = 'Unable to evaluate'

    }
}


export { handleSubmit }


