document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


const collapse = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let currentHeight = this.offsetHeight;
            let addHeight = this.childNodes[3].offsetHeight;
            let newHeight = currentHeight + addHeight;

            if(this.offsetHeight == '70') {
                btn.style.height = `${newHeight}px`;
                this.childNodes[3].classList.toggle('descr-active');
                this.childNodes[1].childNodes[3].classList.toggle('arrow');
            } else {
                btn.style.height = `70px`;
                this.childNodes[3].classList.toggle('descr-active');
                this.childNodes[1].childNodes[3].classList.toggle('arrow');
            }
            
            
        });
    });
};

collapse('.rules__block');


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

