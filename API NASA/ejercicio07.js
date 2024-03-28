const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/_NAME_/photos?sol=_DDDD_&api_key=DEMO_KEY";

const diaFotos = generarNumeroAleatorio()

async function obtenerDatos(name, day) {
    let i = 0;
    let imgBuffer = []
    const urlFin = url.replace("_NAME_", name).replace("_DDDD_", day);
    console.log(urlFin);
    try {
        const response = await fetch(urlFin);
        const data = await response.json();
        data.photos.forEach((element) => {
            if (("NAVCAM" === element.camera.name || "FHAZ" === element.camera.name|| "PANCAM"=== element.camera.name) && i < 10) {
                let imgSrc = element.img_src;
                imgBuffer.push(imgSrc);
                console.log(imgSrc);
                i++;
            }
        });
    } catch (error) {
        console.error('Error recopilando foto de:', name);
    } finally {
        llenarCarrusel('carousel' + name, imgBuffer)
        console.log(imgBuffer)
    }
}

function llenarCarrusel(carruselId, imgBuffer) {
    let carrusel = document.getElementById(carruselId)

    let innerCarousel = carrusel.getElementsByClassName('carousel-inner')[0]
    innerCarousel.innerHTML = ''

    imgBuffer.forEach((imgSrc, index) => {
        let carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item d-flex justify-content-center align-items-center ';
        if (imgBuffer.length === 0) {
            imgBuffer.push('imagen_predeterminada.jpg');
        }
        let img = document.createElement('img'); 
        img.className = 'd-block w-75 rounded-pill mx-auto d-block';
        img.style.objectFit = 'cover';  
        img.setAttribute('src', imgSrc); 
        img.setAttribute('width', '800'); 
        img.setAttribute('height', '400'); 
        img.setAttribute('role', 'img'); 
        img.setAttribute('alt', 'Imagen del rover'); 

        if (imgSrc === 'imagen_predeterminada.jpg') {
            let text = document.createElement('p');
            text.textContent = 'IMAGENES NO ENCONTRADAS';
            text.style.position = 'absolute';
            text.style.top = '10px';
            text.style.left = '50%';
            text.style.transform = 'translateX(-50%)';
            text.style.color = 'white';
            text.style.fontSize = '20px';
            carouselItem.appendChild(text);
        }

        if (index === 0) {
            carouselItem.classList.add('active');  // Make the first item active
        }

        carouselItem.appendChild(img); 
        innerCarousel.appendChild(carouselItem);
    })
}



function generarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 1001)
    const numeroFormateado = numeroAleatorio.toString().padStart(4, '0')
    return numeroFormateado;
}

function actualizarCabecera() {

    const cabeceraElement = document.getElementById('cabeceraDiaFotos')
    if (cabeceraElement) {
        cabeceraElement.textContent = `Día de las fotos: ${diaFotos}`

}
}

actualizarCabecera()

obtenerDatos("Opportunity", diaFotos)
obtenerDatos("Curiosity", diaFotos)
obtenerDatos("Spirit", diaFotos)