console.clear();
// // Store Name-
const storeName="Sumedha's Store "; 
console.log("\t\tSumedha's Store\t\t");
console.log("---------------------------------------");
// // Inventory - 
// let item1 = "Mobile";
// console.log(item1);
// {
// let item1 = "Headphones"; 
// console.log(item1);
// }
// console.log(item1);

// Inventory-
let items = ["Pen", "Book", "Bag"];
// console.log(items.length);                       // length is property , if something used in brackets then it is a method . 
items.push("Watch", "Laptop");                       // push is a method . // Adds in Last
// console.log(items);
//items.pop();   // remove item from the last .
//console.log(items);

// 5 Prices - 
let prices = [100,500,1000,5000,10000];
// Billing-
console.log("Serial No.\tItems\t\tPrices");
console.log("---------------------------------------");

for (let i = 0; i < items.length; i++) {
console.log((i + 1) + "\t\t" + items[i] + "\t\t" + prices[i]);
}
const prompt = require("prompt-sync")();
let srNo = Number(prompt("Enter Serial Number: "));
let quantity = Number(prompt("Enter Quantity: "));
let cost = quantity * prices[srNo-1] ; 
console.log("Item:", items[srNo - 1]);
console.log("Price:", prices[srNo - 1]);
console.log("Quantity:", quantity);
console.log("Total Cost:", cost); 

