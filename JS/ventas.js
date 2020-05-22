class Producto{
    constructor(item, cant, descripcion, marca, precio, ){
        this.item = item;
        this.cant = cant;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio =precio;
    }
}
var contador_item = 0;

function agregarProducto(){
    var indexProducto = document.getElementById("buscador").value;
    alert(indexProducto);
    if(indexProducto == 1){
        contador_item++;
        var descProducto = document.getElementById("1").innerHTML;
        alert(descProducto);
        let producto = new Producto(contador_item,null,descProducto,"Gloria", 15.30);
        alert("Producto Creado: Item: "+producto.item+", Cantidad: "+producto.cant+", Desc.: "+producto.descripcion+", Marca: "+producto.marca+", Precio: "+producto.precio)
        
        agregaralatabla();
    }
    if(indexProducto == 2){
        contador_item++;
        var descProducto = document.getElementById("2").innerHTML;
        alert(descProducto);
        let producto = new Producto(contador_item,null,descProducto,"Laive", 3.10);
        alert("Producto Creado: Item: "+producto.item+", Cantidad: "+producto.cant+", Desc.: "+producto.descripcion+", Marca: "+producto.marca+", Precio: "+producto.precio)
        
        agregaralatabla();
    }
    if(indexProducto == 3){
        contador_item++;
        var descProducto = document.getElementById("3").innerHTML;
        alert(descProducto);
        let producto = new Producto(contador_item,null,descProducto,"Laive", 3.20);
        alert("Producto Creado: Item: "+producto.item+", Cantidad: "+producto.cant+", Desc.: "+producto.descripcion+", Marca: "+producto.marca+", Precio: "+producto.precio)
        
        agregaralatabla();
    }
}
function agregaralatabla(){
    var nombretabla = document.getElementById("tabla-contenido");
    var fila = nombretabla.insertRow(0+1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);

    /*celda1.innerHTML = producto.item;
    celda2.innerHTML = producto.cant;
    celda3.innerHTML = producto.descripcion;
    celda4.innerHTML = producto.marca;
    celda5.innerHTML = producto.precio;
    celda6.innerHTML = producto.precio;*/ 

    celda1.innerHTML = "1";
    celda2.innerHTML = "Cant: 2";
    celda3.innerHTML = "Leche descp";
    celda4.innerHTML = "Laive";
    celda5.innerHTML = "34,5";
    celda6.innerHTML = "32,4";
}