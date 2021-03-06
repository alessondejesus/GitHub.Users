#### Requisição JS Usando Axios
------------
<ins>[Clique aqui para acessar a aplicação](https://alessondejesus.github.io/GitHub.Users/ "Clique aqui para acessar a aplicação")</ins>
###### [Documentação do AXIOS](https://github.com/axios/axios "Documentação do AXIOS")
------------
> Axios é uma biblioteca JavaScript que permite **requisições** do lado do **cliente**. Podendo ser usado para Dev. Mobile, Single Page Aplication, API's internas e externas, servidor entre outros.

###### Usando unpkg CDN:
````html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
````
Importando a biblioteca com o script acima é possível usar os métodos e objetos do mesmo, exemplo:
```javascript
const resultado = axios.get('https://SITE_ALVO/json/')
```
Aqui vemos algo interessante em relação ao assincronismo no JS:
```javascript
async function executeRequest(url){
    try{       
        const response = await axios.get(`https://SITE_ALVO/json/'`)
        /* Tentativa de sucesso */ 
    }catch(err){
        /* Erro */
        console.log(err)
    }
}
```
É importante citar o uso de um **script** muito "majado" que permite envio de formulários sem o famoso **refresh**, atráves de:
```javascript
var form = document.getElementById("formulario-usuario");
form.addEventListener('submit', event => {
    event.preventDefault()
});
```
------------
##### Bibliotecas e Frameworks Usados:
- BootStrap
- JQuery
- Async/Await ~~(iremos abusar muito disso aqui)~~
- Arrow Function ~~(disso também :p)~~
- Desestruturação
