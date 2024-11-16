let contenedor = document.getElementById("cont")
let boton = document.getElementById("boton");
let sumNotas = 0;
let cantNotas = 0; 

// función para calcular el promedio 

const promedio = () =>{
    let resultado = sumNotas / cantNotas; 

    let mostrarPromedio = document.createElement("p");
    mostrarPromedio.innerHTML = `Promedio de Notas: ${resultado}`;

    contenedor.appendChild(mostrarPromedio);
    
    
}

let sumaNota = (callback) =>{
    let recibeNum = document.getElementById("notas").value;
    let convertNum = parseInt(recibeNum);

    // verificamos si el número ingresado es valido 
    if(isNaN(convertNum)){
        console.log("Por favor Ingresa un número valido.");
        return; 
    }

    // Acomulamos la suma de notas y aumentamos contador
    sumNotas += convertNum;
    cantNotas++; 

    // agregamos cada calculo al contenedor para mostrar los resultados

    let mostrarNota = document.createElement("p");

    mostrarNota.innerHTML = `El numero Ingresado es: ${convertNum} <br>
    Suma total de las notas ${sumNotas} <br>
    Cantidad de notas Ingresadas: ${cantNotas} <br>
    ----------------------------------------------`;
    contenedor.appendChild(mostrarNota)

    // console.log(mostrarNota)
    // console.log(`Número ingresado ${convertNum}`)
    // console.log(`Suma total de las notas: ${sumNotas}`);
    // console.log(`Cantidad de notas Ingresadas: ${cantNotas}`);
    // console.log("--------------------------------------------")

    // limpiamos el input
    document.getElementById("notas").value = "";

    // verificamos si se han ingresado 6 nota 
    if (cantNotas === 6 ) {
        boton.disabled = true; //desactiva el boton despues de 6 notas
        callback(); 
        
    }
      
}


boton.addEventListener("click", ()=>{
    sumaNota(promedio);   
   
}); 