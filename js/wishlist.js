function loadData() {
    async function renderFav () {
        try{

            setTimeout(() => {
                startRenderFav()
            }, 600);
        
            setTimeout(() => {
                startRenderAccomodation()
            }, 700);

            setTimeout(() => {

                startRenderAdventure()

            }, 800);

        }
        catch(err){
            discoverContainer.innerHTML = err.message
            wishContainer.innerHTML = err.message
        }
    }

    renderFav()

    function startRenderFav() {

        let savedData = JSON.parse(localStorage.getItem("test"))
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

        const discoverFavBtn = document.querySelectorAll(".item__img button")
        const discoverItem = document.querySelectorAll(".wishlist-container .wishlist-item")

        discoverItem.forEach((item, id) => {
            item.querySelector(".cards__item").setAttribute("data-filter", id)
        })

        discoverFavBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {

                const cardId = e.target.closest(".cards__item").getAttribute("data-filter");
                console.log(cardId)
                savedData.splice(cardId, 1); // Удаляем элемент из массива
                localStorage.setItem("test", JSON.stringify(savedData)); // Обновляем localStorage
                startRenderFav(); // Перерисовываем карточки

            })
        })

    } 

    function startRenderAccomodation(){

        let saveWishData = JSON.parse(localStorage.getItem("accomodation-wishlist")) || [];
        let wishContainer = document.querySelector(".accomodation__wrapper");
        wishContainer.innerHTML = ""; // Очищаем содержимое
      
        saveWishData.forEach(element => {
          let div = document.createElement("div");
          div.classList.add("accomodation__card"); // Измените класс на accomodation__card
          div.innerHTML = element;
          wishContainer.appendChild(div);
        });

        const accomodationFavBtn = document.querySelectorAll(".accomodation__image button")
        const accomodationCardItem = document.querySelector(".accomodation__cards-item")



        accomodationFavBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const cardId = e.target.closest('.accomodation__cards-item').getAttribute("data-filter")
                saveWishData.splice(cardId,1)
                localStorage.setItem("accomodation-wishlist", JSON.stringify(saveWishData))
                startRenderAccomodation()
            })
        })

    }

    function startRenderAdventure(){
        let savedDataAdventure = JSON.parse(localStorage.getItem("adventure-wishlist")) || [];
        let adventureContainer = document.querySelector(".adventure__wrapper");
        
        adventureContainer.innerHTML = '';
        
        adventureContainer.innerHTML = savedDataAdventure.join("");

        const adventureFavBtn = document.querySelectorAll(".adventures__card-item-img button")

        adventureFavBtn.forEach(button => {
            button.addEventListener("click", (e) => {
                const cardId = e.target.closest(".adventures__card-item").getAttribute("data-swiper-slide-index")
                savedDataAdventure.splice(cardId, 1)
                localStorage.setItem("adventure-wishlist", JSON.stringify(savedDataAdventure))
                startRenderAdventure()
            })
        });

    }

}


window.addEventListener("DOMContentLoaded", loadData)
window.addEventListener("storage", loadData)