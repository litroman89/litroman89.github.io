/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".carousel__inner__slide");
  var slideDelay = 4;
  var slideDuration = 1;
  var slideNumber = 0;
  var initialCount = 0;
  var timer = gsap.delayedCall(slideDelay, animate);
  var mainTl = gsap.timeline();
  var progressTl = gsap.timeline();

  //initial progress animation
  updateProgress();
  ++initialCount;
  function animate() {
    timer.restart(true);
    var prevSlideNumber = slideNumber;
    slideNumber = (slideNumber + 1) % slides.length;
    updateProgress(prevSlideNumber);
    if (slideNumber === 0) {
      mainTl.set(".slide-0", {
        zIndex: 2
      });
    }
    if (slideNumber === 1) {
      mainTl.set(".slide-0", {
        zIndex: 1
      });
    }
    mainTl.to(".text-".concat(prevSlideNumber), {
      opacity: 0,
      duration: 1,
      zIndex: 10,
      ease: "power4.inOut"
    });
    mainTl.fromTo(".slide-".concat(slideNumber), {
      left: "100%"
    }, {
      duration: slideDuration,
      left: 0,
      ease: "power4.inOut",
      onComplete: function onComplete() {
        mainTl.set(".slide-".concat(prevSlideNumber), {
          left: "100%"
        });
      }
    }, "<");
    mainTl.to(".text-".concat(slideNumber), {
      opacity: 1,
      duration: 1,
      zIndex: 15,
      ease: "power4.inOut"
    });
  }
  function updateProgress(prevSlide) {
    if (slideNumber === 0 && initialCount > 0) {
      progressTl.set(".progress", {
        width: 0
      });
      gsap.to(".btnNumber-".concat(Math.floor((slides.length - 1) / 2), ", .btnText-").concat(Math.floor((slides.length - 1) / 2)), {
        opacity: 0.5
      });
      gsap.to(".btnNumber-0, .btnText-0", {
        opacity: 1
      });
    } else {
      gsap.to(".btnNumber-".concat(Math.floor(prevSlide / 2), ", .btnText-").concat(Math.floor(prevSlide / 2)), {
        opacity: 0.5
      });
      gsap.to(".btnNumber-".concat(Math.floor(slideNumber / 2), ", .btnText-").concat(Math.floor(slideNumber / 2)), {
        opacity: 1
      });
    }
    var progress = (slideNumber + 1) / slides.length * 100;
    progressTl.to(".progress", {
      width: progress + "%",
      ease: "none",
      duration: slideDelay - 1 + slideDuration
    });
  }
});
/******/ })()
;
//# sourceMappingURL=carousel.js.map