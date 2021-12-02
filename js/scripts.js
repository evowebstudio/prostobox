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

    if (document.querySelector(".swiper-reviews")) {
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
});