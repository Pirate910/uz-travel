const rentalFilterBtn = document.querySelectorAll(".cheapest__best button");
const rentalFilterCard = document.querySelectorAll(".accomodation_hotels-cards .accomodation__card-item");
const accomodationInput = document.querySelector(".accomodation__inp");
const searchBtn = document.querySelector(".search__icon");
const rateBtn = document.querySelectorAll(".stars div")
const regionInput = document.querySelector(".region__inp")

// rateBtn.forEach(item => {
//     item.addEventListener("click", (e) => {
//         console.log(e.target.getAttribute("id"))
//     })
// })

function renderFilteredRent(e) {
    const target = e.target;

    rentalFilterBtn.forEach(btn => btn.classList.remove("cheapest__best-active-btn"));
    target.classList.add("cheapest__best-active-btn");

    rentalFilterCard.forEach(item => {
        item.classList.add("hide");

        if (item.getAttribute("data-filter") == target.getAttribute("data-filter") || target.getAttribute("data-filter") == "all") {
            item.classList.remove("hide");
        }
    });
}

rentalFilterBtn.forEach(button => button.addEventListener("click", renderFilteredRent));

searchBtn.addEventListener("click", (e) => {
    rentalFilterCard.forEach(element => {
        // Используем querySelectorAll для выбора всех внутренних элементов
        const accomodationInnerElements = element.querySelectorAll(".accomodation__card-item-desc .accomodation__card-item-title");
        const accomodationAddress = element.querySelectorAll(".accomodation__card-item-desc .acco__item-address")
        // const accomodationRate = element.querySelectorAll(".accomodation__card-item-desc span")
        // accomodationRate.forEach(item => {
        //     console.log(item.textContent)
        // })

        element.classList.add("hide")

        accomodationInnerElements.forEach(innerElement => {

            accomodationAddress.forEach(innerItem => {

            // innerItem.innerHTML.toLowerCase().trim() === regionInput.value.toString().toLowerCase().trim()

                if(innerElement.innerHTML.toLowerCase().trim() === accomodationInput.value.toString().toLowerCase().trim()){
                    element.classList.remove("hide")
                }else if(innerItem.innerHTML.toLowerCase().trim() === regionInput.value.toString().toLowerCase().trim()){
                    element.classList.remove("hide")
                }else if(regionInput.value.toString().toLowerCase().trim() == "" && accomodationInput.value.toString().toLowerCase().trim() == ""){
                    element.classList.remove("hide")
                }

                console.log(innerItem.innerHTML)
                console.log(regionInput.value)


            })
    

        });
    });
});

rateBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        // console.log(e.target.getAttribute("id"))

        const elementId = e.target.getAttribute("id")

        console.log(elementId)

        rentalFilterCard.forEach(element => {

            element.classList.toggle("hide")

            const ratingElement = element.querySelector(".price__degree p")

            console.log(ratingElement.getAttribute("data-filter"))

            if(ratingElement.getAttribute("data-filter") === elementId){
                element.classList.remove("hide")
            }

        })
    })
})