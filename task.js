
    "use strict";
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
    let d = b * b - 4 * a * c;
    if (d < 0) {
        return [];
    }
    else if (d == 0) {
        return [-b / 2 * a];
    }
    else {
        let sq = Math.sqrt(d);
        return [(-b + sq) / 2 * a, (-b - sq) / 2 * a];
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
        for (let i = 0; i < marksF.length; i++) {
            sum = sum + marksF[i];
        }
            averageMark = sum / marksF.length;
            return averageMark;
    }

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
        averageMark = sum / marks.length;
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
    if ((today.getFullYear()-dateOfBirthday.getFullYear()) > 18) {
        return "Не желаете ли олд-фэшн, " + name + " ?";
    }
        return "Сожалею, " + name + " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";;
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;//
}