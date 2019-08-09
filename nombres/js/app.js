document.querySelector('#generar-nombre').addEventListener('submit', function(e){

e.preventDefault();

//leer variables
const origen= document.querySelector('#origen').options[document.querySelector('#origen').selectedIndex].value;
const genero= document.querySelector('#genero').options[document.querySelector('#genero').selectedIndex].value;
const cantidad= document.querySelector('#numero').value;

let url= '';
url += 'http://uinames.com/api/?';

//agregar origen a la url
if(origen !== ''){
url += `region=${origen}&`;
}
//agregar genero seleccionado a la url
if(genero !==''){
url += `gender=${genero}&`;
}
//agregar cantidad de nombres
if(cantidad !==''){
    url += `amount=${cantidad}&`;
    }

//consulta en la api
 fetch(url).then(function(res){
    return res.json();
 }).then(function(nombre){
  let html= '<ul class="lista">';
 nombre.forEach(function(N){

 html += `
 <li> ${N.name} </li>
 `

 });
 html += `</ul>`
 document.querySelector('#resultado').innerHTML= html;
 }).catch(function(error){
     console.log(error);
 })
}
)