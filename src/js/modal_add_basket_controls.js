(function () {
    'use strict';

    var buyButton = document.querySelectorAll('.buy-button');
    buyButton = Array.prototype.slice.call(buyButton);
    var modalAddBasket = document.querySelector('.modal-add-basket');
    var buttonAddBasket = document.querySelector('.modal-add-basket__button');


    buyButton.forEach(function (element) {
        element.addEventListener('click', function (evt) {
            evt.preventDefault();
            modalAddBasket.classList.add('modal-add-basket--open');
            window.overlayUtils.overlayShow();
        })
    });


    buttonAddBasket.addEventListener('click', function (evt) {
        modalAddBasket.classList.remove('modal-add-basket--open');
        window.overlayUtils.overlayHide();
    });


})();