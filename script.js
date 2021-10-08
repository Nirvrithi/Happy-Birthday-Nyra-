function redBackground(){
  document.getElementById('backgroundChanger').style.backgroundColor = 'yellow';
}

function greenBackground(){
  document.getElementById('backgroundChanger').style.backgroundColor = 'green';
}

function blueBackground(){
  document.getElementById('backgroundChanger').style.backgroundColor = '#33FF90';
}

function lightblueBackground(){
  document.getElementById('backgroundChanger').style.backgroundColor = '#ab3dff';
}

function pinkBackground(){
  document.getElementById('backgroundChanger').style.backgroundColor = 'pink';
}


//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".Nyra-Pic");
 
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  console.log("entered")
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
 
//<link href="https://fonts.googleapis.com/css?family=Bitter|Cabin|Montserrat|Nunito|Poppins|Roboto&display=swap" rel="stylesheet">
