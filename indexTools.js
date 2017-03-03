/**
 * Created by esanevich on 03.03.2017.
 */
$(document).ready(function () {
    var input = $("#recInput");
    var action = true;

    input.keydown(function(eventObject){
        if ((eventObject.which == 17)&&(action === true)) {
            action = false;
            recognize();
        }
    });

    input.keyup(function(eventObject){
        if (eventObject.which == 17) {
            action = true;
        }
    });

    function populateInput(text) {
        input.val(text);
    }

    function recognize() {
        window.ya.speechkit.settings.apikey = 'c4936434-79dd-4fd4-9edf-86c25699c967';
        ya.speechkit.recognize({
            // Функция будет вызвана, когда распознавание завершится.
            doneCallback: function(text) {
                populateInput(text);
                console.log("Финальный результат распознавания: " + text);
            },
            // Функция вызовется, как только сессия будет инициализирована.
            initCallback: function () {
                input.focus();
                console.log("Процесс распознавания запущен.");
            },
            // Вызывается в случае возникновения ошибки.
            errorCallback: function(err) {
                console.log("Возникла ошибка: " + err);
            },
            // Длительность промежутка тишины, при наступлении которой
            // распознавание завершается.
            utteranceSilence: 5
        });
    }

});