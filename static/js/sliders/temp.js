// initialize the slider
var tempSlider = document.getElementById('temp');

noUiSlider.create(tempSlider, {
    start: [36.5, 39],
    connect: true,
    range: {
        'min': 30,
        'max': 40
    }
});

// update the input
var tempMin = document.getElementById('temp-min');
var tempMax = document.getElementById('temp-max');

tempSlider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        tempMax.value = value;
    } else {
        tempMin.value = value;
    }
});

tempMin.addEventListener('change', function () {
    tempSlider.noUiSlider.set([this.value, null]);
});

tempMax.addEventListener('change', function () {
    tempSlider.noUiSlider.set([null, this.value]);
});
