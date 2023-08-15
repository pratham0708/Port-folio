/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */

/* --------------- Reveal Animation --------------- */

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */


const header = document.querySelector("header");

function StickyNavBar(){
    header.classList.toggle("scrolled",window.pageYOffset>0);
}
window.addEventListener("scroll",StickyNavBar);


let sr = ScrollReveal({
    duration:2500,
    distance:"60px",
});
sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-img",{ origin:"top", delay:600});
sr.reveal(".package",{ origin:"left", delay:600});
sr.reveal(".person",{ origin:"left", delay:600});
sr.reveal(".about-info",{ origin:"right", delay:500});
sr.reveal(".skills-box",{ origin:"left", delay:600});
sr.reveal(".person1",{ origin:"bottom", delay:900});
sr.reveal(".cards",{ origin:"right", delay:700});
sr.reveal(".contact-info",{ origin:"left", delay:700});
sr.reveal(".contact-form",{ origin:"right", delay:700});

sr.reveal(".portfolio",{ origin:"bottom", delay:600});
sr.reveal(".grid",{ origin:"top", delay:650});
sr.reveal(".filter",{ origin:"left", delay:600});


const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");


function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }

function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 500;
        const increment = Math.ceil(maxNum / speed);
  
        if (currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 1);
        } else {
          numb.innerText = maxNum;
        }
      };
  
      setTimeout(updateCount, 400);
    });
  }
  
  var mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  
  window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
        progress.setAttribute('data-text', `${count}%`);
        if (count >= value) {
          clearInterval(progressAnimation);
        }
      }, 15);
    });
  };
    
  const toggle_btn = document.querySelector(".toggle-btn");
   
function changeTheme(){
  if(!document.body.classList.contains("dark")){
    document.body.classList.add("dark");
    toggle_btn.classList.replace("uil-moon","uil-sun");
  }
  else{
    document.body.classList.remove("dark");
    toggle_btn.classList.replace("uil-sun","uil-moon");

  }
}
  toggle_btn.addEventListener("click" ,() => {
    changeTheme();

  });

  
  