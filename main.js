//elements
let nav = document.getElementById("nav");
let hero = document.querySelector(".hero");
//load the particles
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});

//parallax effect
function parallax(target, amount) {
  let scroll = window.pageYOffset;
  let el = document.querySelector(target);
  el.style.backgroundPositionY = (amount - 1) * scroll + "px";
}

window.addEventListener("scroll", () => {
  parallax("#header", 0.7);
});

//nav scroll behaviour

window.addEventListener("scroll", ()=>{
  //get the amount of scrolling
  let scrollAmount = window.pageYOffset;
  let minScrollAmount = 100;
  if(scrollAmount > minScrollAmount){
    //add white background class
    nav.classList.add("white");
    hero.classList.add("margin-top");
  }
  else if(scrollAmount === 0){
    nav.classList.remove("white");
    hero.classList.remove("margin-top");
  }
})