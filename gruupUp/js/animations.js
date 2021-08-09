gsap.registerPlugin(ScrollTrigger);

const titles = gsap.utils.toArray(".features__block__title");
const firstTitle = gsap.utils.toArray(".features__block__title-first");
const lastTitle = gsap.utils.toArray('.features__block__title-last');

const subtitles = gsap.utils.toArray(".features__block__subtitle");
const fisrtSub = gsap.utils.toArray(".features__block__subtitle-first");
const lastSub = gsap.utils.toArray(".features__block__subtitle-last");

const descr = gsap.utils.toArray(".features__block__descr");
const firstDescr = gsap.utils.toArray(".features__block__descr-first");
const lastDescr = gsap.utils.toArray(".features__block__descr-last");

const tabs = gsap.utils.toArray(".features__block__tabs__tab");
const firstTab = gsap.utils.toArray(".features__block__tabs__tab-first");
const lastTab = gsap.utils.toArray(".features__block__tabs__tab-last");

const numbers = gsap.utils.toArray(".features__counter__first");
const firstNumber = gsap.utils.toArray(".features__counter__first-first");
const lastNumber = gsap.utils.toArray(".features__counter__first-last");

const phones = gsap.utils.toArray(".features__phone");
const firstPhone = gsap.utils.toArray(".features__phone-first");
const lastPhone = gsap.utils.toArray(".features__phone-last");

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
});

const titlesLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=200%",
    pin: true
  }
});

const subLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=200%",
  }
});

const descrLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=200%",
  }
});

const tabLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=210%",
  }
});

const numbersLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=200%",
  }
});

const phonesLine = gsap.timeline({
  scrollTrigger: {
    id: "CONTAINER",
    trigger: ".features",
    scrub: true,
    start: "center center",
    end: "+=200%",
  }
});

let stagger = 1 ;

animationFromRight(titlesLine, titles, firstTitle, lastTitle);
animationFromRight(subLine, subtitles, fisrtSub, lastSub);
animationFromRight(descrLine, descr, firstDescr, lastDescr);

animationFromTop(numbersLine, numbers, firstNumber, lastNumber);

animationOpacity(phonesLine, phones, firstPhone, lastPhone);

function animationFromRight(timeline, selector, firstSelector, lastSelector) {
  timeline
    .to(firstSelector, {
      opacity: 0,
      delay: 1,
    });

  timeline
    .from(selector, {
      opacity: 0,
      stagger:stagger,
      x: 250, 
    })
    .to(selector, {
      opacity: 0,
      delay: 1.5, 
      stagger:stagger,
    }, stagger)

  timeline
    .from(lastSelector, {
      opacity: 0, 
      delay: 1,
      x: 250, 
    }, 3.5)
}

function animationFromTop(timeline, selector, firstSelector, lastSelector) {
  timeline
    .to(firstSelector, {
      opacity: 0,
      delay: 1,
    });

  timeline
    .from(selector, {
      opacity: 0,
      stagger:stagger,
      y: -30, 
    })
    .to(selector, {
      opacity: 0,
      delay: 1.5, 
      stagger:stagger,
    }, stagger);

  timeline
    .from(lastSelector, {
      opacity: 0, 
      delay: 1,
      y: -30, 
    }, 3.5)
}

function animationOpacity(timeline, selector, firstSelector, lastSelector) {
  timeline
    .to(firstSelector, {
      opacity: 0,
      delay: 1,
    });

  timeline
    .from(selector, {
      opacity: 0,
      stagger:stagger,
    })
    .to(selector, {
      opacity: 0,
      delay: 1.5, 
      stagger:stagger,
    }, stagger);

  timeline
    .from(lastSelector, {
      opacity: 0, 
      delay: 1,
    }, 3.5)
}

tabLine
  .to(firstTab, {
    delay: 1,
    className: 'features__block__tabs__tab',
  });

tabLine
  .from(tabs, {
    className: 'features__block__tabs__tab',
    stagger: stagger,
  })
  .to(tabs, {
    className: 'features__block__tabs__tab',
    stagger: stagger,
    delay: -0.5,
  }, 2 + stagger);

tabLine
  .to(lastTab, {
    className: 'features__block__tabs__tab-last active',
  })


// popups

const popLine1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".process",
    start: "top top",
    end: 'top top', 
    toggleActions: "restart none none reverse",
  }
});

popLine1
  .from('.process__img__popup1', {
    duration: 3,
    x: 150,
    y: 150,
    ease: 'elastic.out(1, 0.5)',
    opacity: 0,
  })
  .from('.process__img__popup2', {
    duration: 3,
    x: -150,
    y: -150,
    ease: 'elastic.out(1, 0.75)',
    opacity: 0,
  }, 0);

const popLine2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".process__block",
    start: "top top",
    end: 'top top', 
    toggleActions: "restart none none reverse",
  }
});

popLine2
  .from('.process__img__popup3', {
    duration: 3,
    x: -150,
    y: 150,
    ease: 'elastic.out(1, 0.5)',
    opacity: 0,
  })
  .from('.process__img__popup4', {
    duration: 3,
    x: 150,
    y: -150,
    ease: 'elastic.out(1, 0.75)',
    opacity: 0,
  }, 0.3);

const popLine3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#process2",
    start: "top top",
    end: 'top top', 
    toggleActions: "restart none none reverse",
  }
});

popLine3
  .from('.process__img__popup5', {
    duration: 3,
    x: -150,
    y: 150,
    ease: 'elastic.out(1, 0.5)',
    opacity: 0,
  })
  .from('.process__img__popup6', {
    duration: 3,
    x: 150,
    y: -150,
    ease: 'elastic.out(1, 0.75)',
    opacity: 0,
  }, 0.3);

// app

const appLine = gsap.timeline({
  scrollTrigger: {
    trigger: "#process3",
    start: "top top",
    end: 'top top', 
    toggleActions: "restart none none reverse",
  }
});

appLine 
  .from('.app', {
    scale: 0,
    duration: 2,
    ease: 'elastic.out(1, 1)',
  })
