function initMap() {
  // Create a basic map centered on Rexburg, Idaho
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.8206, lng: -111.7830 },
    zoom: 13,
  });
}
