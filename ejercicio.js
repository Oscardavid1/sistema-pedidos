let productos= [
{idProducto : "1", Nombre: "Hamburguesa", Precio: 20000, Categoria: "Alimentos"},
{idProducto : "2", Nombre: "Gaseosa", Precio: 10000, Categoria: "Bebida" },
{idProducto : "3", Nombre: "Postre", Precio: 5000, Categoria: "Dulces"}
]

let pedidos= []

function aggProducto (Nombre, Precio, Categoria){
    const idProducto= (productos.length + 1)
    const nuevoProducto= {idProducto, Nombre, Precio, Categoria}
    productos.push (nuevoProducto)
    console.log("Producto agregado:", nuevoProducto)


}
aggProducto ("Papas fritas", 15000, "Alimentos")


aggProducto ("Papas fritas", 15000, "Alimentos")

function listarProductos (){
    console.log("Lista de productos:")
    productos.forEach(lista=>{
        console.log(`${lista.idProducto} / ${lista.Nombre} / ${lista.Precio} / ${lista.Categoria}`)
    } )
}
listarProductos()

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

