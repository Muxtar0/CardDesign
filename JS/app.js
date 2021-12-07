const firstcolor = document.getElementById("span1cid");
const secondcolor = document.getElementById("span2cid");
const threecolor = document.getElementById("span3cid");
const image = document.getElementById("cardimage");
const befbg = document.getElementById("card");

var styleElem = document.head.appendChild(document.createElement("style"));


firstcolor.addEventListener("click" , change1);
secondcolor.addEventListener("click" , change2);
threecolor.addEventListener("click" , change3);
function change1(){
    image.src="img/running_shoes_PNG5824.png";
    styleElem.innerHTML = "#card:before {background: rgb(0, 195, 255);}";
};
function change2(){
    image.src="img/running_shoes_PNG5823.png"; 
    styleElem.innerHTML = "#card:before {background: red;}";
    
    
};
function change3(){
    image.src="img/running_shoes_PNG5816.png"; 
    styleElem.innerHTML = "#card:before {background: #9bdc28;}";
};