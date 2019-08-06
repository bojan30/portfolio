const logoOutline = document.querySelector(".cls-1");
const nav = document.querySelector('#nav');
const launcherUp = document.querySelector('.launcher');
const launcherDown = document.querySelector('.content a');

//load particles

particlesJS.load('particles-js', 'particles.json');

//parallax effect
function parallax(target, amount) {
  let scroll = window.pageYOffset;
  let el = document.querySelector(target);
  el.style.backgroundPositionY = (amount - 1) * scroll + "px";
}

window.addEventListener("scroll", () => {
  parallax("#home", 0.7);
});

//add active class to nav

window.addEventListener('scroll', ()=>{
  let scrollAmount = window.pageYOffset;
  let homeHeight = document.querySelector('#home').scrollHeight;
  if(scrollAmount >= homeHeight - nav.scrollHeight){
    nav.classList.add('fixed');
  }
  else{
    nav.classList.remove('fixed');
  }
})

function removeActiveClass(links){
  links.forEach(link=>{
    link.classList.remove('active');
  })
}

//smooth scroll and active class change on scroll or on click
let links = document.querySelectorAll('.menu-link');
window.addEventListener('scroll', ()=>{
  links.forEach(link=>{
    //target section
    let scrollAmount = window.pageYOffset;
    let targetSection = document.querySelector(link.getAttribute('href'));
    let top = targetSection.offsetTop;
    let bottom = top + targetSection.scrollHeight;
    if (top - scrollAmount <= 15 && bottom - scrollAmount >= 15) {
      removeActiveClass(links);
      link.classList.add('active');
    }
    else {
      link.classList.remove('active');
    }
  })
})

//smooth scroll behavior

links.forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    let target = link.getAttribute('href');
    scroll(target, 800);
  });
})

function scroll(target, duration) {
  //animation target(destination)
  const el = document.querySelector(target);
  //scroll amount
  const scrollAmount = window.pageYOffset;
  //distance from the top
  const position = el.getBoundingClientRect().top + scrollAmount;
  //animation distance
  const animationDistance = position - scrollAmount;
  let startTime = null;
  function animate(time) {
    if (startTime === null) startTime = time;
    let timeElapsed = time - startTime;
    let run = easing(timeElapsed, scrollAmount, animationDistance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }
  //accelerate half way, than decelerate
  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animate);
}

//scroll up

launcherUp.addEventListener('click', (e)=>{
  e.preventDefault();
  scroll('#home', 800);
})

//scroll down

launcherDown.addEventListener('click', (e)=>{
  e.preventDefault();
  scroll('#about', 800);
})

