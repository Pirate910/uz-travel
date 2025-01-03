function renderFav () {

    document
    .querySelectorAll(".discover__cards .item__img button")
    .forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const card = document.querySelectorAll(".discover__cards .cards__item")[index];

            // Копируем содержимое карточки (глубокое клонирование)
            const cardClone = card.cloneNode(true);

            // Проверяем изображение в карточке
            const img = cardClone.querySelector("img");
            if (img) {
                const imgSrc = img.src; // Путь к изображению
                img.setAttribute("src", imgSrc); // Убедитесь, что путь сохранен
            }

            // Получаем данные из localStorage
            let savedData = JSON.parse(localStorage.getItem("test")) || [];
            const cardHTML = cardClone.outerHTML;

            // Проверка на наличие дубликатов
            if (!savedData.includes(cardHTML)) {
                savedData.push(cardHTML); // Сохраняем HTML-код клонированной карточки
                localStorage.setItem("test", JSON.stringify(savedData));
            } else {
                alert("Карточка уже существует в savedData");
            }

            // Обновляем SVG
            const svg = btn.querySelector("svg path");
            svg.setAttribute(
                "d",
                "M9.99998 2.00798C9.02673 1.074 7.70539 0.5 6.24998 0.5C3.25844 0.5 0.833313 2.92512 0.833313 5.91667C0.833313 11.2235 6.64193 14.1542 9.01147 15.1289C9.64962 15.3914 10.3503 15.3914 10.9885 15.1289C13.358 14.1542 19.1666 11.2235 19.1666 5.91667C19.1666 2.92512 16.7415 0.5 13.75 0.5C12.2946 0.5 10.9732 1.074 9.99998 2.00798Z"
            );
            svg.setAttribute("fill", "#05DBF3");
        });
    });

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

}

renderFav()

let first__active__btn = document.querySelector(".first__active-btn"),
    second__active__btn = document.querySelector(".second__active-btn"),
    discover__cards = document.querySelector(".discover__cards"),
    discover_forein_cards = document.querySelector(".discover_forein-cards"),
    discover__bottom_btn = document.querySelector(".discover__bottom-btn button"),
    discover__bottom_btn_div = document.querySelector(".discover__bottom-btn");

first__active__btn.addEventListener("click", () => {
    first__active__btn.classList.remove("second__active-btn");
    first__active__btn.classList.add("first__active-btn");
    second__active__btn.classList.remove("first__active-btn");
    second__active__btn.classList.add("second__active-btn");
    discover_forein_cards.style.display = "none";
    discover__cards.style.display = "flex";
});

second__active__btn.addEventListener("click", () => {
    second__active__btn.classList.remove("second__active-btn");
    second__active__btn.classList.add("first__active-btn");
    first__active__btn.classList.remove("first__active-btn");
    first__active__btn.classList.add("second__active-btn");
    discover__cards.style.display = "none";
    discover_forein_cards.style.display = "flex";
});

discover__bottom_btn.addEventListener("click", () => {
    discover__cards.style.display = "flex";
    discover_forein_cards.style.display = "flex";
    discover__bottom_btn_div.style.display = "none";
});

// Загрузка данных при загрузке страницы и изменении в localStorage
window.addEventListener("DOMContentLoaded", loadData);
window.addEventListener("storage", loadData);