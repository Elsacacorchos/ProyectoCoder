//console.log("correcto")

function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'json/Players.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let i of datos){
                res.innerHTML += `
                <tr>
                  <th>${i.nombre}</th>
                  <th>${i.apellido}</th>
                  <th>${i.totalPoints}</th>
                </tr>
                `
            }
        }
    }
}