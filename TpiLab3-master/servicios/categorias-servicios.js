const url = "https://672a9be9976a834dd023e7a0.mockapi.io/api/TpiLab3-Leiva/categorias";


async function listar(id) {
    let cadUrl;
    if(isNaN(id))
      cadUrl= url;
    else 
      cadUrl = url + "/" + id;  
    return await fetch(cadUrl)
        .then(respuesta => respuesta.json());
}

async function crear(descripcion) {

    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descripcion: descripcion
        })
    })
}

async function editar(id, descripcion) {

    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descripcion: descripcion
        })
    })
}

async function borrar(id){
  
    let urlPut = url + "/" + id;
    return await fetch(urlPut, {
            method: 'DELETE'
       })
}

export const categoriasServices = {
    listar,
    crear,
    editar,
    borrar
}