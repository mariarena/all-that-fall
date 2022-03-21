new SimpleLightbox({ elements: ".video-lightbox" });


// the listener for the helper arrow that disappears after scrolling
if (document.querySelector(".left-column") && document.querySelector(".right-column")) {
  document
    .querySelector(".left-column")
    .addEventListener("scroll", handleHelperArrow);
  document
    .querySelector(".left-column")
    .addEventListener("scroll", handleHeaderForm);
  document
    .querySelector(".right-column")
    .addEventListener("scroll", handleHelperArrow);
    document
    .querySelector(".right-column")
    .addEventListener("scroll", handleHeaderForm);
}

function handleHelperArrow(e) {
  window.setTimeout(function () {
    e.target.querySelector(".helper-arrow").classList.add("__hidden");
  }, 500);
  window.setTimeout(function () {
    e.target.querySelector(".helper-arrow").remove();
  }, 800);

  e.target.removeEventListener("scroll", handleHelperArrow);
}


var lastScrollTop = 0;
function handleHeaderForm(e) {


   var st = e.target.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      document.querySelector(".header_form").classList.add("__hide")
   } else {
    document.querySelector(".header_form").classList.remove("__hide")
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  var st = window.pageYOffset ; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop){
    document.querySelector(".header_form").classList.add("__hide")
  } else {
     document.querySelector(".header_form").classList.remove("__hide")
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

function handleHeaderFormTitle() {
  if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
  ) {
  document.querySelector(".header_form").classList.toggle("__show")
  }
  else {
    document.querySelector(".header_form").classList.remove("__hide")
  }
  
}

let options = {
  root: document.querySelector(".left-column"),
  rootMargin: "0px",
  threshold: 1.0,
};

function startObserver() {
  let nodesleft = document.querySelectorAll(".left-column .default-box");
  let nodesright = document.querySelectorAll(".right-column .default-box");

  observer = new IntersectionObserver((target) => {
    target.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("__intersect");
      } else {
        el.target.classList.remove("__intersect");
      }
    });
  });

  nodesleft.forEach((el) => {
    observer.observe(el);
  });

  nodesright.forEach((el) => {
    observer.observe(el);
  });
}
// note that you have to uncomment the lines in the style.css for this to work properly
startObserver();

wrapperLeft = document.querySelector(".left-column");
wrapperRight = document.querySelector(".right-column");
test = document.getElementById("test");

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // true for mobile device
} else {
  // false for not mobile device
  //wrapperLeft.addEventListener("scroll", scrollerLeft, false);
  //wrapperRight.addEventListener("scroll", scrollerRight, false);
}

function scrollerLeft() {
  if (
    wrapperLeft.scrollTop + wrapperLeft.offsetHeight ==
    wrapperLeft.scrollHeight
  ) {
    content = wrapperLeft.querySelector(
      "." + wrapperLeft.classList[0] + ">div:first-child"
    );
    wrapperLeft.appendChild(content);
  }
}

function scrollerRight() {
  if (
    wrapperRight.scrollTop + wrapperRight.offsetHeight ==
    wrapperRight.scrollHeight
  ) {
    content = wrapperRight.querySelector(
      "." + wrapperRight.classList[0] + ">div:first-child"
    );
    wrapperRight.appendChild(content);
  }
}

function map(value, x1, y1, x2, y2) {
  return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
}

function resizeText() {
  // resize testimonianze dynamically
  document.querySelectorAll(".testimonianze-excerpt").forEach((el) => {
    if (el.innerText.length >= 220) {
      el.style.fontSize = ".9rem";
    }
    //el.style.fontSize = map(el.innerText.length, 100, 400, 1.5, 1)+"rem"
  });

  // resize testimonianze dynamically
  document.querySelectorAll(".notizie-excerpt").forEach((el) => {
    //if((navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && window.screen.width < window.screen.height){
    if (
      window.screen.width <= 1024 &&
      window.screen.width < window.screen.height
    ) {
      el.style.fontSize = map(el.innerText.length, 250, 80, 3, 5) + "vw";
    } else {
      el.style.fontSize = map(el.innerText.length, 250, 80, 0.7, 1.5) + "rem";
    }
  });

  // change forced breaklin trough special char in CMS "-n"
  document.querySelectorAll(".default-title").forEach((el) => {
    //if((navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && window.screen.width < window.screen.height){
    if (
      window.screen.width <= 1024 &&
      window.screen.width < window.screen.height
    ) {
      // true for mobile device
      //el.style.fontSize = map(el.innerText.length, 140, 20, 6, 9) + "vw"
      el.style.fontSize = map(el.innerText.length, 140, 20, 20, 32) + "px";
    } else {
      el.style.fontSize = map(el.innerText.length, 140, 20, 1.8, 2.5) + "vw";
    }
    el.style.width = map(el.innerText.length, 180, 20, 100, 90) + "%";
    el.innerHTML = el.innerHTML.replaceAll("-n", "<br>");
  });
}
resizeText();

window.onresize = function () {
  resizeText();
};

/* Single template find 2021 2023 and replace with 2021/2023 */
if (document.querySelector(".correlated")) {
  document.querySelectorAll(".correlated").forEach((el) => {
    if (el.innerText.includes("2021 2023")) {
      el.innerText = el.innerText.replace("2021 2023", "2021/2023");
    }
  });
}