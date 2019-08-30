(function () {
    'use strict';

    var buyButton = document.querySelectorAll('.buy-button');
    buyButton = Array.prototype.slice.call(buyButton);
    var modalAddBasket = document.querySelector('.modal-add-basket');
    var buttonAddBasket = document.querySelector('.modal-add-basket__button');

    var buttonSizeSelect = document.querySelectorAll('.modal-add-basket__size-select');
    buttonSizeSelect = Array.prototype.slice.call(buttonSizeSelect);
    var arraySElectSize = [];
    var basketIndicator = document.querySelector('.user-list__basket-indicator');


    buyButton.forEach(function (element) {
        element.addEventListener('click', function (evt) {
            evt.preventDefault();
            modalAddBasket.classList.add('modal-add-basket--open');
            window.overlayUtils.overlayShow();

        })
    });


    buttonAddBasket.addEventListener('click', function (evt) {
        evt.preventDefault();
        basketIndicator.textContent = arraySElectSize.length;
        modalAddBasket.classList.remove('modal-add-basket--open');
        window.overlayUtils.overlayHide();
    });
})();