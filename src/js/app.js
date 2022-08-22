"use strigt"

let options = {
    type: '',
    design: '',
    adaptability: ''
};

options.type = prompt("Введите один из вариантов типов сайта \nВизитка, Магазин, Форум");
// options.design = prompt ("Введите один из вариантов дизайнов сайта \nКлассический, Инфорамционный, Корпоративный");
// options.adaptability = prompt ("Адаптивность \nДа, Нет");

let getSum = (obj) => {

    let costType = 0;
    let costDesign = 0;
    let costAdaptability = 0;

    let cost = {
        "Визитка": 10,
        "Магазин": 20,
        "Форум": 30
    }

    costType = cost[obj.type]

    // if (obj.type === 'Визитка') {
    //     costType = 10;
    // }
    // else if (obj.type === 'Магазин'){
    //     costType = 20;
    // }
    // else if (obj.type === 'Форум'){
    //     costType = 30;
    // }

    // if (obj.design === 'Классический') {
    //     costDesign = 10;
    // }
    // else if (obj.design === 'Инфорамционный'){
    //     costDesign = 20;
    // }
    // else if (obj.design === 'Корпоративный'){
    //     costDesign = 30;
    // }

    // if (obj.adaptability === 'Да') {
    //     costAdaptability = 20;
    // }
    // else if (obj.adaptability === 'Нет'){
    //     costAdaptability = 10;
    // }

    // let sum = costType + costDesign + costAdaptability;
    alert (`Юра лох?\n${costType}`)
}




getSum (options);