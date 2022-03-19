let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let container = document.getElementsByClassName("quote");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
let randomColor = () =>  {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
  document.container.style.color = bgColor;
  }

window.addEventListener("load", () => {    
  getQuote();
  randomColor()    
});

btn.addEventListener("click",() => {    
  getQuote();
  randomColor()    
});


