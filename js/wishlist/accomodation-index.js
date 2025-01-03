document
    .querySelectorAll(".accomodation__cards .accomodation__image button")
    .forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const card = document.querySelectorAll(".accomodation__cards .accomodation__cards-item")[index];

            const cardClone = card.cloneNode(true)
            const imgWish = cardClone.querySelector("img")

            if(imgWish) {
                const imgSrcWish = imgWish.src
                imgWish.setAttribute("src", imgSrcWish)
            }

            let savedData = JSON.parse(localStorage.getItem('accomodation-wishlist')) || []
            const cardHTML = cardClone.outerHTML

            if(!savedData.includes(cardHTML)){
                savedData.push(cardHTML)
                localStorage.setItem("accomodation-wishlist", JSON.stringify(savedData))
            }else {
                alert("Карточка уже существует в savedData")
            }
        })
})

window.addEventListener("DOMContentLoaded", loadDataWish)
window.addEventListener("storage", loadDataWish)