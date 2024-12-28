const filterButtons = document.querySelectorAll(".plan__search-buttons li")
const bookingCards = document.querySelectorAll(".booking__cards .booking__card")

function filterCards(e){

    filterButtons.forEach(button => button.classList.remove("active-btn"))

    e.target.classList.add("active-btn")

    bookingCards.forEach(item => {
        item.classList.add("hide")
        if( e.target.getAttribute("data-filter") === 'all' ||item.getAttribute("data-filter") === e.target.getAttribute("data-filter")){
            item.classList.remove("hide")
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))