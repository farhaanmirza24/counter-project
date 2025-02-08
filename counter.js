console.log("kjsxuhxu");
const output=document.getElementById("output");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const reset=document.getElementById("reset");
const rule=document.getElementById("rule");
const obey=document.getElementById("obey");


let count=0;


function randomColor() {
    let str = "01234456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;
}   



function add()
{
    count++;

// rule.style.backgroundColor="red";
// rule.style.backgroundColor="green";
rule.style.backgroundColor=randomColor();
obey.style.backgroundColor=randomColor();





    output.innerText=count;
    console.log("count");
}
plus.addEventListener('click',add);

function subtract()
{
    count--;
    output.innerText=count;
    console.log("count");
obey.style.backgroundColor=randomColor();
rule.style.backgroundColor=randomColor();

}
minus.addEventListener('click',subtract);

function changevalue()
{
    count=0;
    rule.style.backgroundColor="white";
    console.log("count");
    let confirmation=confirm("should i restart the count");

    if (confirmation)
        output.innertext=count;
    else
    alert("reset is cancelled");




}
reset.addEventListener('click',changevalue );

