
// accordion ------>

// const accordion = document.getElementsByClassName('contentbx');

// for (let i = 0; i < accordion.length; i++){
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle('active')
//     })
// }  did'nt work lol





let toggles = document.getElementsByClassName('toggle_1');
let contentDiv = document.getElementsByClassName('content_1');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#FF5A1F";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}










// Hambuger ------>

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');




    hamburger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('navslide-active');

        //Animate navLinks
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
            }
        });
        });

    }

navSlide();




// plan switch ------->

const planSwitch = document.querySelector('.plans-switch');
const basicPrice = document.querySelector('.basic-price');
const proPrice = document.querySelector('.pro-price');
const businessPrice = document.querySelector('.business-price');
const planDuration = document.querySelectorAll('.plan-duration');


planSwitch.addEventListener("change", () => {
    if (planSwitch.checked) {
        basicPrice.innerText = "249";
        proPrice.innerText = "699";
        businessPrice.innerText = "999";
        planDuration.forEach(p => {
            p.innerText = "/ year"
        })
    } else {
        basicPrice.innerText = "49";
        proPrice.innerText = "99";
        businessPrice.innerText = "128";
        planDuration.forEach(p => {
            p.innerText = "/ month"
        })
    }
})





// carousel


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




