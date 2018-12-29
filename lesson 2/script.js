let money = +prompt("ваш бюджет р", "100");
let name = prompt("название магазина", "кошкин дом");


let mainList = {
  budget : money,
  shopName : name,
  shopGoods : [],
  employers : {},
  open : false
    
};


for(let i = 0; i < 3; i++)
{ 
    let a = prompt("Какой тип товаров будем продавать?", "самогон")
    if((typeof(a)) === "string" && (typeof(a)) !== null && a != '' && a.length < 50)
    {
       mainList.shopGoods[i] = a;
    }else{
        
        
    }
}
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
let time = 9;
if(time < 0){
    console.log("Такого не может быть");
}else if(time > 8 && time < 20){
    console.log("Время работать");
}else if(time < 24){
    console.log("Уже слишком поздно");
}else{
    console.log("В сутках только 24 часа !");
}

//alert("Бюджет на 1 день: "+Math.floor(budget/30)+" рублей");
console.log(mainList);