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