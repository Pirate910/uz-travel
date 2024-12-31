const destinationPlacesPopup = document.querySelectorAll(".destination-popup-places iframe")
const bestPlaceBtns = document.querySelectorAll(".best-place-btn a")

bestPlaceBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        destinationPlacesPopup.forEach(item => {
            item.classList.add("hide")

            if(btn.getAttribute("data-filter")  === item.getAttribute("data-filter")){
                item.classList.remove("hide")
            }
        })
    })
})