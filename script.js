

window.addEventListener('mousemove', (e) => {
  document.querySelector(".cursor").style.top =  e.pageY + 'px';
  document.querySelector(".cursor").style.left =  e.pageX + 'px';
});


// const splash = document.querySelector('splash');

// document.addEventListener('DOMContentLoaded', (e)=>{
//   setTimeout(()=>{
//     splash.classList.add('display-none')
//   }, 2000);
// })


// $(document).ready(function(){

//     $(window).scroll(function(){
//     // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.top').addClass("sticky");
//         }else{
//             $('.top').removeClass("sticky");
//         }
//     });
// });


function onLoad() {
  // console.log('onPageLoaded');
  let socialLinks = document.querySelectorAll(".socialItem");
  // console.log(socialLinks)
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
  
  faviconTheme();
  // type();

}

// let matcher = window.matchMedia('(prefers-color-scheme: dark)');
// matcher.addListener(onUpdate);
const mql = window.matchMedia("(prefers-color-scheme: dark)");

mql.addEventListener("change", () => {
  // console.log("Color theme changed!!!")
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


$(document).scroll(function () {
  $('section').each(function () {
      if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        title = document.getElementById('title')
        title.innerHTML = 'Martijn Portfolio | ' + $(this).attr('id');
      }
  });
});


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





//  window.onload = function() {
//   typeWriter1()

// //   var element = document.getElementById('typewrite');
// }


// //   toRotate  = ['<h1> hallo ','regel twee'];

// //   var period = element.getAttribute('data-period');
// //   if (toRotate) {
// //     new TxtType(element, toRotate, period);
// //   }

// //       // INJECT CSS
// //   var css = document.createElement("style");
// //   css.type = "text/css";
// //   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
// //   document.body.appendChild(css);
// // };

