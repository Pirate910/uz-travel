

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("test")) || [];
    let container = document.querySelector(".container");
    container.innerHTML = "";
    savedData.forEach((item) => {
        let div1 = document.createElement("div"),
            div2 = document.createElement("div");
        div1.classList.add("discover__cards")
        container.appendChild(div1);
        div2.innerHTML = item;
        div1.appendChild(div2)
    });
}

window.addEventListener("DOMContentLoaded", loadData);

window.addEventListener("storage", loadData);
