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