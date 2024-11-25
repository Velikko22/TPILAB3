import { usuariosServices } from "../../servicios/usuarios-servicios.js";
import { ventasServices } from "../../servicios/ventas-servicios.js";
import { productosServices } from "../../servicios/productos-servicios.js";
const htmlHome = 
` <div class="row" >
    <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box bg-maroon">
            <div class="inner">
            <h3 id="indVentas">_</h3>

            <p>Ventas</p>
            </div>
            <div class="icon">
                <i class="ion ion-bag"></i>
            </div>
            <a href="#/ventas" class="small-box-footer">Más información <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box bg-maroon">
            <div class="inner">
            <h3 id="indSindespachar">_</h3>

            <p>Sin despachar</p>
            </div>
            <div class="icon">
            <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#/ventas" class="small-box-footer">Más información <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box bg-maroon">
            <div class="inner">
            <h3 id="indUsuarios">_</h3>

            <p>Usuarios Registrados</p>
            </div>
            <div class="icon">
            <i class="ion ion-person-add"></i>
            </div>
            <a href="#/usuarios" class="small-box-footer">Más información <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-6">
        <!-- small box -->
        <div class="small-box bg-maroon">
            <div class="inner">
            <h3 id="indProductos">_</h3>

            <p>Productos</p>
            </div>
            <div class="icon">
            <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#/productos" class="small-box-footer">Más información <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
    <!-- ./col -->
</div>`

export async function Home(){
    let d = document
    let res='';
    d.querySelector('.contenidoTitulo').innerHTML = 'Home';
    d.querySelector('.contenidoTituloSec').innerHTML = '';
    d.querySelector('.rutaMenu').innerHTML = "Home";
    d.querySelector('.rutaMenu').setAttribute('href',"#/home");
    let cP =d.getElementById('contenidoPrincipal');
           
     
    cP.innerHTML =  htmlHome;
     
    let indVentas = d.getElementById ("indVentas");
    let indSinDespachar = d.getElementById ("indSindespachar");
    let indUsuarios = d.getElementById ("indUsuarios");
    let indProductos = d.getElementById ("indProductos");

    res = await usuariosServices.listar();
    //CANTIDAD DE USUARIOS
    indUsuarios.innerHTML = res.length;
    
    //CANTIDAD DE VENTAS
    res= await ventasServices.listar();
    indVentas.innerHTML = res.length;

    //CANTIDAD DE VENTAS SIN DESPACHAR (los valores que espera para el campo despachado son true y false)
    console.log(indSinDespachar) //imprime despachadas?
    res = await ventasServices.listarVentasDespachadas(false); //
    console.log(res);
    if (res === "Not found") {
        indSinDespachar.innerHTML = 0;  // Asigna 0 si res es "Not Found", por respuesta de mockupi
    } else {
        // Asigna la cantidad de elementos de res al indicador de sin despachar
        indSinDespachar.innerHTML = res.length || 0;
    }
    //const sinDespachar = Object.keys(res); //ESTA PARTE DE CODIGO NO FUNCIONABA POR LA RESPUESTA DEL MOCKAPI AL QUERY
    /*console.log(typeof sinDespachar);
    console.log(sinDespachar);
    console.log(length.sinDespachar);
    indSinDespachar.innerHTML = sinDespachar.length > 0 ? sinDespachar.length : "0";*/
   
   
    //CANTIDAD DE PRODUCTOS
    res= await productosServices.listar() ;
    indProductos.innerHTML = res.length;

}
