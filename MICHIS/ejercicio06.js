const url = "https://catfact.ninja/facts?page="; // Endpoint
const ID_CONTENEDOR_Card = document.getElementById("Card")
const url2= "https://api.thecatapi.com/v1/images/search"

async function obtenerDatos() {
    const random = Math.floor(Math.random() * 33) + 1
    const response = await fetch(url+random);
    const data = await response.json();
    for (const element of data.data) {
        const urlImg = await obtenerImg();
        insert(element.fact, urlImg);
    }
}

async function obtenerImg(){
    const response = await fetch(url2);
    const data = await response.json();
    return data[0].url;
}
    

function insert(fact,urlImg){

    const cardChild = document.createElement("div")
    const img= document.createElement("img")
    img.src=urlImg
    const textNode = document.createTextNode(fact);
    cardChild.appendChild(img);
    cardChild.appendChild(textNode)
    ID_CONTENEDOR_Card.appendChild(cardChild)
    
}
        
        



obtenerDatos()
