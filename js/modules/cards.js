import {getContent} from '../services/services';

function cards() {
    class CardMenu {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.changeToUAH();
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }
        changeToUAH () {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    getContent('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new CardMenu(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
            });
        });
}

export default cards;