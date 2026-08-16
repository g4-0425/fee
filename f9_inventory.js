console.clear();
console.log("Inventory Entry System");
console.log();
const prompt = require("prompt-sync")();
// object is a collection of pair(property , value)
let stock= [];
function addStock(){
let item_code = Number(prompt("Enter Item Code: "));
let item_name = prompt("Enter Item Name: ");
let item_price = Number(prompt("Enter Price: "))
let item_quantity = Number(prompt("Enter Quantity: "))
let item = {
    code: item_code,
    item: item_name,
    price: item_price,
    item_quantity:item_quantity,
};
stock.push(item);
console.log("\nInventory Updated");
};
console.log();
while(true){
    addStock();
    let loop = prompt("Add More Items? (1 = Yes, 0 = No): ");
    loop = parseInt(loop);   // converting Integer 
    if(loop===0) 
        break;
}
//A function in JavaScript is a block of reusable code that performs a specific task. It runs only when it is called (invoked).
// processing and transforming data - not changing actual data //
// parameter - when function is defined and argument- when function is called  - 
// call back function - is a fucntion which is avaiable as a parameter to another function //
// in call back function in parameter there are no paremthesis as we dont want it to excecute the function immdiatly //
// call back hell - when many fucntions are as parameters inside many more functions // 
console.log("\nInventory Entry Completed");
console.log("\nUpdated Stock is as follows");
console.log(stock);
console.log();