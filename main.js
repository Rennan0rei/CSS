async function pegaOsMano() {
    userText = document.getElementById('userText')
    userText.innerHTML = 'Gabriel'

    url = 'http://127.0.0.1:3000/users'

    response = await fetch(url);
    data = await response.json()
    console.log('Fetch 5: ', data)
}