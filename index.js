/**
 * Lógica para crear pedidos y cobrar los pedidos del usuario
 */

const usuario = {
  nombre: "Javascript",
  edad: 30,
  deuda: 0
}

let pedidos = []
let costoPedido = 0

// Lista todos los productos del menú en un formato amigable
const mostrarMenu = () => {
  console.log(`CÓDIGO - NOMBRE PRODUCTO - COSTO`)
  for(let producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}

const pedirProducto = codigo => {
  if (!codigo) return "Ingrese un código valido"

  const productoEncontrado = productos.find(producto => producto.codigo === codigo)
  if (!productoEncontrado) return "El producto no existe"

  pedidos.push(productoEncontrado)
  console.log("El producto ha sido agregado a su pedido. Su pedido es:")
  return verPedido()
}

const verPedido = () => {
  for(let pedido of pedidos) {
    console.log(`${pedido.codigo} - ${pedido.nombre} - $${pedido.costo}`)
  }
}

const calcularCosto = () => {
  let costo = 0
  for (producto of pedidos) {
    costo += producto.costo
  }
  costoPedido = costo
  return costoPedido
}

const finalizarPedido = () => {
  calcularCosto()
  usuario.deuda = costoPedido

  pedidos = []
  costoPedido = 0

  return `${usuario.nombre}, debes pagar ${usuario.deuda} dólares.`
}


// Función que permite pagar todo un pedido y entrega cambio si es necesario.
const pagarPedido = montoEntregado => {
  if(typeof montoEntregado === "number") {
    if (montoEntregado < usuario.deuda) {
      return `No te alcanza para pagar tu pedido.`
    } else if (montoEntregado === usuario.deuda) {
      usuario.deuda = 0
      return `Tu pedido ha sido pagado.`
    } else {
      console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}.`)
      usuario.deuda = 0
      return "Deuda pagada"
    }
  } else {
    return "Dato ingresado de forma erronea"
  }  
} 