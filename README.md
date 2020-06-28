####Requisição JS Usando Axios
###### [Documentação do AXIOS](https://github.com/axios/axios "Documentação do AXIOS")
------------

> Axios é uma biblioteca JavaScript que permite **requisições** do lado do **cliente**. Podendo ser usado para Dev. Mobile, Single Page Aplication, API's internas e externas, servidor entre outros.

###### Usando unpkg CDN:
````html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
````
Importando a biblioteca com o script acima é possível usar os métodos e objetos do mesmo, como um simples:
```javascript
const resultado = axios.get('https://ap.SITE_ALVO.com.br/json/')
```

O Axios nos permite algo interessante com Assincronismo:
```javascript
async function executeRequest(url){
    try{
        const response = await axios.get('https://ap.SITE_ALVO.com.br/json/')
        /* Sucesso */
    }catch(err){
        /* Erro */
        console.log(err)
    }
}
```

É importante citar, também o uso de um **script** muito "manjado" e interessante que permite envio de formularios sem o famoso **refresh**, atráves de:
```javascript
var form = document.getElementById("formulario-usuario");
form.addEventListener('submit', event => {
    event.preventDefault()
});
```
E por ultimo, não poderiamos deixar de falar do **modal** do **Bootstrap**, usamos ele pra trazer um visual agradavel ao usuário da aplicação
```javascript
$('#myIdModal').modal('option');
```

------------
##### Bibliotecas e Frameworks Usados:
- Bootstrap
- JQuery
- Async/Await (iremos abusar muito disso aqui)
- Arrow Function (disso também :p)
- Desestruturação
