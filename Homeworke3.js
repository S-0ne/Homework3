const num = Math.floor(Math.random() * 101)
const num_s = num.toString()
let first_d
let second_d

if (num_s.length === 1) {
    secondNum(num_s[0])
    console.log(num, "=>", second_d)
    return;
} else if (num_s.length === 2) {
    if(num_s[0] == "1" && num_s[1] !== "0")
{
    switch(num_s[1])
    {
        case "1": console.log(num, "=>", "Одинадцять"); break;
        case "2": console.log(num, "=>", "Дванадцять"); break;
        case "3": console.log(num, "=>", "Тринадцять"); break;
        case "5": console.log(num, "=>", "П'ятнадцять"); break;
        case "8": console.log(num, "=>", "Вісімнадцять"); break;
        default:
           secondNum(num_s[1])
           console.log(num, "=>", second_d + "цять")
    }
    return;
} else if (num_s[1] == "0") {
    switch(num_s[0]){
        case "1": console.log(num, "=>", "Десять") ; break;
        default:
            firstNum(num_s[0])
            confirm.log(num, "=>", first_d)
    }
    return;
} 
    firstNum(num_s[0]);
    secondNum(num_s[1])
    console.log(num, "=>", first_d, second_d)
    return;
}
console.log(num, "=>", "Сто")

function firstNum(x)
{
    switch(x)
    {
        case "2": first_d = "Двадцять"; break
        case "3": first_d = "Тридцять"; break
        case "4": first_d = "Сорок"; break
        case "5": first_d = "П'ятдесят"; break
        case "6": first_d = "Шістдесят"; break
        case "7": first_d = "Сімдесят"; break
        case "8": first_d = "Вісімдесят"; break
        case "9": first_d = "Дев'яносто"; break
    }
}

function secondNum(y)
{
    switch(y)
    {
        case "0": second_d = "Нуль"; break
        case "1": second_d = "Один"; break
        case "2": second_d = "Два"; break
        case "3": second_d = "Три"; break
        case "4": second_d = "Чотири"; break
        case "5": second_d = "П'ять"; break
        case "6": second_d = "Шість"; break
        case "7": second_d = "Сім"; break
        case "8": second_d = "Вісім"; break
        case "9": second_d = "Дев'ять"; break
    }
}


