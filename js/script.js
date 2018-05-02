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

      DG.marker([46.447804, 30.745851]).addTo(map).bindPopup('Мы здесь!');
   });

});


    

    /* scroll down button */
   function slowScroll(id){
      var offset = 0;
      $('html, body').animate({
         scrollTop: $(id).offset ().top - offset
      }, 2000);
      return false;
   }