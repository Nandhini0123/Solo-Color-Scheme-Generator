const seedColor = document.getElementById("seed-color");
const colorScheme = document.getElementById("color-scheme");
const getBtn = document.getElementById("get-btn");

let html= "";
// let colorChoosen = ""; 

// events after clicking "GET COLOR SCHEME" button
getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    html = "";
    getHexValue();
});

// getting the choosen color's hex value
// seedColor.addEventListener("change", choosingColors);

// function choosingColors(e) {
//     colorChoosen = e.target.value.replace("#", "");
//     console.log("seed new", colorChoosen)
// }

// fetching the colors from colorapi.com

function getHexValue(){
    const colorChoosen = seedColor.value.replace("#", "");
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorChoosen}&mode=${colorScheme.value}`, {method:"GET", headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(data => {
             let hexValues = data.colors;
             for (let i = 0; i < hexValues.length; i++){
               html += `<div>
               <div class="color-box" style = "background-color: ${hexValues[i].hex.value}" ></div>
               <p class="color-id">${hexValues[i].hex.value}</p>
               </div>`
    
             }
             document.getElementById("blog-list").innerHTML = html; 
        })
}

