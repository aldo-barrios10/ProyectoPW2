function programa1(){
    let nombre=prompt("¿Cuál es tu nombre?");
    let cadena= "Tu nombre es: "+nombre;
    document.getElementById("cad_1").innerHTML = cadena;
}

function programa2(){
    let n1=parseInt(prompt("Ingresa un número"));
    let n2=parseInt(prompt("Ingresa otro número"));

    let res=n1+n2;

    let cadena="La suma de los números selecionados es: "+res;
    document.getElementById("cad_2").innerHTML = cadena;
    
}

function programa3(){
    let sel1=confirm("Selecciona OK para True o Cancerl para False");
    let sel2=confirm("Selecciona otro OK para True o Cancerl para False");
    let cadena;
    if(sel1 && sel2){
        cadena = "Ambios elementos fueron verdaderos"
    }
    else if(sel1||sel2){
        cadena = "Uno de los elementos era verdadero"
    }
    else if(!(sel1) && !(sel2)){
        cadena ="Ambos elementos eran falsos"
    }

    document.getElementById("cad_3").innerHTML = cadena;
}

function programa6(){
    let num=parseInt(prompt("Ingresa un número del 1 al 10"));
    let cadena;
    if(num>0 && num<11){
        cadena="El número es: "+num;
    }
    else{
        cadena= "No seleccionaste un número dentro del rango"
    }

    document.getElementById("cad_6").innerHTML = cadena;
}

function programa7 (){
    let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
    let numeroUser = parseInt(prompt("Adivina el numero del 1 al 10"));
    let vidas = 3;
    let cadena;
    while((numeroMaquina !== numeroUser)&&vidas > 1){
        vidas--;
        if(numeroUser < numeroMaquina){
            numeroUser = parseInt(prompt("El numero que escogiste es menor, te quedan "+vidas+" vidas"));
        } else if (numeroUser > numeroMaquina){
            numeroUser = parseInt(prompt("El numero que escogiste es mayor, te quedan "+vidas+" vidas"));
        }
    }
    if(numeroMaquina === numeroUser){
        cadena="Ganaste";
    } else {
        cadena="Perdiste, el numero era "+ numeroMaquina;
    }

    document.getElementById("cad_7").innerHTML = cadena;

}

programa1();
programa2();
programa3();
programa6();
programa7();