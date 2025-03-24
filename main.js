async function buscarUsuarios() {
    userText = document.getElementById('userText')
    url = 'http://localhost:3000/users'
    userText.innerHTML = 'Henrique'


    // Exemplo 5 com Async/Await
    response = await fetch(url);
    data = await response.json()
    console.log('Fetch 5: ', data)

    userText = document.getElementById('userText')
    userText.innerHTML = data.users[1]
    
}
