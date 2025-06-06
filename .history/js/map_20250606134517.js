function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.8206, lng: -111.7830 },
    zoom: 13
  });

  const locations = [
    { lat: 43.8200, lng: -111.7830, title: "Location 1" },
    { lat: 43.8210, lng: -111.7840, title: "Location 2" },
    { lat: 43.8220, lng: -111.7850, title: "Location 3" },
    { lat: 43.8230, lng: -111.7860, title: "Location 4" },
    { lat: 43.8240, lng: -111.7870, title: "Location 5" },
    { lat: 43.8250, lng: -111.7880, title: "Location 6" },
    { lat: 43.8260, lng: -111.7890, title: "Location 7" },
    { lat: 43.8270, lng: -111.7900, title: "Location 8" },
    { lat: 43.8280, lng: -111.7910, title: "Location 9" },
    { lat: 43.8290, lng: -111.7920, title: "Location 10" },
    { lat: 43.8300, lng: -111.7930, title: "Location 11" },
    { lat: 43.8310, lng: -111.7940, title: "Location 12" },
    { lat: 43.8320, lng: -111.7950, title: "Location 13" },
    { lat: 43.8330, lng: -111.7960, title: "Location 14" },
    { lat: 43.8340, lng: -111.7970, title: "Location 15" },
    { lat: 43.8350, lng: -111.7980, title: "Location 16" },
    { lat: 43.8360, lng: -111.7990, title: "Location 17" },
    { lat: 43.8370, lng: -111.8000, title: "Location 18" },
    { lat: 43.8380, lng: -111.8010, title: "Location 19" },
    { lat: 43.8390, lng: -111.8020, title: "Location 20" }
  ];

  locations.forEach((loc) => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map: map,
      title: loc.title
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${loc.title}</h3>`
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
