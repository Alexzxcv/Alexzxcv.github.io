//обработка формы
let options = {
    type: '',
    design: '',
    adaptability: ''
};

$('#typeSite, #designSite, #adaptabilitySite').change(function () {
    options.type = $('#typeSite option:selected').text();
    options.design = $('#designSite option:selected').text();
    options.adaptability = $('#adaptabilitySite option:selected').text();

});


let costSite = $('.resCost h5');
let termSite = $('.resTerm h5');

costSite.text(0);

let getSumCost = (obj) => {

    let costSum = 0;

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

    costSum = cost[obj.type] + cost[obj.design] + cost[obj.adaptability];

    if (isFinite(costSum)) {
        console.log(costSum);
        return costSum;
    }
    else {
        costSum = 0;
        console.log(costSum);
        return costSum;
    }
}

let getSumTerm = (obj) => {

    let termSum = 0;
    let term = {
        "Визитка": 1,
        "Магазин": 2,
        "Форум": 3,

        "Классический": 1,
        "Инфорамционный": 2,
        "Корпоративный": 3,

        "Да": 2,
        "Нет": 1
    }

    termSum = term[obj.type] + term[obj.design] + term[obj.adaptability];

    if (isFinite(termSum)) {
        console.log(termSum);
        return termSum;
    }
    else {
        termSum = 0;
        console.log(termSum);
        return termSum;
    }
}

$("#button").click(function () {
    costSite.text(`${getSumCost(options)}$`)
    termSite.text(`${getSumTerm(options)} нед.`)
});







