function handleSubmit(event) {
    event.preventDefault()

    const form = document.getElementsByTagName('form')
    // check what text was put into the form field
    let formText = document.getElementById('article').value
    if (Client.urlValidator(formText)) { //if URL is valid, then fetch from the API and update the UI with the response
        //create an object to be used in the fetch
        let requestBody = {
            url: formText
        };
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
        fetch("http://localhost:8081/sentiment", {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
        
        })
    }
    else { //if URL is not valid, display errors
        document.getElementById('errors').innerHTML = 'Please enter a URL in the format http://www.example.com'
    }
    form.reset()
}

export { handleSubmit }


