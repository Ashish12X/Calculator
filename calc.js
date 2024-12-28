const display=document.querySelector(".display");
const func=document.querySelector(".function");
const btn=document.querySelectorAll(".button");
const btn1=document.querySelectorAll(".button1");
const btn2=document.querySelector(".button2");
const btn3=document.querySelector(".button3");
const btn4=document.querySelector(".button4");
let res=0;
let i=0;
let str='';
let value1='';
let value2=0;

function refresh(){
    display.innerText='';
    res=0;
    i=0;
    str='';
    func.innerText='';
}

btn.forEach((button) => {
    button.addEventListener("click",()=>{
        if(str[i-1]==='='){
            refresh();
        }
        display.innerText+=button.innerText;
        })
    }
);

function sum(val){
    res=res+val;
}

function diff(val){
    res=res-val;
}

function prod(val){
    res=res*val;
}

function div(val){
    res=res/val;
}

function percentage(val){
    res=res*val/100;
}

btn1.forEach((button) => {
    button.addEventListener("click",()=>{
        value1=display.innerText;
        display.innerText='';
        if(value1!==''){
            func.innerText=button.innerText;
            str+=button.innerText;
            i++;
        }
        value2=parseFloat(value1);
        if(i===1){
            res=value2;
        }
        else if(str[i-2]==='+') sum(value2);
        else if(str[i-2]==='-') diff(value2);
        else if(str[i-2]==='×') prod(value2);
        else if(str[i-2]==='÷') div(value2);
        else if(str[i-2]==='%') percentage(value2);
    })
});

btn2.addEventListener("click",()=>{
    value1=display.innerText;
    display.innerText='';
    if(value1!==''){
        func.innerText=btn2.innerText;
        str+=btn2.innerText;
        i++;
    }
    value2=parseFloat(value1);
    if(i===1){
        res=value2;
    }
    else if(str[i-2]==='+') sum(value2);
    else if(str[i-2]==='-') diff(value2);
    else if(str[i-2]==='×') prod(value2);
    else if(str[i-2]==='÷') div(value2);
    else if(str[i-2]==='%') percentage(value2);
    display.innerText=res;
})

btn3.addEventListener("click",()=>{
    refresh();
})

btn4.addEventListener("click",()=>{
    display.innerText = display.innerText.slice(0, -1);
})