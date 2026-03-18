let display=document.getElementById("display");

let currentValue="";
let previousValue="";
let operator="";

function appendno(num){
    currentValue += num;
    updatedisplay();
}
function setOperator(op){
    if(currentValue==="")
        return;
    if(previousValue!=="")
        calculate();
    operator=op;
    previousValue=currentValue;
    currentValue="";
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function module(a,b){
    return a%b;
}
function calculate(){
    if(previousValue==="" || currentValue==="")
        return
    let a=parseFloat(previousValue);
    let b=parseFloat(currentValue);
    let result;
    if(operator==="+")
        result=add(a,b);
    if(operator==="-")
        result=subtract(a,b);
    if(operator==="*")
        result=multiply(a,b);
    if(operator==="/")
        result=divide(a,b);
    if(operator==="%")
        result=module(a,b);
    currentValue=result.toString();
    previousValue="";
    operator="";
    updatedisplay();
}
function clearAll(){
    currentValue="";
    previousValue="";
    operator="";
    updatedisplay();
}
function deletelast(){
    currentValue=currentValue.slice(0,-1);
    updatedisplay();
}
function updatedisplay(){
    display.value=currentValue || previousValue || "0";
}

document.addEventListener("keydown", function(event) {
    const key=event.key;
    if(/\d/.test(key)){
        appendno(key);
    }
    else if(key==="."){
        if(!currentValue.includes("."))appendno(".");
    }
    else if(["+","-","*","/","%"].includes(key)){
        setOperator(key);
    }
    else if(key==="Enter"){
        calculate();
    }
    else if(key==="Backspace"){
        deletelast();
    }
    else if(key.toLowerCase()==="c"){
        clearAll();
    }
});
