// fill country of origin
let countryOfOriginList = [ 
    'Dutch', 'Polish', 'Spanish', 'English', 'Japanese', 'Italian', 
    'Arabic', 'Chinese', 'French', 'German', 'Greek', 'Korean', 
    'Portuguese', 'Czech', 'Vietnamese', 'Scottish', 'Irish', 
    'Russian'];

countryOfOriginList = countryOfOriginList.sort()

let startLetterList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

let countryOfOriginEl = document.getElementById('country-of-origin-value');
let startLetterEl = document.getElementById('start-letter-value');
let slider = document.getElementById("topk-slider");
let output = document.getElementById("topk-value");
let generateBtn = document.getElementById('generate-name-btn');
let outputLSTM = document.getElementById('output-lstm');

function fillDropdown(element, filling){
    for(let i = 0; i < filling.length; i++) {
        let opt = filling[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        element.appendChild(el);
    }
}

fillDropdown(countryOfOriginEl, countryOfOriginList);
fillDropdown(startLetterEl, startLetterList);


output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

generateBtn.onclick = function(){
    // call api
    fetch("https://ravindrawiguna-name-generator-vanilla.hf.space/query", {
        method: "POST",
        body: JSON.stringify({
          language: countryOfOriginEl.value,
          start_letter: startLetterEl.value,
          take_k_best: output.innerHTML,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => outputLSTM.innerHTML=json['generated']); 
}

