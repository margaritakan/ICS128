alert("Hello World!");
let person = prompt("Please enter your name");
let amount = prompt("Please enter amount");
let taxRate = prompt("Please enter tax rate");
let totalAmount = (parseInt(amount) * parseInt(taxRate) / 100) + parseInt(amount);

if (person != null && amount != null && taxRate != null) {
    document.getElementById("hello").innerHTML = "Hello " + person + ". Nice to meet you.";
    
    document.getElementById("amount").innerHTML = "$" + amount;
    document.getElementById("taxRate").innerHTML = taxRate + "%";
    document.getElementById("totalAmount").innerHTML = "$" + parseFloat(totalAmount).toFixed(2);
    
}