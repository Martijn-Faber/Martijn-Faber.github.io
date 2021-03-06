/* ////////////////////////////////////////////
                  custom cursor
   ////////////////////////////////////////////*/

window.addEventListener('mousemove', (e) => {
  document.querySelector(".cursor").style.top =  e.clientY + 'px';
  document.querySelector(".cursor").style.left =  e.clientX + 'px';
});

/* ////////////////////////////////////////////
              custom cursor hover
   ////////////////////////////////////////////*/

function socialHover() {
  let socialLinks = document.querySelectorAll(".socialItem");
  socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      document.querySelector(".cursor").classList.add('link-hover')
      link.classList.add('link-hover-item');
    });
    link.addEventListener('mouseleave', () => {
      document.querySelector(".cursor").classList.remove('link-hover')
      link.classList.remove('link-hover-item');
    });
  });
}

/* ////////////////////////////////////////////
        sets favicon based on user them
   ////////////////////////////////////////////*/

const mql = window.matchMedia("(prefers-color-scheme: dark)");

mql.addEventListener("change", () => {
  faviconTheme()
});

function faviconTheme() {
  lightSchemeIcon = document.querySelector('link#light-scheme-icon');
  darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

  if (mql.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}

/* ////////////////////////////////////////////
                  changes title
   ////////////////////////////////////////////*/

$(document).scroll(function () {
  $('section').each(function () {
      if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        title = document.getElementById('title')
        title.innerHTML = 'Martijn Portfolio | ' + $(this).attr('id');
      }
  });
});

/* ////////////////////////////////////////////
                  Splashscreen
   ////////////////////////////////////////////*/

$(function() {
  setTimeout(function() { $("#splash").fadeOut(500); }, 1000)
})


/* ////////////////////////////////////////////
              mouse-scroller opacity
   ////////////////////////////////////////////*/


$(document).ready(function(){ 
  $(window).scroll(function(){ 
      $('.mouse-scroller').css("opacity", 1- $(window).scrollTop() / 1000) 
  }) 
})


function type() {
  document.getElementById("type").innerHTML = " " + "Web Developer";
}

// const projects = [
//   {
//       name: "GiftIt",
//       description: "GiftIt it the way to say merry christmas online to friends or family. Check it out and share it!",
//       image: "./src/assets/html5-plain 1.svg",
//       github: "https://github.com/Martijn-Faber/GiftIt",
//       site: "https://martijndev.me/GiftIt/nl/christmas.html?name=Martijn"
//   },
//   {
//       name: "Tap",
//       description: "Tap is the way to easily share your socials with a Tap NFC tag. Want to help? <a href='mailto:tap@martijndev.me?cc=martijn@martijndev.me&subject=I want to help with Tap!' class='link'>Contact me</a>",
//       image: "./src/assets/projects/Tap_logo.svg",
//       github: "https://github.com/Martijn-Faber/Tap",
//       site: "#"
//   },
// ];



function data() {

  // const random = projects.length;
  // const randomKnuffel = projects[random]
  // console.log(randomKnuffel);

  const project1_image = document.getElementById('project1_image')
  const project1_title = document.getElementById('project1_title')
  const project1_paragraph = document.getElementById('project1_paragraph')
  const project1_github = document.getElementById('project1_github')
  const project1_site = document.getElementById('project1_site')

  const project2_image = document.getElementById('project2_image')
  const project2_title = document.getElementById('project2_title')
  const project2_paragraph = document.getElementById('project2_paragraph')
  const project2_site = document.getElementById('project2_site')
  const project2_github = document.getElementById('project2_github')

  project1_image.src = "./src/assets/html5-plain 1.svg"
  project1_title.textContent  = "GiftIt"
  project1_paragraph.textContent = "GiftIt it the way to say merry christmas online to friends or family. Check it out and share it!"
  project1_github.href = "https://github.com/Martijn-Faber/GiftIt"
  project1_site.href = "https://martijndev.me/GiftIt/nl/christmas.html?name=Martijn"

  project2_image.src= "./src/assets/projects/Tap_logo.svg"
  project2_title.textContent = "Tap"
  project2_paragraph.innerHTML = "Tap is the way to easily share your socials with a Tap NFC tag. Want to help? <a href='mailto:tap@martijndev.me?cc=martijn@martijndev.me&subject=I want to help with Tap!' class='link'>Contact me</a>"
  project2_github.href = "https://github.com/Martijn-Faber/Tap"
  project2_site.href = "#"
}


// var i = 0;
// var txt = '<h1>Lorem ipsum dummy text blabla.<br>\n</h1>';
// var speed = 50;

// function typeWriter1() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;  
//   } else {
//     document.getElementById("demo").innerHTML = "‏‏‎ ‎‎"
//     i = 0;

//   }
//   setTimeout(typeWriter1, speed);
// }

function onLoad() {
  socialHover(),
  faviconTheme(),
  type(),
  data();
}



