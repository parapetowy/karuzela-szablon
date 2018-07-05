"use strict";


var templateItem = document.getElementById('slajd-item').innerHTML;

Mustache.parse(templateItem);

var listItems = '';

for(var i = 0; i < slajdData.length; i++){
		console.log(slajdData);
		listItems += Mustache.render(templateItem, slajdData[i]);
	}


tutaj.insertAdjacentHTML('beforeend', listItems);

var flkty = new Flickity( '.main-carousel', {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
 });

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonReset = document.querySelector('.buttonReset');

buttonReset.addEventListener( 'click', function( event ) {
   flkty.select( 0 );
});