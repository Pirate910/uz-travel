const foodsTypes = document.querySelectorAll(".sidebar-btns li")
const foodCards = document.querySelectorAll(".products .food__card")

//sidebar__item

function filterCards(e){

    console.log(e.target)

    foodsTypes.forEach(btn => {
        btn.classList.remove("sidebar--active-btn")
    })

    e.target.classList.add("sidebar--active-btn")

    foodCards.forEach(item => {
        console.log(item)
        item.classList.add("hide")

        if(e.target.getAttribute("data-filter") === 'all' || item.getAttribute("data-filter") === e.target.getAttribute("data-filter")){
            item.classList.remove("hide")
        }
    })
}

foodsTypes.forEach(button => button.addEventListener("click", filterCards))