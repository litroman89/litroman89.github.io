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
    console.log(blockID);
    
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