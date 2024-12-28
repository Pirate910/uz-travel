const adventureTopBtn = document.querySelectorAll(".adventures__top button")
const adventuresCardsWrapper = document.querySelectorAll(".adventures__cards-wrapper .adventures__card-item")

function filterAdventureCards(e){

    adventureTopBtn.forEach(element => {
        element.classList.remove("adventures--active-btn")
    });

    e.target.classList.add("adventures--active-btn")

    adventuresCardsWrapper.forEach(item => {
        item.classList.add("hide")

        if(e.target.getAttribute("data-filter") === 'all' || item.getAttribute("data-filter") === e.target.getAttribute("data-filter")){
            item.classList.remove("hide")
        }
    })

}

// adventures__active
adventureTopBtn.forEach(button => button.addEventListener("click", filterAdventureCards))

