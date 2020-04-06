var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var input = document.querySelectorAll("input");
var button = document.querySelector("button");
//function to generate a random num:
var randomCol = () => {
    var randomNum = Math.floor(Math.random() * 16);
    switch (randomNum) {
        case 10: 
        return randomNum = 'a';
        
        case 11: 
        return randomNum = 'b';
        
        case 12: 
        return randomNum = 'c';
        case 13: 
        return randomNum = 'd';
        
        case 14: 
        return randomNum = 'e';
        
        case 15: 
        return randomNum = 'f';
        
        default: 
        return randomNum;
    }
} 

function SetRandomCol (col) {
    col.setAttribute("value", "#" + randomCol() + randomCol() + randomCol() + randomCol() + randomCol() + randomCol());
}


function setGradient () {
    body.style.background = "linear-gradient(to right, " 
    + color1.value +", " + color2.value + ")";
    // css.textContent = "background: linear-gradient(to right, " 
    // + color1.value +", " + color2.value + ")"; gives #ff00ff values
    css.textContent = body.style.background + ";"; //gives rgb() values
}

//set random color:
button.addEventListener("click", function() {
    SetRandomCol(color1);
    SetRandomCol(color2);
    setGradient();
});

//works with querySelectorAll but not with a getElementsByTag:
input.forEach((color) => {
    color.addEventListener("input", setGradient);
});

//using LOOP:
// for (let i=0; i<input.length; i++) {
//     input[i].addEventListener("input", setGradient);
// }

//h3 should print the initial background gradient:
css.textContent = "background: linear-gradient(to right, " 
    + color1.value +", " + color2.value + ")"; 






