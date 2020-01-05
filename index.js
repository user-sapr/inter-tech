'use strict';

function actionPage() {

    const cards = document.querySelectorAll('.card-row .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max');

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.classList.contains("card_sale")) {
                    card.style.display = 'none';
                }
            }
            else {
                card.style.display = '';
            }
        })
    });

    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    function filterPrice() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.info .price');
            const price = parseFloat(cardPrice.textContent.replace(".", ""));
            if ((min.value && price < min.value) || (price > max.value && max.value)) {
                card.style.display = 'none';
            }
            else {
                card.style.display = '';
            }
        });
    };
}

var slideInterval=setInterval(review, 3000);

function review() {
    const marks=document.querySelectorAll('.mark');
    for (let i=0; i< marks.length; i++) {
        if (marks[i].classList.contains("show")) {
            if (i===marks.length-1) {
                marks[0].classList.add("show");
            }
            else {
                marks[i+1].classList.add("show");
            }
            marks[i].classList.remove("show");
            break;
        }
    }
}


actionPage();