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
const resultado = axios.get('https://viacep.com.br/ws/45400000/json/')
```
É importante citar, também o uso de um **script** muito famoso e interessante que permite envio de formularios sem o famoso **refresh**, atráves de:
```javascript
var form = document.getElementById("formulario-usuario");
form.addEventListener('submit', event => {
    event.preventDefault()
});
```

------------
##### Bibliotecas e Frameworks Usados:
- JQuery
- BootStrap
- Async/Await (iremos abusar muito disso aqui)
- Arrow Function (disso também :p)
- Desestruturação
