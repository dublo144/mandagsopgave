// Pre loader
$(window).on('load', function () {
  var tl = new TimelineMax();
      tl.to(".loader1-left",1.1,{x:"-100%",ease: Expo.easeOut})
      .to(".loader1-right",1.1,{x:"100%",ease: Expo.easeOut},"-=1.1")
      .to(".loader2-left",.8,{x:"-100%",ease: SlowMo.ease.config(0.3, 0.7, false)},"-=.8")
      .to(".loader2-right",.8,{x:"100%",ease: SlowMo.ease.config(0.3, 0.7, false)},"-=.8")
      .to(".loader3-left",.5,{x:"-100%",ease: Expo.easeOut})
      .to(".loader3-right",.5,{x:"100%",ease: Expo.easeOut},"-=.5")
      .to(".loader4-left",.5,{x:"-100%",ease: Expo.easeOut})
      .to(".loader4-right",.5,{x:"100%",ease: Expo.easeOut})
});


// GOOGLE MAPS
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var cphBusiness = {lat: 55.770170, lng: 12.512299};

  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15, 
        center: cphBusiness, 
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
      });
      
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: cphBusiness, map: map});
}