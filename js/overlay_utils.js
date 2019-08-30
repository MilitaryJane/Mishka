//Модуль отображает и скрывает оверлей
(function () {
    var overlay = document.querySelector('.modal-overlay');

    window.overlayUtils = {
        overlayShow: function () {
            overlay.classList.add('modal-overlay--show');
        },
        overlayHide: function () {
            overlay.classList.remove('modal-overlay--show');
        }
    }
})();