"use strict";


var templateItem = document.getElementById('slaid-template').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for (var i = 0; i < slaidData.length; i++) {
    console.log(slaidData);
    listItems += Mustache.render(templateItem, slaidData[i]);
}

var here = document.getElementById('here');

here.insertAdjacentHTML('beforeend', listItems);

var flkty = new Flickity('.main-carousel', {
    // options
    cellAlign: 'left',
    contain: true,
    hash: true,
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

var buttonReset = document.querySelector('.button-reset');

buttonReset.addEventListener('click', function(event) {
    flkty.select(0);
});