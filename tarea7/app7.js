let frutas=[];

while(true){
    let compra=confirm("¿Quieres comprar?");
    if( compra === false){
        break;
    }

    let fruta=prompt("Ingresa la fruta que quieres comprar:");
    frutas.push(fruta);
}

frutas=frutas.filter(el => el != null)

console.log("Compraste las siguentes frutas:");
for(elemento in frutas){
    console.log(frutas[elemento])
}



let div_tit = document.getElementById("1");
let div_tab = document.getElementById("2");

let tabla   = document.createElement("table");
let tblBody = document.createElement("tbody");

let titulo   = document.createElement("h1");
let txt = document.createTextNode("Tarea 7: Carrito de compras");
titulo.appendChild(txt);
for (let i = 0; i < frutas.length; i++) {

    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    let textoCelda = document.createTextNode("Fruta comprada: "+frutas[i]);
    
    celda.style.padding="10px "
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    tblBody.appendChild(fila);
}

tabla.appendChild(tblBody);
div_tit.appendChild(titulo);
div_tab.appendChild(tabla);


tabla.setAttribute("border", "1");
tabla.setAttribute("bordercolor", "#fff");