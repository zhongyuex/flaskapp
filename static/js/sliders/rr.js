// initialize the slider
var rrSlider = document.getElementById('rr');

noUiSlider.create(rrSlider, {
    start: [10, 30],
    connect: true,
    range: {
        'min': 0,
        'max': 40
    }
});

// update the input
var rrMin = document.getElementById('rr-min');
var rrMax = document.getElementById('rr-max');

rrSlider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        rrMax.value = value;
    } else {
        rrMin.value = value;
    }
});

rrMin.addEventListener('change', function () {
    rrSlider.noUiSlider.set([this.value, null]);
});

rrMax.addEventListener('change', function () {
    rrSlider.noUiSlider.set([null, this.value]);
});
