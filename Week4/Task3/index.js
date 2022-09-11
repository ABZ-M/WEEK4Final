const display = document.querySelector(".display");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const back = document.querySelector("#back");
const clear = document.querySelector("#clear");

var str1 = [];
var index = 0;
var numberCount = 0;
var oldnumberCount = 0;
var symbolCount = 0;

zero.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("0");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

one.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("1");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

two.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("2");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

three.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("3");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

four.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("4");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

five.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("5");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

six.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("6");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

seven.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("7");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

eight.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("8");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

nine.addEventListener("click" , e => {
    if(numberCount<=4){
    str1.push("9");
    index++;
    numberCount++;
    symbolCount=0;
    display.textContent = str1;
    }
})

divide.addEventListener("click" , e => {
    if(symbolCount<1){
    str1.push("/");
    index++;
    numberCount=0;
    symbolCount=1;
    display.textContent = str1;
    }
})

multiply.addEventListener("click" , e => {
    if(symbolCount<1){
    str1.push("x");
    index++;
    numberCount=0;
    symbolCount=1;
    display.textContent = str1;
    }
})

minus.addEventListener("click" , e => {
    if(symbolCount<1){
    str1.push("-");
    index++;
    numberCount=0;
    symbolCount=1;
    display.textContent = str1;
    }
})

plus.addEventListener("click" , e => {
    if(symbolCount<1){
    index++;
    str1.push("+");
    numberCount=0;
    symbolCount=1;
    display.textContent = str1;
    }
})

back.addEventListener("click" , e => {
    if(symbolCount==1){
        symbolCount=0;
    }
    else {
        numberCount--;
    }
    str1.pop();
    index--;
    display.textContent = str1;
})

equal.addEventListener("click" , e => {
    numberCount=0;
    symbolCount=0;
    let size = str1.length;
    for(let i=0;i<size;i++)
    {
        str1.pop();
    }
    let finalValue = calculate(str1);
    str1.push(finalValue);
    display.textContent = str1;
})

clear.addEventListener("click" , e => {
    let size = str1.length;
    for(let i=0;i<size;i++)
    {
        str1.pop();
    }
    display.textContent = str1;
    numberCount=0;
    symbolCount=0;
})



function calculate(arg1)
{
    let num1;
    let num2;
    let symbol1;
    let numarr = [];
    let symbolarr = [];
    let arrLength = arg1.length;
    let j=0;
    for(let i=0;i<arrLength;i++){
        if(arg1[i] == '+' || '-' || '/' || 'x') {
            if(symbolarr.length == 0){
            symbolarr.push(arg1[i]);
            }
            else{
                j=1;
                symbol1 = symbolarr.pop();
                num2 = Number(numarr.pop());
                num1 = Number(numarr.pop());
                let newnum;
                newnum = calculate2(num1,num2,symbol1);
                numarr.push(newnum);
                symbolarr.push(arg1[i]);
            }
        }
        else{
            if(symbolarr.length==0 && numarr.length == 0){
                numarr.push(Number(arg1[i]));
                j++;
            }
            else if(symbolarr.length==0 && numarr.length == 1){
                numarr[j] = (numarr[j]*10)+arg1[i];
            }
            else if(symbolarr.length==1 && numarr.length == 1){
                numarr.push(Number(arg1[i]));
                j++;
            }
            else if(symbolarr.length==1 && numarr.length == 2){
                numarr[j] = (numarr[j]*10)+arg1[i];
            }
            else{

            }
                
            }
    }

    return Number(numarr.pop());

}

function calculate2(num1,num2,symbol1)
{
    let answer;
    if(symbol1=='x'){
        answer = num1*num2;
        answer = answer.toFixed(1);
    }
    else if(symbol1=='/'){
        answer = num1/num2;
        answer = answer.toFixed(1);
    }
    else if(symbol1=='-'){ 
        answer = num1-num2;
        answer = answer.toFixed(1);
    }
    else {
        answer = num1+num2;
        answer = answer.toFixed(1);
    }

    return answer;
}