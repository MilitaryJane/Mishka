(function () {

    "use strict";

    var mainNav = document.querySelector(".main-nav");
    var toggle = document.querySelector(".toggle");
    var toggleBurger = document.querySelector(".toggle__burger");
    var modalSiteMenu = document.querySelector(".site-list");
    var modalUserMenu = document.querySelector(".user-list");

    mainNav.classList.remove("main-nav--no-js");

    toggle.addEventListener("click", function (evt) {
        evt.preventDefault();
        (toggleBurger.classList.contains("toggle__burger--open") === true) ? toggleBurger.classList
            .remove(
                "toggle__burger--open"): toggleBurger.classList.add("toggle__burger--open");

        (modalSiteMenu.classList.contains("site-list--open") === true) ? modalSiteMenu
            .classList
            .remove(
                "site-list--open"): modalSiteMenu.classList.add("site-list--open");

        (modalUserMenu.classList.contains("user-list--open") === true) ? modalUserMenu
            .classList
            .remove(
                'user-list--open'): modalUserMenu.classList.add('user-list--open');

    });

})();