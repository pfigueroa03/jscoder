/* Simulador de compra de juegos. Se considera posibilidad de pago en cuotas o efectivo con descuento:
Requisitos: ser mayor de 18
Efectivo: Solo hay descuento del 10% en compras mayores a uSd50
Cuotas:
    - 3: 3% recarga
    - 6: 5% recarga
    - 9: 8% recarga
*/


const calcularMonto = () => {
    let compraFinal = Math.random() * 100
    return compraFinal
}

const calcularEfectivo = (monto) => {
    let montoFinal
    if (monto >= 50) {
        montoFinal = monto * 0.9  
    } else {
        montoFinal = monto
    }
    return montoFinal.toFixed(2)
}

const calcularCuota = (monto, cuotasNum) => {
    let finalCuota
    let montoCuota
    if (cuotasNum == 3) {
        finalCuota = monto * 1.03
        montoCuota = finalCuota/cuotasNum
    } else if (cuotasNum == 6) {
        finalCuota = monto * 1.05
        montoCuota = finalCuota/cuotasNum
    } else {
        finalCuota = monto * 1.08
        montoCuota = finalCuota/cuotasNum
    }
    return [finalCuota.toFixed(2), montoCuota.toFixed(2)]
}

alert("Requisitos: ser mayor de 18" + "\n" 
+ "Efectivo: Solo hay descuento del 10% en compras mayores a uSd50" + "\n" 
+ "Cuotas: 3 con 3% recarga - 6 con 5% recarga - 9 con 8% de recarga")


let edad = prompt("Ingrese su edad: ")

if (edad < 18) {
    alert("Debe ser mayor de 18 para realizar una compra")
} else {
    let medio = prompt("Seleccione el medio de pago (efectivo o cuotas): ")
    while (medio != "efectivo" && medio != "cuotas") {
        alert("Medio de pago erroneo")
        medio = prompt("Seleccione nuevamente entre efectivo o cuotas")
    }
    
    let montoSimulado = calcularMonto()
    if (medio == "efectivo") {
        debugger
        montoEfvo = calcularEfectivo(montoSimulado)
        alert("El monto a pagar es: " + montoEfvo)
    } else {
        debugger
        let cuotasNum = prompt("Ingrese cantidad de cuotas (3, 6 o 9) :" )
        while (cuotasNum != 3 && cuotasNum != 6 && cuotasNum != 9) {
            alert("cantidad de cuotas incorrectas")
            cuotasNum = prompt("Ingrese la cantidad de cuotas nuevamente")
        }
        [finalCuota, montoCuota] = calcularCuota(montoSimulado, cuotasNum)
        alert("El monto a pagar es: " + finalCuota + "\n"
        + "y cada cuota es de: " + montoCuota)
    }
}

