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
            if (("NAVCAM" === element.camera.name || "FHAZ" === element.camera.name || "PANCAM" === element.camera.name) && i < 10) {
                let imgSrc = element.img_src;
                imgBuffer.push(imgSrc);
                console.log(imgSrc);
                i++;
            }
        });
    } catch (error) {
        console.error('Error recopilando foto de:', name);
        imgBuffer.push('rover.jpg')
    } finally {
        llenarCarrusel('carousel' + name, imgBuffer)
        console.log(imgBuffer)
    }
}

function llenarCarrusel(carruselId, imgBuffer) {
    let carrusel = document.getElementById(carruselId);

    let innerCarousel = carrusel.getElementsByClassName('carousel-inner')[0];
    innerCarousel.innerHTML = '';

    let indicatorsContainer = carrusel.getElementsByClassName('carousel-indicators')[0];
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = ''; 
    } else {
        indicatorsContainer = document.createElement('div');
        indicatorsContainer.classList.add('carousel-indicators');
        carrusel.appendChild(indicatorsContainer);
    }

    imgBuffer.forEach((imgSrc, index) => {
        let carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item d-flex justify-content-center align-items-center';
        let img = document.createElement('img');

        img.setAttribute('src', imgSrc);
        img.setAttribute('alt', 'Imagen del rover');
        img.className = 'd-block w-75 rounded-pill mx-auto d-block';
        img.style.objectFit = 'cover';
        img.setAttribute('width', '800');
        img.setAttribute('height', '400');
        img.setAttribute('role', 'img');

        if (imgSrc === 'rover.jpg') {
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
            carouselItem.classList.add('active');
        }

        carouselItem.appendChild(img);
        innerCarousel.appendChild(carouselItem);


        let indicator = document.createElement('button');
        indicator.setAttribute('type', 'button');
        indicator.setAttribute('data-bs-target', `#${carruselId}`);
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        indicatorsContainer.appendChild(indicator);
    });
}




function generarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 1001)
    const numeroFormateado = numeroAleatorio.toString().padStart(4, '0')
    return numeroFormateado;
}

function actualizarCabecera(day) {

    const cabeceraElement = document.getElementById('cabeceraDiaFotos')
    if (cabeceraElement) {
        cabeceraElement.textContent = `${day}`

    }
}

actualizarCabecera(diaFotos)

async function cargarFotos(day) {
    await obtenerDatos("Opportunity", day);
    await obtenerDatos("Curiosity", day);
    await obtenerDatos("Spirit", day);
}

cargarFotos().then(() => {
    console.log("Todos los datos y fotos han sido cargados");
}).catch((error) => {
    console.error("Error al cargar datos y fotos:", error);
})

cargarFotos(diaFotos)