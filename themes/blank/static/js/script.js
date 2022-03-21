

let state = "go";
let myInterval;
let swiper;

  
  swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: 3,
    // spaceBetween: 30,
    mousewheel: false,
    grabCursor: false,
    loop: true,
    allowTouchMove:false,
    // autoplay: {
    //     reverseDirection:true,
    //   delay: 1500,
    //     disableOnInteraction: false,
    //   waitForTransition:true,
    // },
  });
  myInterval = setInterval(function () {
    swiper.slideNext(1000);
  }, 1000);
  console.log(swiper);


function gotreadmill() {
  if (state == "go") return;
  state = "go";
  clearInterval(myInterval);
  myInterval = setInterval(function () {
    swiper.slideNext(1000);
  }, 1000);
  document.getElementById("popupabout").classList.remove("__show");
}
function stoptreadmill() {
  if (state == "stop") return;
  state = "stop";
  clearInterval(myInterval);

  document.getElementById("popupabout").classList.add("__show");
}

console.log(swiper.params);
// Set the date we're counting down to
var countDownDate = new Date("May 15, 2022 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day-container").innerHTML = days;
  document.getElementById("hours-container").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day-container").innerHTML = "000";
    document.getElementById("hours-container").innerHTML = "00 :00:00";
  }
}, 1000);
