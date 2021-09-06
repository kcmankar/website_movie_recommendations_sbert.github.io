//import "/home/kanishka/NN_dir/data_set/RecommendationSys/full-card-click-main/recSysUI/style.css";

// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, title, color, age, image and alt description.
let htmlCode = ``;
let data1 = {
  "0": "Kansas Saloon Smashers",
  "1": "Love by the Light of the Moon",
  "2": "The Martyred Presidents",
  "3": "Terrible Teddy, the Grizzly King",
  "4": "Jack and the Beanstalk",
  "5": "Alice in Wonderland",
  "6": "The Great Train Robbery",
  "7": "The Suburbanite",
  "8": "The Little Train Robbery",
  "9": "The Night Before Christmas",
  "10": "Dream of a Rarebit Fiend",
  "11": "From Leadville to Aspen: A Hold-Up in the Rockies",
  "12": "Kathleen Mavourneen",
  "13": "Daniel Boone",
  "14": "How Brown Saw the Baseball Game",
  "15": "Laughing Gas",
  "16": "The Adventures of Dollie",
  "17": "The Black Viper",
  "18": "A Calamitous Elopement",
  "19": "The Call of the Wild"
};
//Load initial
Object.keys(data1).forEach(function(k){
    //console.log(k + ' - ' + data1[k]);

      movie = data1[k];
      htmlCode = htmlCode +
          `
          <article>
            <div>
             <div class="card card-3">
            <div class="card__title">
            <h3>Title: ${movie}</h3>
            </div>
            <div>
            <button type="submit" id="Btn"+${k} value=${k} onclick="recommend(this.value)" class="button-33" role="button">Similar to this</button>
            </div>
            </div>
            </div>
          </article>
        `;

});
const ARRAY_LENGTH = 20;
const arr1 = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.floor((Math.random() * 34886) + 1));
var data2;
fetch('./MovieIndexDict.json')
  .then(response => response.json())
  .then(data => data2 = data)
  .catch(error => console.log(error));
var data3;
fetch('./MovieRecomDict.json')
  .then(response => response.json())
  .then(data => data3 = data)
  .catch(error => console.log(error));

function Randomchange(value){
  htmlCode = ``
  const ARRAY_LENGTH = 20;
  const arr1 = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.floor((Math.random() * 34886) + 1));
  console.log(value);
  data1 = {};
  arr1.forEach((item,i) => {
    data1[item] = data2[item];

});
Object.keys(data1).forEach(function(k){
    //console.log(k + ' - ' + data1[k]);

      movie = data1[k];
      htmlCode = htmlCode +
      `
      <article>
        <div>
         <div class="card card-3">
        <div class="card__title">
        <h3>Title: ${movie}</h3>
        </div>
        <div>
        <button type="submit" id="Btn"+${k} value=${k} onclick="recommend(this.value)" class="button-33" role="button">Similar to this</button>
        </div>
        </div>
        </div>
      </article>
    `;

});
const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;
}
//recommends after clicking similar to this
function recommend(value){
  mv = data2[value];
  console.log(value);
  let recoms = ``
  data3[value].forEach((item, i) => {
    recoms= recoms+data2[item]+'<br>';
  });
  //console.log(recoms);
  ttle = "Recommendations similar to: "+mv;
  swal.fire(ttle,recoms);
}

//serach key by value
function getKeyByValue(object, value) {
  //console.log(value);
  let rr = Object.keys(object).find(key => object[key].toLowerCase() === value.toLowerCase());
  return rr;
}
function SearchFunction(){
  var x = document.getElementById("myText");
  //console.log(x);
  let res = getKeyByValue(data2,x['value']);
  recommend(res);

}
// currently, we have out html code showing in the browser console, we need to send it to our html file and render it there.
// here we define out the cards we want to be rendered to the DOM.

// ".all-elephant-cards" is the class of the empty div back in our index.html. We want to render the cards from our JS inside that div.

// we are simply saying, "let elephantCards be = to that div", to target that div, we reference the class we gave to it.
const elephantCards = document.querySelector(".all-elephant-cards");

// here's how we do the render;
// since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
elephantCards.innerHTML = htmlCode;
