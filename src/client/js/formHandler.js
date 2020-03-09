// Personal API Key for OpenWeatherMap API
const apiKey= 'd73f64c6babee8a19e82551dbc221640';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const newZip =  document.getElementById('zip').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${newZip},us&units=imperial&appid=${apiKey}`

    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        console.log(res.main.temp)
        document.getElementById('results').innerHTML = res.main.temp
    })
}

export { handleSubmit }

