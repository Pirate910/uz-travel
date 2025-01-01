const searchInp = document.querySelector(".search__input")
const searchBtn = document.querySelector(".search__btn")
const discoverCards = document.querySelectorAll(".discover__cards .cards__item")
const foreignDiscoverCards = document.querySelectorAll(".discover_forein-cards .cards__item")
const destCards = document.querySelectorAll(".destinations__cards .destinations__cards-item")
const popularPlaces = document.querySelector(".destinations__name")
const discoverTitle = document.querySelector(".dicover_title")

searchBtn.addEventListener("click", (e) => {
    discoverCards.forEach(cardEl => {

        const cardInfo = cardEl.querySelectorAll(".item_info .item__info-title")

        cardInfo.forEach(title => {
            title.classList.remove("highlight")

            if(searchInp.value.toLowerCase().trim() == title.innerHTML.toLowerCase().trim()){
                title.scrollIntoView({ behavior: 'smooth', block: "nearest"});

                title.classList.add("highlight")

                setTimeout(() => {
                    title.classList.remove("highlight")
                }, 2000);
            }
        })


    })

    foreignDiscoverCards.forEach(cardEl => {
        const cardInfo = cardEl.querySelectorAll(".item_info .item__info-title")

        cardInfo.forEach(title => {
            title.classList.remove("highlight")

            if(searchInp.value.toLowerCase().trim() == title.innerHTML.toLowerCase().trim()){
                discoverTitle.scrollIntoView({ behavior: 'smooth', block: "nearest"});

                title.classList.add("highlight")

                setTimeout(() => {
                    title.classList.remove("highlight")
                }, 2000);
            }
        })

    })

    destCards.forEach(cardEl => {

        const cardInfo = cardEl.querySelector(".destinations__cards-item-name")

        cardInfo.classList.remove("highlight")

        if(searchInp.value.toLowerCase().trim() == cardInfo.innerHTML.toLowerCase().trim()){

            popularPlaces.scrollIntoView({behavior : "smooth", block: "center"})
            cardInfo.classList.add("highlight")

            setInterval(() => {
                cardInfo.classList.remove("highlight")
            }, 2000);

        }

    })

})