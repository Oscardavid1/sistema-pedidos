let productos = [
  { idProducto: "1", nombre: "Hamburguesa", precio: 50000, categoria: 10 },
  { idProducto: "2", nombre: "pan", precio: 80000, categoria: 5 },
  { idProducto: "3", nombre: "pizza", precio: 120000, categoria: 3 }
]

let pedidos = []

function pedido (idPedido, nombreCliente,estado,items) {
    const orden = {
        idPedido: 2,
        nombreCliente,
        estado: "pendiente",
        items
    }
    pedidos.push(orden)
    console.log(`pedido ${idPedido} creado para ${nombreCliente}, estado ${estado}`)
}

pedido (2,"Andres","pendiente",[{idProducto: "1", nombre: "Hamburguesa", precio: 50000, categoria: 10}])

function cambiarEstadoPedido(idpedido,nuevoEstado){
    const pedido = pedidos.find(p => p.idpedido = p.idpedido)
        if(pedido) {
        pedido.estado = nuevoEstado
        console.log(`pedido ${idpedido} actualizado a estado : ${nuevoEstado}`)
         }
        else{
        console.log("pedido no encontrado")
         }
}

cambiarEstadoPedido(1,"entregado")

