window.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.select')) {
        let x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName('select');
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName('select')[0];
            ll = selElmnt.length;
            a = document.createElement('DIV');
            a.setAttribute('class', 'select-selected');
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            b = document.createElement('DIV');
            b.setAttribute('class', 'select-items select-hide');
            for (j = 1; j < ll; j++) {
                c = document.createElement('DIV');
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener('click', function(e) {
                    let y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName('same-as-selected');
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute('class');
                            }
                            this.setAttribute('class', 'same-as-selected');
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener('click', function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-hide');
                this.classList.toggle('select-arrow-active');
            });
        }

        function closeAllSelect(elmnt) {
            let x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName('select-items');
            y = document.getElementsByClassName('select-selected');
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove('select-arrow-active');
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add('select-hide');
                }
            }
        }

        document.addEventListener('click', closeAllSelect);
    }

    if (document.querySelector('.swiper-reviews')) {
        new Swiper(".swiper-reviews", {
            roundLengths: !0,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: !0
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    centeredSlides: !0
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    centeredSlides: !1
                },
                1240: {
                    slidesPerView: 2.132,
                    spaceBetween: 102,
                    centeredSlides: !1
                }
            },
            navigation: {
                disabledClass: "slider-nav__btn--disabled",
                nextEl: ".swiper-reviews .slider-nav__btn--next",
                prevEl: ".swiper-reviews .slider-nav__btn--prev"
            }
        });
    }

    if (document.querySelector('.swiper-plans')) {
        new Swiper('.swiper-plans', {
            roundLengths: !0,
            slideToClickedSlide: !0,
            breakpoints: {
                320: {
                    slidesPerView: 1.295,
                    spaceBetween: 20,
                    centeredSlides: !0
                },
                768: {
                    slidesPerView: 2.4,
                    spaceBetween: 20,
                    centeredSlides: !1
                },
                992: {
                    slidesPerView: 3.42,
                    spaceBetween: 20
                },
                1240: {
                    slidesPerView: 4.42,
                    spaceBetween: 27
                }
            },
            navigation: {
                disabledClass: "slider-nav__btn--disabled",
                nextEl: ".swiper-plans .slider-nav__btn--next",
                prevEl: ".swiper-plans .slider-nav__btn--prev"
            }
        });
    }

    if (document.querySelector('.main-promo')) {
        new Swiper(".swiper-promo", {
            slidesPerView: 1,
            spaceBetween: 88,
            navigation: {
                    disabledClass: "slider-nav__btn--disabled",
                    nextEl: ".swiper-promo .slider-nav__btn--next",
                    prevEl: ".swiper-promo .slider-nav__btn--prev"
            },
            pagination: {
                el: ".swiper-promo .promo-slider__dots",
                type: "bullets",
                bulletClass: "nav-dots__btn",
                bulletActiveClass: "nav-dots__btn--active",
                bulletElement: "button",
                clickable: !0
            }
        });
    }

    if(document.querySelector('.how-to-buy')) {
        const deliveryOptionsItemFast = document.querySelectorAll('.delivery-options__item--fast');
        const deliveryOptionsItemSimple = document.querySelectorAll('.delivery-options__item--simple');
        const deliveryOptionsBtnFast = document.querySelector('.js-delivery-btn-fast');
        const deliveryOptionsBtnSimple = document.querySelector('.js-delivery-btn-simple');
        const pricingOptionsBtnYes = document.querySelector('.js-pricing-options-yes');
        const pricingOptionsBtnNo = document.querySelector('.js-pricing-options-no');

        deliveryOptionsItemFast.forEach((item) => {
            item.style.display = 'none';
        });
        deliveryOptionsItemSimple.forEach((item) => {
            item.style.display = 'none';
        });

        pricingOptionsBtnYes.addEventListener('click', (event) => {
            event.preventDefault();
            pricingOptionsBtnYes.classList.add('js-pricing-options-current');
            pricingOptionsBtnNo.classList.remove('js-pricing-options-current');
            document.querySelector('.delivery-options--yes').style.display = 'block';
            document.querySelector('.delivery-options--no').style.display = 'none';
        });

        pricingOptionsBtnNo.addEventListener('click', (event) => {
            event.preventDefault();
            pricingOptionsBtnYes.classList.remove('js-pricing-options-current');
            pricingOptionsBtnNo.classList.add('js-pricing-options-current');
            document.querySelector('.delivery-options--yes').style.display = 'none';
            document.querySelector('.delivery-options--no').style.display = 'block';
        });

        deliveryOptionsBtnFast.addEventListener('click', (event) => {
            event.preventDefault();
            deliveryOptionsBtnFast.classList.add('active');
            deliveryOptionsBtnSimple.classList.remove('active');
            deliveryOptionsItemFast.forEach((item) => {
                item.style.display = 'block';
            });
            deliveryOptionsItemSimple.forEach((item) => {
                item.style.display = 'none';
            });
        });

        deliveryOptionsBtnSimple.addEventListener('click', (event) => {
            event.preventDefault();
            deliveryOptionsBtnFast.classList.remove('active');
            deliveryOptionsBtnSimple.classList.add('active');
            deliveryOptionsItemFast.forEach((item) => {
                item.style.display = 'none';
            });
            deliveryOptionsItemSimple.forEach((item) => {
                item.style.display = 'block';
            });
        });
    }

    if(document.querySelector('.oversize')) {
        const oversizeBtn = document.querySelector('.oversize');
        const oversizeInput = document.querySelector('.oversize-input');
        const oversizeInputCol = document.querySelector('.oversize-input-col');
        const btnPos = document.querySelector('.button-pos');
        oversizeBtn.addEventListener('click', (event) => {
            oversizeBtn.classList.toggle('active');
            oversizeInput.classList.toggle('active');
            oversizeInputCol.classList.toggle('active');
            btnPos.classList.toggle('abs');
        });
    }

    /*mob menu*/
    const navButton = document.querySelector('.header .burger');
    const nav = document.querySelector('.mob-menu');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    navButton.addEventListener('click', (event) => {
        navButton.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('fixed');
    });

    if(document.querySelector(".reviews-map")) {
        ymaps.ready(function () { 
            const myMap = new ymaps.Map("YMapsID", {
                center: [55.755819, 37.617644],
                zoom: 7,
                controls: []
            });

            const myIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
            );

            const pinOptions = {
                iconImageHref: 'https://evowebstudio.github.io/prostobox/img/pin.svg',
                iconImageSize: [60, 60],
                iconImageOffset: [-30, -30],
                iconContentOffset: [25, 13],
                iconLayout: 'default#imageWithContent',
                iconContentLayout: myIconContentLayout
            }

            const placemark1 = new ymaps.Placemark([55.755819, 37.617644], {
                balloonContent: 
                `
                    <div class="baloon">
                        <div class="heading">
                            <p class="count">3</p>
                            <p class="title">???????????? ?? ?????????????????? ??????????:</p>
                        </div>
                        <div class="list">
                            <div class="item">
                                <p class="name">??????????: 000000999</p>
                                <div class="value">
                                    <p class="time">26.04.2021</p>
                                    <p class="author">Name</p>
                                    <div class="rating">
                                        <div class="stars stars_2"></div>
                                    </div>
                                    <p class="city">????????????</p>
                                    <p class="trackcode">PCT000000443175</p>
                                    <p class="text">?? ?????? ???????????????????? ???????????????????????? ?????????????????????? ?????????????? ?? ???? ?????????????????????? ?????????????? ???? ?????????????? ?????????????????????? ????????????????????????????, ????-???? ???????? ???????????????????? ???? ???????????? ??????????????????????????. ?????????????????????? ???????????????????? ???????????????? ???????????? ????????????, ?????? ???????????????????????? ?????????????????? ???????????????????? ???????????????????????????? ?????????????? ???????????????????????????????? ?????????????? ????????????????.</p>
                                </div>
                            </div>
                            <div class="item">
                                <p class="name">??????????: 000000999</p>
                            </div>
                            <div class="item">
                                <p class="name">??????????: 000000999</p>
                            </div>
                        </div>
                    </div>
                `,
                iconContent: '3'
            }, 
                pinOptions
            );

            const placemark2 = new ymaps.Placemark([57.626559, 39.893813], {
                balloonContent: 
                `
                    <div class="baloon">
                        <div class="heading">
                            <p class="count">2</p>
                            <p class="title">???????????? ?? ?????????????????? ??????????:</p>
                        </div>
                        <div class="list">
                            <div class="item">
                                <p class="name">??????????: 000000999</p>
                                <div class="value">
                                    <p class="time">26.04.2021</p>
                                    <p class="author">Name</p>
                                    <div class="rating">
                                        <div class="stars stars_2"></div>
                                    </div>
                                    <p class="city">????????????</p>
                                    <p class="trackcode">PCT000000443175</p>
                                    <p class="text">?? ?????? ???????????????????? ???????????????????????? ?????????????????????? ?????????????? ?? ???? ?????????????????????? ?????????????? ???? ?????????????? ?????????????????????? ????????????????????????????, ????-???? ???????? ???????????????????? ???? ???????????? ??????????????????????????. ?????????????????????? ???????????????????? ???????????????? ???????????? ????????????, ?????? ???????????????????????? ?????????????????? ???????????????????? ???????????????????????????? ?????????????? ???????????????????????????????? ?????????????? ????????????????.</p>
                                </div>
                            </div>
                            <div class="item">
                                <p class="name">??????????: 000000999</p>
                            </div>
                        </div>
                    </div>
                `,
                iconContent: '2'
            }, 
                pinOptions
            );

            myMap.geoObjects
                .add(placemark1)
                .add(placemark2);
        });
    }

    if(document.querySelector('.onboard-wrap')) {
        const buttonOnboardStart = document.querySelector('.onboard.active .onboard-start');
        const buttonsOnboardClose = document.querySelectorAll('.onboard .onboard-close');
        const buttonsOnboardNext = document.querySelectorAll('.onboard .onboard-next');
        const buttonsOnboardPrev = document.querySelectorAll('.onboard .onboard-prev');
        const buttonOnboardLast = document.querySelector('.onboard .onboard-next.last');
        const buttonsNavItem = document.querySelectorAll('.onboard .onboard-nav-item');

        buttonOnboardStart.addEventListener('click', () => {
            document.querySelector('.onboard[data-step="1"]').classList.remove('active');
            document.querySelector('.onboard[data-step="2"]').classList.add('active');
        });

        buttonsOnboardClose.forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelector('.onboard.active').classList.remove('active');
                document.querySelector('.onboard-overlay.active').classList.remove('active');
            });
        });
        
        buttonOnboardLast.addEventListener('click', () => {
            document.querySelector('.onboard.active').classList.remove('active');
            document.querySelector('.onboard-overlay.active').classList.remove('active');
            
        });

        buttonsOnboardNext.forEach((item) => {
            item.addEventListener('click', () => {
                if(!item.classList.contains('last')) {
                    const activeBlock = document.querySelector('.onboard.active');
                    const id = Number(activeBlock.getAttribute('data-step'));
                    const nextId = id + 1;
                    if(id < 7) {
                        document.querySelector(`.onboard[data-step="${nextId}"]`).classList.add('active');
                        activeBlock.classList.remove('active');
                    }
                }
            });
        });

        buttonsOnboardPrev.forEach((item) => {
            item.addEventListener('click', () => {
                const activeBlock = document.querySelector('.onboard.active');
                const id = Number(activeBlock.getAttribute('data-step'));
                const prevId = id - 1;
                document.querySelector(`.onboard[data-step="${prevId}"]`).classList.add('active');
                activeBlock.classList.remove('active');
            });
        });

        buttonsNavItem.forEach((item) => {
            item.addEventListener('click', () => {
                const idTarget = item.getAttribute('data-to');
                const activeBlock = document.querySelector('.onboard.active');
                activeBlock.classList.remove('active');
                document.querySelector(`.onboard[data-step="${idTarget}"]`).classList.add('active');
            });
        });
    }
});