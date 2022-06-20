$(document).ready(function(){
                  
  let option = {treshold:[0.2]};
    let observer = new IntersectionObserver(onEntry,options);
    let elements = $('.element-animation');
    animates.each ((i,el) => {
        observer.observe(el);
    });              
    });
function onEntry (entry){
    entry.forEach (change => {
        if(change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}


    
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i,el) => {
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((e,el) => {
                if ($(el).hasClass("active")){
                $(el).removeClass ("active");
            }
            });
        $('nav li:eq('+ i +')').find('a').addClass('active');
    }
    });
    
    });
    



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











