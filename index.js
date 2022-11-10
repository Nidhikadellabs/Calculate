// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = ''; 
// for(item of buttons){
//     item.addEventListener('click', (e)=>{
//         buttonText = e.target.innerText;
//         console.log("Button text is ....", buttonText);
//        if(buttonText=='X'){
//         buttonText = '*';
//         screen.value = buttonText;
//        }
//        else if (buttonText =='='){

//        }
//       })
// }


// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}