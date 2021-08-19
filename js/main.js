$(document).ready(function () {
    let currentFloor = 2; // Счетчик этажей с первоначальным значением
    const counterUp = $('.counter-up'); // Кнопка увеличения счетчика на 1 этаж
    const counterDown = $('.counter-down'); // Кнопка уменьшения счетчика на 1 этаж
    const flootPath = $('.home-image path'); // Все этажи в svg


    flootPath.on('mouseover', function() {
        currentFloor = $(this).data('floor'); // Получаем значение выбранного этажа
        setFloor(currentFloor); // Функция установки выбранного этажа
    });

    counterUp.on('click', function() {
        if(currentFloor < 18) {
            currentFloor++; // Увеличиваем счетчик на 1 этаж
            setFloor(currentFloor); // Функция установки выбранного этажа
        }
    });
    counterDown.on('click', function() {
        if(currentFloor > 2) {
            currentFloor--; // Уменьшаем счетчик на 1 этаж
            setFloor(currentFloor); // Функция установки выбранного этажа
        }
    });

    // Функция устанавливает значение счетчика и класс для выбранного этажа
    function setFloor(currentFloor) {
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) // Форматируем счетчик для отображения
        flootPath.removeClass('current-floor'); // Очищаем активные классы этажей
        $('.counter').text(usCurrentFloor); // Записываем значение выбраного этажа в счетчик на странице
        $(`[data-floor=${usCurrentFloor}]`).addClass('current-floor'); // Присваиваем активный класс выбранному этажу
    }
});