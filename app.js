let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

window.addEventListener("load", function () {
    ul.innerHTML = localStorage.getItem("tasks") || "";
});

ul.addEventListener(("click"), function(e) {
    if(e.target.innerText === 'Delete') {
        e.target.parentElement.remove();
        localStorage.setItem("tasks", ul.innerHTML);
    }
    
    if(e.target.innerText === 'Mark as done') {
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
        localStorage.setItem("tasks", ul.innerHTML);
    }
});

btn.addEventListener(("click") ,function(e) {
    e.preventDefault();

    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    let doneBtn = document.createElement("button");
    let text = document.createElement("span");

    text.innerText = inp.value;
    delBtn.innerText = "Delete";
    doneBtn.innerText = "Mark as done";

    ul.appendChild(li);
    li.appendChild(text)
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    
    inp.value = "";
    localStorage.setItem("tasks", ul.innerHTML);
});




