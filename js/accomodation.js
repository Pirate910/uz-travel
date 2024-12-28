const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider__value");

slider.addEventListener("input", () => {
    const value = slider.value;
    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;

    sliderValue.textContent = `$${value}`;

    const sliderWidth = slider.offsetWidth;
    const thumbOffset = (value - slider.min) / (slider.max - slider.min);
    sliderValue.style.left = `calc(${thumbOffset * 100}% - ${
        thumbOffset * 2
    }px)`;

    slider.style.background = `linear-gradient(to right, #00d2ff 0%, #00d2ff ${percentage}%, #e0e0e0 ${percentage}%)`;
});

const select = document.getElementById("accomodation__type-select");

select.addEventListener("change", function () {
    const placeholderOption = select.querySelector('option[value=""]');
    if (select.value !== "") {
        placeholderOption.style.display = "none";
    } else {
        placeholderOption.style.display = "block";
    }
});


document.getElementById('myDate').addEventListener('focus', function() {
    this.placeholder = '';
  });
  
  document.getElementById('myDate').addEventListener('blur', function() {
    if (!this.value) {
      this.placeholder = 'Select a date';
    }
  });