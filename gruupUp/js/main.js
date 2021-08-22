// collaps

const collapse = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
    let isCliked = false;
    
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (!isCliked) {
                isCliked = true;
                let currentHeight = this.offsetHeight;
                let addHeight = this.childNodes[1].offsetHeight;
                let newHeight = currentHeight + addHeight;

                if (this.offsetHeight == '92') {
                    btn.style.height = `${newHeight + 30}px`;
                    this.childNodes[1].classList.toggle('descr-active');
                    this.childNodes[0].childNodes[2].classList.toggle('arrow');
                } else {
                    btn.style.height = `92px`;
                    this.childNodes[1].classList.toggle('descr-active');
                    this.childNodes[0].childNodes[2].classList.toggle('arrow');
                } 
                setTimeout(() => collapse('.faq__block'), 500);
            }
        });
    });
};

collapse('.faq__block');

//menu

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobileMenu__active');
    hamburger.classList.toggle('hamburger-active');
});

//scroll up

const upBtn = document.querySelector('.pageup');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.style.opacity = 1;
  } else {
    upBtn.style.opacity = 0;
  }
}

// smooth pageUp
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    if (document.getElementById(blockID)) {
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      window.location.href = `.${blockID}`;
    }
  })
}

// horizontal scroll

const controller = new ScrollMagic.Controller();

  let horizontalSlide;

    if (window.innerWidth > 1200) {
      horizontalSlide = new TimelineMax()
      .to(".features__scroll", 1, {x: "-5280px",}); //Depends on the final width you want to scroll.
    } else if (window.innerWidth > 768 && window.innerWidth < 1201) {
      horizontalSlide = new TimelineMax()
      .to(".features__scroll", 1, {x: "-3300px",});
    } else if (window.innerWidth < 769) {
      document.querySelector('.features__tip').style.animationName = 'scrollUp';
      horizontalSlide = new TimelineMax()
      .to(".features__scroll", 1, {x: "-1815px",});
    }

    // Create scrollmagic scene to pin and link horzontal scroll animation
    new ScrollMagic.Scene({
        triggerElement: ".features", //Div that will trigger the animation.
        triggerHook: "onLeave", //The animation will start on leaving the .horizontal-scroll-container section.
        duration: "800%" //Scroll Duration, the amount of pixels you want to scroll to see the entire animation. 
    })
    .setPin(".features")
    .setTween(horizontalSlide)
    // .addIndicators() // add indicators (requires scrollmagic indicators plugin)
    .addTo(controller);