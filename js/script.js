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