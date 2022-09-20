import tabs from './modules/tabs';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import sliders from './modules/sliders';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-12-12');
    calc();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    sliders({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});


 // showSlide(slideIndex);

    // if(slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlide(n) {
    //     if(n > slides.length) {
    //         slideIndex = 1;
    //     } 
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((item) => {
    //         item.style.display = 'none';
    //     });

    //     slides[slideIndex - 1].style.display = 'block';

    //     if(slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlide(n) {
    //     showSlide(slideIndex += 1);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlide(1);
    // });