

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    let d, x1, x2, sq;
    let x = [];
    d = b * b - 4 * a * c;
    sq = Math.sqrt(d);
    //console.log(d);
    //console.log(sq);
    if (d < 0) {
        return x;
    }
    else if (d == 0) {
        x1 = -b / 2 * a;
        x[0] = x1;
        //console.log(x);
        return x;
    }
    else {
        x1 = (-b + sq) / 2 * a;
        x[0] = x1;
        x2 = (-b - sq) / 2 * a;
        x[1] = x2
        //console.log(x);
        return x;
    }
    
    // код для задачи №1 писать здесь
    //return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let averageMark;
    let marksF;
    let sum = 0;
    if (marks.length > 5) {
        console.log("Оценок больше 5");
        marksF = marks.slice(0, 5);

    }
    //console.log(marksF);
    //console.log(marksF.length);

    for (let i = 0; i < marksF.length; i++) {
        //console.log(marksF[b]);
        sum = sum + marksF[i];
    }
        //console.log(sum)
        averageMark = sum / marksF.length;
        //console.log(averageMark);
        return averageMark;
    
    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){

    let today = new Date();
    let year = today.getFullYear();
    let yearofBirthday = dateOfBirthday.getFullYear();
    let result;

    //console.log(yearofBirthday);
    //console.log(year);
    if ((year-yearofBirthday) > 18) {
        result = "Не желаете ли олд-фэшн, " + name + " ?"
        return result;
    }
        result = "Сожалею, " + name + " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
        return result;


    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    ////
}