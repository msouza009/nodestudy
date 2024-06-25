const e = require("express");
const { response } = require("express");

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// POST
fetch('http://localhost:3000/lanches', { 
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: 7, nome: 'X-Bacon', descricao: 'Burguer de bandido' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error: ', error));

// DELETE (Onde está {id} você deve passar o id do lanche que deseja deletar)
fetch('http://localhost:3000/lanches/{id}', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: {id} })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error: ', error));

// ERROR
fetch('http://localhost:3000/lanches')  
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao recuperar lanches');
    }
    return response.json();
})
.catch(error => {
    console.log('Fetch error:' , error);
});