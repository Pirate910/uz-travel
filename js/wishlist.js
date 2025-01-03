function loadData() {


    // setTimeout(() => {
    //     let savedData = JSON.parse(localStorage.getItem("test")) || [];
    //     let discoverContainer = document.querySelector(".container");
    //     discoverContainer.innerHTML = ""; // Очищаем содержимое
    //     savedData.forEach((item) => {
    //         let div1 = document.createElement("div"),
    //             div2 = document.createElement("div");
    //         div1.classList.add("discover__cards")
    //         discoverContainer.appendChild(div1);
    //         div2.innerHTML = item;
    //         div1.appendChild(div2)
    //     });
    // }, 2000);

    // setTimeout(() => {
    //     let saveWishData = JSON.parse(localStorage.getItem("accomodation-wishlist")) || []
    //     let wishContainer = document.querySelector(".container");
    //     wishContainer.innerHTML = ""; // Очищаем содержимое

    //     saveWishData.forEach(element => {
    //         let div1 = document.createElement("div")
    //             div2 = document.createElement("div")
    //         div1.classList.add("accomodation__cards")    
    //         wishContainer.appendChild(div1)
    //         div2.innerHTML = element
    //         div1.appendChild(div2)
    //     });
    // }, 2500);


    setInterval(() => {
        setTimeout(() => {
            let savedData = JSON.parse(localStorage.getItem("test")) || [];
            let discoverContainer = document.querySelector(".container");
            discoverContainer.innerHTML = ""; // Очищаем содержимое
            savedData.forEach((item) => {
                let div1 = document.createElement("div"),
                    div2 = document.createElement("div");
                div1.classList.add("discover__cards")
                discoverContainer.appendChild(div1);
                div2.innerHTML = item;
                div1.appendChild(div2)
            });
        }, 2000);
    
        setTimeout(() => {
            let saveWishData = JSON.parse(localStorage.getItem("accomodation-wishlist")) || []
            let wishContainer = document.querySelector(".container");
            wishContainer.innerHTML = ""; // Очищаем содержимое
    
            saveWishData.forEach(element => {
                let div1 = document.createElement("div")
                    div2 = document.createElement("div")
                div1.classList.add("accomodation__cards")    
                wishContainer.appendChild(div1)
                div2.innerHTML = element
                div1.appendChild(div2)
            });
        }, 2500);
    }, 1800);

}


window.addEventListener("DOMContentLoaded", loadData)
window.addEventListener("storage", loadData)