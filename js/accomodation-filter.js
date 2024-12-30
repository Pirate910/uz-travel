const rentalFilterBtn = document.querySelectorAll(".cheapest__best button");
const rentalFilterCard = document.querySelectorAll(".accomodation_hotels-cards .accomodation__card-item");
const accomodationInput = document.querySelector(".accomodation__inp");
const searchBtn = document.querySelector(".search__icon");

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

        element.classList.add("hide")

        accomodationInnerElements.forEach(innerElement => {
            console.log(innerElement.innerHTML);

            if(innerElement.innerHTML.toLowerCase() === accomodationInput.value.toLowerCase() || accomodationInput.value == ""){
                element.classList.remove("hide")
            }

        });
    });
});

