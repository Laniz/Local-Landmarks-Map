function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.8206, lng: -111.7830 },
    zoom: 13
  });

  const locations = [
    { lat: 43.8206, lng: -111.7830, title: "Downtown" },
    { lat: 43.8145, lng: -111.7840, title: "Nature Park" },
    { lat: 43.8169, lng: -111.7921, title: "Porter Park" },
    { lat: 43.8237, lng: -111.7821, title: "BYU-Idaho" },
    { lat: 43.8261, lng: -111.7885, title: "Museum of Rexburg" },
    { lat: 43.8122, lng: -111.7735, title: "Rexburg Rapids" },
    { lat: 43.8290, lng: -111.7960, title: "Temple" },
    { lat: 43.8100, lng: -111.7860, title: "Golf Course" },
    { lat: 43.8301, lng: -111.7901, title: "Library" },
    { lat: 43.8180, lng: -111.7810, title: "Bookstore" },
    { lat: 43.8245, lng: -111.7770, title: "Ice Cream Shop" },
    { lat: 43.8195, lng: -111.7910, title: "Movie Theater" },
    { lat: 43.8130, lng: -111.7805, title: "Burger Place" },
    { lat: 43.8155, lng: -111.7877, title: "Pizza Place" },
    { lat: 43.8222, lng: -111.7799, title: "Church" },
    { lat: 43.8272, lng: -111.7755, title: "Playground" },
    { lat: 43.8166, lng: -111.7784, title: "Bakery" },
    { lat: 43.8210, lng: -111.7740, title: "Barber Shop" },
    { lat: 43.8189, lng: -111.7705, title: "Gas Station" },
    { lat: 43.8120, lng: -111.7730, title: "Farmers Market" }
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
