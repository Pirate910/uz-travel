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

    async function renderFav () {
        try{

            setTimeout(() => {

            let savedData = JSON.parse(localStorage.getItem("test")) || [];
            let discoverContainer = document.querySelector(".wishlist-container");

            discoverContainer.innerHTML = ""; // Очищаем содержимое

            // Создаем фрагмент документа для более эффективной вставки элементов
            let fragment = document.createDocumentFragment();

            // savedData = savedData.filter((w, id) => id !== 0)

            savedData.forEach((item) => {
                let div = document.createElement("div");
                div.classList.add("wishlist-item"); // Замените на нужный класс
                div.innerHTML = item;
                fragment.appendChild(div);
            });

            discoverContainer.appendChild(fragment);
            }, 500);
        
            setTimeout(() => {
                let saveWishData = JSON.parse(localStorage.getItem("accomodation-wishlist")) || [];
                let wishContainer = document.querySelector(".accomodation__wrapper");
                wishContainer.innerHTML = ""; // Очищаем содержимое
              
                saveWishData.forEach(element => {
                  let div = document.createElement("div");
                  div.classList.add("accomodation__card"); // Измените класс на accomodation__card
                  div.innerHTML = element;
                  wishContainer.appendChild(div);
                });
            }, 1000);

            setTimeout(() => {

                let savedData = JSON.parse(localStorage.getItem("test")) || []
                const discoverFavBtn = document.querySelectorAll(".item__img button")
                const accomodationFavBtn = document.querySelectorAll(".accomodation__image button")
                const discoverItem = document.querySelectorAll(".wishlist-container .wishlist-item")

                discoverFavBtn.forEach(btn => {
                    btn.addEventListener("click", () => {

                        savedData.map((item, id) => {

                    
                            discoverItem.forEach(item => {
                                item.setAttribute("data-filter", [id])
                            })

                            let changedSavedData = savedData.filter((w, id) => id !== 0)

                            localStorage.setItem("test", JSON.stringify(changedSavedData))
        
                        })

                        renderFav()

                    })
                }) 
                
            }, 1100);
        
        }
        catch(err){
            discoverContainer.innerHTML = err.message
            wishContainer.innerHTML = err.message
        }
    }

    renderFav()

}


window.addEventListener("DOMContentLoaded", loadData)
window.addEventListener("storage", loadData)