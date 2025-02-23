let valor1 = prompt("Ingrese la distancia que desea recorrer");

if (valor1 <= 0) {
    document.write('Ingrese una distancia válida');
} else if (valor1 <= 1000) {
    document.write('Podés ir caminando tranquilamente');
} else if (valor1 <= 10000) {
    document.write('Excelente, podés ir en bicicleta!');
} else if (valor1 <= 30000) {
    document.write('Para esa distancia lo mejor sería que vayas en auto');
} else {
    document.write('Definitivamente deberías sacar un pasaje de avión');
}


// let miCadena = "Cuantos caracteres hay";
// console.log(miCadena[miCadena.length -1]);