/*
1b63db6fae08eba44d9e5d85ca1e993ae018694628dd364294db6b51cf64922db185529a1

*/

let ensayo = document.getElementById("ensayar")

fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8dd364294db6b51cf64922db185529a1&hash=c8d62340c8e5bfc96b3606a09a4842e6")
.then(response => response.json())
.then(respuesta => {
    console.log(respuesta)
    let array = respuesta.data.results
    array.forEach(element => {
     let div = document.createElement("div")
     div.innerHTML = `
     <p>${element.name}</p>
     <img src="${element.name}></img>
     `

     ensayo.appendChild(div)
    })
})
    

