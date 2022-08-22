"use strigt"

let options = {
    type: '',
    design: '',
    adaptability: ''
};

options.type = prompt("Введите один из вариантов типов сайта \nВизитка, Магазин, Форум");
options.design = prompt ("Введите один из вариантов дизайнов сайта \nКлассический, Инфорамционный, Корпоративный");
options.adaptability = prompt ("Адаптивность \nДа, Нет");

let getSum = (obj) => {

    let costType = 0;

    let cost = {
        "Визитка": 10,
        "Магазин": 20,
        "Форум": 30,

        "Классический": 10,
        "Инфорамционный": 20,
        "Корпоративный": 30,

        "Да": 20,
        "Нет": 10
    }

    costType = cost[obj.type] + cost[obj.design] + cost[obj.adaptability];

    alert (`Цена вашего сайта:\n${costType}`)
}

getSum (options);