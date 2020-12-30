$(document).ready(function(){

    $(window).scroll(function(){
    // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.top').addClass("sticky");
        }else{
            $('.top').removeClass("sticky");
        }
    });
});



$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
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

