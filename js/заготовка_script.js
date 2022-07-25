$(document).ready(function () {/*створення функції*/
    $('.header__burger').click(function (event) {/*Створення події, яка діє в момент натискання на елемент $('.header__burger')*/
        $('.header__burger,.header__menu').toggleClass('active'); /*присвоєння класу 'active' селекторам $('.header__burger та .header__menu')- це необхідно для запуску анімації в css*/
        $('body').toggleClass('lock');/*Присвоєння класу тегу $('body')-це необхідно для подальшого блокування від прокручування невидимої частини сторінки під час відображення поверх неї меню-бургера*/
    });
});