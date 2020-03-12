function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    console.log("formText:", formText)
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch("/article", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: formText
      })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        console.log(res.categories)
        document.getElementById('results').innerHTML = res.categories
    })
}

export { handleSubmit }

