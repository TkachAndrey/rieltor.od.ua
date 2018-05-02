$(document).ready(function(){
  
  $(".btn-nav").on("click", function(){
  	var target = $(this).data("target");
  	$(target).toggleClass("nav__list--open");
  });


   // 2gis map

   DG.then(function() {
       map = DG.map('map', {
           'center': [46.447667, 30.746087],
           'zoom': 16
       });
   });
   var myIcon = DG.icon({
    iconUrl: 'my-icon.png',
    iconRetinaUrl: 'my-icon@2x.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowRetinaUrl: 'my-icon-shadow@2x.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
   });


   DG.marker([46.447667, 30.746087], {icon: myIcon}).addTo(map).bindPopup('Мы здесь!');


});

