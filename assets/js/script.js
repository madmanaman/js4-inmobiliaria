//array ventas//
const propiedades_venta = [
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg", 
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: "3 Habitaciones",
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", 
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4 Habitaciones",
        costo: 5000,
        smoke: false,
        pets:  false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg", 
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: "2 Habitaciones",
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Barrio Los Castaños VII",
        src: "https://http2.mlstatic.com/D_NQ_NP_839640-MLC53605509708_022023-O.webp", 
        descripcion: "El proyecto ideal para disfrutar de buenos momentos junto a tu familia.",
        ubicacion: "Av. Cuatro Pte. 1118, Maipú, Chile,",
        habitaciones: "4 Habitaciones",
        costo: 6250,
        smoke: true,
        pets: true,
    }
]

//array alquiler//
const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", 
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3 Habitaciones",
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60", 
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones",
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Activa Vicuña Mackenna Poniente",
        src: "https://http2.mlstatic.com/D_NQ_NP_601517-MLC76445664277_052024-O.webp", 
        descripcion: "Edificio 100% dedicado al arriendo con gastos comunes fijos. Cuenta con administración y mantención profesional.",
        ubicacion: "Av. Vicuña Mackenna Pte. 6315, La Florida, Chile",
        habitaciones: "2 Habitaciones",
        costo: 2500,
        smoke: true,
        pets: false,
    }
]

//js ventas//
const principal_venta = document.querySelector("#principal")

let html_ventas =""

for(let propiedad_venta of propiedades_venta){
    html_ventas +=`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad_venta.src}" class="card-img-top" alt="Imagen de propiedad"/>
              <div class="card-body">
                <h5 class="card-title">${propiedad_venta.nombre}</h5>
                <p class="card-text">${propiedad_venta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad_venta.habitaciones}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_venta.costo.toLocaleString('es-ES')}</p>
                <p class="text-${propiedad_venta.smoke ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_venta.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                  ${propiedad_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="text-${propiedad_venta.pets ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_venta.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                  ${propiedad_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>         
`
}



//js alquiler//
const principal_alquiler = document.querySelector("#principal")

let html_alquiler =""

for(let propiedad_alquiler of propiedades_alquiler){
    html_alquiler +=`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad_alquiler.src}" class="card-img-top" alt="Imagen de propiedad"/>
              <div class="card-body">
                <h5 class="card-title">${propiedad_alquiler.nombre}</h5>
                <p class="card-text">${propiedad_alquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo.toLocaleString('es-ES')}</p>
                <p class="text-${propiedad_alquiler.smoke ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                  ${propiedad_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="text-${propiedad_alquiler.pets ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_alquiler.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                  ${propiedad_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>         
`
}

//js index//

const alquiler_index = document.querySelector("#alquilerSeccion")
const venta_index = document.querySelector("#ventaSeccion")
const propiedades_alquiler_seleccionadas = propiedades_alquiler.slice(0,3)
const propiedades_venta_seleccionadas = propiedades_venta.slice(0,3)

//html index alquiler
let html_alquiler_index =""

for(let propiedad_alquiler of propiedades_alquiler_seleccionadas){
    html_alquiler_index +=`

        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad_alquiler.src}" class="card-img-top" alt="Imagen de propiedad"/>
              <div class="card-body">
                <h5 class="card-title">${propiedad_alquiler.nombre}</h5>
                <p class="card-text">${propiedad_alquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo.toLocaleString('es-ES')}</p>
                <p class="text-${propiedad_alquiler.smoke ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                  ${propiedad_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="text-${propiedad_alquiler.pets ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_alquiler.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                  ${propiedad_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>         
`
}

//html index venta//

let html_ventas_index =""

for(let propiedad_venta of propiedades_venta_seleccionadas){
    html_ventas_index +=`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad_venta.src}" class="card-img-top" alt="Imagen de propiedad"/>
              <div class="card-body">
                <h5 class="card-title">${propiedad_venta.nombre}</h5>
                <p class="card-text">${propiedad_venta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad_venta.habitaciones}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_venta.costo.toLocaleString('es-ES')}</p>
                <p class="text-${propiedad_venta.smoke ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_venta.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                  ${propiedad_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="text-${propiedad_venta.pets ? 'success' : 'danger'}">
                  <i class="fas ${propiedad_venta.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                  ${propiedad_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div> 
`
}

//condicion para mostrar pagina//
const venta = document.querySelector("#ventas")
const alquiler = document.querySelector("#alquiler")

if (venta !==null & alquiler !== null){
    alquiler_index.innerHTML = html_alquiler_index
    venta_index.innerHTML = html_ventas_index
}

if (venta !==null){
    principal_venta.innerHTML = html_ventas
}

if (alquiler !==null){
    principal_alquiler.innerHTML = html_alquiler
}



