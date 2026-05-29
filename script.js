let zeroBtn = document.getElementById("0");
let oneBtn = document.getElementById("1");
let twoBtn = document.getElementById("2");
let threeBtn = document.getElementById("3");
let fourBtn = document.getElementById("4");
let fiveBtn = document.getElementById("5");
let sixBtn = document.getElementById("6");
let sevenBtn = document.getElementById("7");
let eightBtn = document.getElementById("8");
let nineBtn = document.getElementById("9");
let addBtn = document.getElementById("add")
let subtractBtn = document.getElementById("subtract")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")
let equalsBtn = document.getElementById("equals")
let Result = document.getElementById("result")

let firstNum = null
let action = ""
let secondNum = null
let deleteNext = false

function addNum(num)
{
    if (deleteNext)
        Result.textContent = ""
    Result.textContent += String(num)
    deleteNext = false
}

function evaluate() {
    if (firstNum === null || secondNum === null) return;

    let result = 0;

    if (action == "+") result = firstNum + secondNum;
    if (action == "-") result = firstNum - secondNum;
    if (action == "X") result = firstNum * secondNum;
    if (action == "/") result = firstNum / secondNum;

    Result.textContent = String(result.toFixed(2));

    firstNum = result;
    secondNum = null;
}

function setAction(newAction) {
    let current = Number(Result.textContent);

    if (firstNum === null) {
        firstNum = current;
    } else if (action !== "") {
        secondNum = current;
        evaluate();
    }

    action = newAction;
    deleteNext = true;
}

equalsBtn.addEventListener("click", () => evaluate())

addBtn.addEventListener("click", () => setAction("+"))
subtractBtn.addEventListener("click", () => setAction("-"))
multiplyBtn.addEventListener("click", () => setAction("X"))
divideBtn.addEventListener("click", () => setAction("/"))

zeroBtn.addEventListener("click", () => addNum(0))
oneBtn.addEventListener("click", () => addNum(1))
twoBtn.addEventListener("click", () => addNum(2))
threeBtn.addEventListener("click", () => addNum(3))
fourBtn.addEventListener("click", () => addNum(4))
fiveBtn.addEventListener("click", () => addNum(5))
sixBtn.addEventListener("click", () => addNum(6))
sevenBtn.addEventListener("click", () => addNum(7))
eightBtn.addEventListener("click", () => addNum(8))
nineBtn.addEventListener("click", () => addNum(9))

