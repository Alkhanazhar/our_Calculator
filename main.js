function valuebutton(){
    calculatorform.screen.value += e.value; 
}
function clear(){
    calculatorform.screen.value=null;
}
function Calculate(){
    calculatorform.screen.value=eval(calculatorform)
}