//code to prevent bugs with animation when changing tabs during animation
window.addEventListener('blur', function () {
    TweenLite.lagSmoothing(0);
}, false);


window.addEventListener('focus', function () {
    TweenLite.lagSmoothing(1000, 16);
}, false);

//buttons
const left = document.querySelector('.btn_left');
const right = document.querySelector('.btn_right');

//wrapper for all slides
const slider = document.querySelector('.features__scroll');

//Amount of slides to count border for animation
const slidesAmount = document.querySelectorAll('.features__scroll__flex').length;

//borders for animation
let border1;
let border2;

//defining borders depending on slides amount
if (slidesAmount === 1) {
    border1 = 1092 - (slidesAmount * 1092);
    border2 = 0;
} else {
    border1 = 1092 - (slidesAmount * 1092);
    border2 = 1092;
}

function disableBtns() {
    // disabling buttons until animation is finished
    left.style.pointerEvents = 'none';
    right.style.pointerEvents = 'none';

    //enabling buttons after animation is finished 
    setTimeout(() => {
        left.style.pointerEvents = 'auto';
        right.style.pointerEvents = 'auto';
    }, 1000);
}

//Position each slide in a row
TweenLite.set('.features__scroll__flex', {
    x: function(i) {
        return i * 1092;
    }
});

// function to move pictures to the left    
function moveLeft() {
    //disable and enable buttons
    disableBtns();
    //animation using TweenLite
    TweenLite.to('.features__scroll__flex', 1, {
        x: '+=-1092',
        ease: Power2.easeOut,
        modifiers: {
            x: function(x) {
                return wrap(x, border1, border2)
             }
        }
    });
}

//function to move pictures to the right
function moveRight() {
    //disable and enable buttons
    disableBtns();
    //animation using TweenLite
    TweenLite.to('.features__scroll__flex', 1, {
        x: '+=+1092',
        ease: Power2.easeOut,
        modifiers: {
            x: function(x) {
                return wrap(x, border2, border1)
            }
        }
    });
}

//function to create infinite carousel
function wrap(value, min, max) {
    var v = value - min;
    var r = max - min;
  
    return ((r + v % r) % r) + min;
}

//event listener for left button
left.onclick = () => {
    //start animation to the right
    moveRight();
}

//event listener for right button
right.onclick = () => {
    //start animations to the left
    moveLeft();
}