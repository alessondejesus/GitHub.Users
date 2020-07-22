/* Rodando funções ao clicar */
const button = document.getElementById('botao')
button.onclick = () => {

    /* Apagando valores padrões */
    var ulModal = document.getElementById('ulModal')
    ulModal.innerHTML = ''
    var titleModal = document.querySelector('h5#modal')
    titleModal.innerHTML = ''

    /* Capturando Input */
    const user = document.getElementById('usuario')
    if (user.value.length <= 0){
        user.style.borderColor = 'red'
    }else{ 
        executeRequest(user.value)    
    }
}

async function executeRequest(url){
    try{
        /* url da requisição */
        const response = await axios.get(`https://api.github.com/users/${url}`)
        const data = {
            'name': response.data.name,
            'bio': response.data.bio,
            'id': response.data.id
        }
        addModal(data)
    }catch(err){
        /* Erro */
        console.log(err)
        alert('Não pudemos atender à solicitação!')
    }
}

function addModal(data){
    /* Capturando campos */
    var liModal = ''
    var ulModal = ''

    /* Incluindo Titulo */
    const titleModal = document.querySelector('h5#modal')
    titleModal.appendChild(document.createTextNode(document.getElementById('usuario').value))
    ulModal = document.getElementById('ulModal')

    /* Percorrendo Objecto */
    for( let n in data){
        if (data[n] == null){
            data[n] = 'indisponível'
        }
        liModal = document.createElement('li')
        liModal.setAttribute('class','list-group-item')
        liModal.appendChild(document.createTextNode(`${data[n]}`))
        ulModal.appendChild(liModal)
    } 
    /* Chamando Model */   
    $('#modal').modal('show');
}

/* Não permite o refresh ao submitar */
var form = document.getElementById("formulario-usuario");
form.addEventListener('submit', event => {
    event.preventDefault()
});
