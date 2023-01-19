document.addEventListener('DOMContentLoaded', (event) => {
    
    //tabs
    const ul = document.querySelector('.phone__list');
    const descrs = document.querySelectorAll('.phone__list__descr');
    const spans = document.querySelectorAll('.phone__list__descr span');
    const pluses = document.querySelectorAll('.phone__list__head__plus');
    const targets = document.querySelectorAll('.target');

    const animations = document.querySelectorAll('.phone__animation > div');

    function toggleTabs() {
        const firstImg = document.querySelector('.phone__animation__groups-first');
        const secondtImg = document.querySelector('.phone__animation__groups-second');

        firstImg.classList.toggle('fadeOut');
        secondtImg.classList.toggle('fadeOut');
    }

    setTimeout(() => {
        descrs[0].style.height = `${spans[0].offsetHeight + 20}px`;
    }, 500);

    function hideAnimations() {
        animations.forEach( animation => {
            animation.style.display = 'none';
        });
    }

    function showAnimation(index) {
        animations[index].style.display = 'block';
    }

    let groupTabInterval;

    ul.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.matches('div.target')) {
            const id = target.getAttribute('data-id');
            const height = spans[id].offsetHeight + 20;
            const plus = pluses[id];

            hideAnimations();
            showAnimation(id);

            if (id == 2) {
                groupTabInterval = setInterval(toggleTabs, 2000);
            } else {
                clearInterval(groupTabInterval);
            }

            if (target.classList.contains('open')) {
                descrs[id].style.height = 0;
                plus.classList.remove('makeMinus');
                target.classList.remove('open');
            } else {
                descrs.forEach(descr => {
                    descr.style.height = 0
                });

                pluses.forEach(plus => {
                    plus.classList.remove('makeMinus');
                });

                targets.forEach(target => {
                    target.classList.remove('open');
                });

                descrs[id].style.height = `${height}px`;
                plus.classList.add('makeMinus');
                target.classList.add('open');
            }
        }
    });


    //set width for bg images depending on screen width
    function setBg(bgClass) {
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const bg = document.getElementsByClassName(bgClass);
        const height = bg[0].clientHeight;

        bg[0].style.backgroundSize = `${width - 60}px ${height}px`;
        bg[0].style.width = `${width - 60}px`;
    }

    if (window.innerWidth > 768) {
        setBg('promo__bg');
        setBg('desk__bg');
        setBg('infos__bg');
    }
    

    function allBg() {
        if (window.innerWidth > 768) {
            setBg('promo__bg');
            setBg('desk__bg');
            setBg('infos__bg');
        }
        
    }
        window.onresize = allBg;


    //mobile hamburger
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('.mobileMenu__menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('mobile__menu--active');
        document.body.classList.toggle('overflow');
    });
    

    //scroll up

    let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st < lastScrollTop){
           console.log('up')
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
     }, false);


});