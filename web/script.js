

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
        catch(error){
        display.value = "error"
    }
}
document.addEventListener("keydown", (e) => {
    if (e.key >= '0' && e.key <= '9' || "+-*/.%".includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        display.value = display.value.toString().slice(0, -1);
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
