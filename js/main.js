let num1 = document.querySelector("#firstNum");
let num2 = document.querySelector("#secondNum");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let list = document.querySelector("#list");

add.onclick = function () {
    let result = Number(num1.value) + Number(num2.value);

    let li = document.createElement("li");
    li.innerHTML = result;
    li.classList.add("list-group-item");
    list.appendChild(li);
}
