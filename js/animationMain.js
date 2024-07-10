/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/js/animation-main.js ***!
  \**********************************/
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  if (document.querySelector("[data-animate='first-title']")) {
    gsap.to("[data-animate='first-title']", {
      backgroundSize: "100% 100%",
      duration: 1.5,
      delay: 0.2,
      ease: "none"
    });
  }
  if (document.querySelector("[data-animate='title']")) {
    gsap.utils.toArray('[data-animate="title"]').forEach(function (h2) {
      gsap.to(h2, {
        backgroundSize: "100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: h2,
          scrub: true,
          start: "150% bottom",
          end: "0 center"
        }
      });
    });
  }
  if (document.querySelector("[data-animate='subtitle']")) {
    gsap.utils.toArray('[data-animate="subtitle"]').forEach(function (el) {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "100px bottom"
        }
      });
    });
  }
  if (document.querySelector("[data-animate='card-up']")) {
    gsap.fromTo("[data-animate='card-up']", {
      opacity: -1,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "[data-animate='card-up']",
        start: "50px bottom"
      }
    });
  }
  if (document.querySelector("[data-animate='second-batch-card-up']")) {
    gsap.fromTo("[data-animate='second-batch-card-up']", {
      opacity: -1,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "[data-animate='second-batch-card-up']",
        start: "50px bottom"
      }
    });
  }
  if (document.querySelector(".support__wrapper__card")) {
    gsap.to(".support__wrapper__card", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".support__wrapper",
        start: "15% bottom"
      }
    });
  }
  if (document.querySelector("[data-animate='slide-right-left']")) {
    gsap.utils.toArray("[data-animate='slide-right-left']").forEach(function (el) {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1,0.75)",
        scrollTrigger: {
          trigger: el,
          start: "15% bottom"
        }
      });
    });
  }
  if (document.querySelector("[data-animate='slide-bottom-up']")) {
    gsap.utils.toArray("[data-animate='slide-bottom-up']").forEach(function (el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1,0.75)",
        scrollTrigger: {
          trigger: el,
          start: "10% bottom"
        }
      });
    });
  }
});
/******/ })()
;
//# sourceMappingURL=animationMain.js.map