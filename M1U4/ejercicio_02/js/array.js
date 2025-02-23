const numeros = [35, 12, 89, 76, 42, 29];

let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    alert(`El número mayor es: ${mayor}`);


