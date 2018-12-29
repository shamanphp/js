let money,
    name, 
    time,
    price;
    
function start(){
    
    money = prompt("ваш бюджет р", "100");
    
    while((isNaN(money)) || money == null || money == '')
    {
        money = prompt("ваш бюджет р");
    }
    name = prompt("название магазина", "кошкин дом").toUpperCase();
    
}
start();

let mainList = {
  budget : money,
  shopName : name,
  shopGoods : [],
  employers : {},
  open : false,
  discount : false
    
};

function shooseGoods(){
    
    for(let i = 0; i < 3; i++){ 
        let a = prompt("Какой тип товаров будем продавать?", "самогон")
        if((typeof(a)) === "string" && (typeof(a)) !== null && a != '' && a.length < 50)
        {
           mainList.shopGoods[i] = a;
        }else{
            i=i-1;
        }
    }
}
//shooseGoods();

/*

let i = 0;

while(i < 3){
    
    let a = prompt("Какой тип товаров будем продавать?", "самогон")
    if((typeof(a)) === "string" && (typeof(a)) !== null && a != '' && a.length < 50)
    {
       mainList.shopGoods[i] = a;
    }else{}
    
    i++;
}

do{
    let a = prompt("Какой тип товаров будем продавать?", "самогон")
    if((typeof(a)) === "string" && (typeof(a)) !== null && a != '' && a.length < 50)
    {
       mainList.shopGoods[i] = a;
    }else{}
    
    i++;
}
while(i < 3);
*/


function workTime(time)
{
   if(time < 0){
    console.log("Такого не может быть");
    }else if(time > 8 && time < 20){
        console.log("Время работать");
    }else if(time < 24){
        console.log("Уже слишком поздно");
    }else{
        console.log("В сутках только 24 часа !");
    } 
}

workTime(18);
function budgetForDay()
{
    return "Бюджет на 1 день: "+Math.floor(budget/30)+" рублей";
}

function discountSys(){
    if(discount === true)
        price *= 0.8;
}


function hhEmployers(){
    for(let i=0; i<4; i++){
        mainList.employers[i] = prompt("Имя сотрудника");
    }
}

console.log(mainList);