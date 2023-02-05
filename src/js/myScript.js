$(document).ready(function () {
    new WOW().init();

    $("#inputTel").mask("+7(999) 999-99-99");

    $('form').submit(function (event) {
        if ($("#inputTel").val() == "" || $("#exampleInputEmail1").val() == "") {
            event.preventDefault();
            alert("Введите свои даные");
        }
    });


    //Прелодер
    $(".loaderArea").css("display", "none");

    //Калькулятор    
    function calculate() {
        let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
        let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function () {
        calculate();
    });

});
//Плавный скроллинг к якорным ссылкам
$("a[href^='#']").click(function () {
    let _href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
    });
    return false;
});

//отложенная анимация при скроле
let options = {
    treshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation,aboutMePhoto');
elements.each((i, el) => {
    observer.observe(el);
});


//Бегающие цифры статистики
let optionsStat = {
    threshold: [0.5]
};
let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
let elementsStat = $('.statAnimation');

elementsStat.each((i, el) => {
    observerStat.observe(el);
});


function onEntryStat(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            if (!$('.statAnimation').hasClass("done")) {
                $('.statAnimation').addClass("done");
                $('.statAnimation').spincrement({
                    thousandSeparator: "",
                    duration: 3000
                });
            }
        }
    });
}





$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {

        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            $("nav a").each((e, el) => {
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });


});


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
};
//Плавный скроллинг к якорным ссылкам


$(document).ready(function () {
    showStartModal();
});

function showStartModal() {
    setTimeout(function () {
        $('exampleModal').modal('show');
    }, 15000);
}


$(document).ready(function () {

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((e, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });

    });

    let options = {
        treshold: [0.2]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}







/*
let siteAnswer, designAnwer, adaptiveAnswer;
let calculator = {
    price:[
        [3000, 15000, 25000],
        [1000, 10000, 20000],
        [1000, 2000, 3000]
        ],
    days: [
        [3, 7, 10],
        [1, 7, 14],
        [1, 1, 2]
        ],
    run(site, design, adaptive) {
        let sum = calculator.price[0][site - 1] + calculator.price[1][design - 1] + calculator.price[2][adaptive - 1];
        let time = calculator.days[0][site - 1] + calculator.days[1][design - 1] + calculator.days[2][adaptive - 1];
        alert("Стоимость " + sum + "\n Сроки: " + time);
    }
}

function getAnswers() {
    siteAnswer = prompt("Введите тип сайта: \n1 - Визитка, \n2 - Корпаративный, \n3 - Интернет магазин");
    if (siteAnswer != 1 && siteAnswer != 2 && siteAnswer != 3) {
        alert("Такого варианту нет!");
        getAnswers();
        return;
    }
    designAnwer = prompt("Введите тип сайта: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
    if (designAnwer != 1 && designAnwer != 2 && designAnwer != 3) {
        alert("Такого варианту нет!");
        getAnswers();
        return;
    }
    adaptiveAnswer = prompt("Введите тип сайта: \n1 - Только ПК, \n2 - Только мобильный сайт, \n3 - ПК + Мобильный");
    if (adaptiveAnswer != 1 && adaptiveAnswer != 2 && adaptiveAnswer != 3) {
        alert("Такого варианту нет!");
        getAnswers();
        return;
    }
    calculator.run(siteAnswer, designAnwer, adaptiveAnswer);
}
getAnswers();

*/
