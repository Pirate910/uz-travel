function loadDataWish(){

    let savedData = JSON.parse(localStorage.getItem("accomodation-wishlist")) || []
    let container = document.querySelector(".container")

    container.innerHTML = ""
    savedData.forEach(element => {
        let div1 = document.createElement("div")
            div2 = document.createElement("div")
        div1.classList.add("accomodation__cards")    
        container.appendChild(div1)
        div2.innerHTML = element
        div1.appendChild(div2)
    });

}


window.addEventListener("DOMContentLoaded", loadDataWish)
window.addEventListener("storage", loadDataWish)