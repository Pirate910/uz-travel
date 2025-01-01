const bestPlacePopup = document.querySelector("#bestPlacePopup")
const bestPlaceAddressPopup = document.querySelectorAll(".destination-popup-places iframe")
const bestPlaceCard = document.querySelectorAll("#bestPlaceCard a")

bestPlaceCard.forEach(item => item.style.cursor = 'pointer')


bestPlaceCard.forEach(btn => {
    btn.addEventListener("click", () => {
        
        bestPlaceAddressPopup.forEach(element => {
            element.classList.add("hide")

            if(element.getAttribute('data-filter') === btn.getAttribute('data-filter')){
                element.classList.remove("hide")
            }

        })

    })
})
