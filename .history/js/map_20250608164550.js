let map;
let markers = [];
let directionsService;
let directionsRenderer;
let userLocation = null;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.8206, lng: -111.7830 },
    zoom: 13
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: false });
  directionsRenderer.setMap(map);

//   43.823437901010045, -111.79006926283063 
// 43.82257094654463, -111.7987381621917
// 43.813869259747484, -111.79832660622071
// 43.82232365675065, -111.79183609799912
// 43.82760734419121, -111.77379970076517
// 43.82578811295998, -111.80527330813213
// 43.834673545256045, -111.80141917320746

  const locations = [
    { lat: 43.8234, lng: -111.7900, title: "Porter Park", type: "park" },
    { lat: 43.8210, lng: -111.7840, title: "Location 2", type: "shop" },
    { lat: 43.8220, lng: -111.7850, title: "Location 3", type: "museum" },
    { lat: 43.82257094654463, lng: -111.7987381621917, title: "Park Street Park", type: "park" },
    { lat: 43.8240, lng: -111.7870, title: "Location 5", type: "shop" },
    { lat: 43.8250, lng: -111.7880, title: "Location 6", type: "museum" },
    { lat: 43.813869259747484, lng: -111.79832660622071, title: "Continental Park", type: "park" },
    { lat: 43.8270, lng: -111.7900, title: "Location 8", type: "shop" },
    { lat: 43.8280, lng: -111.7910, title: "Location 9", type: "museum" },
    { lat: 43.82232365675065, lng: -111.79183609799912, title: "Rexburg Spary Park", type: "park" },
    { lat: 43.8300, lng: -111.7930, title: "Location 11", type: "shop" },
    { lat: 43.8310, lng: -111.7940, title: "Location 12", type: "museum" },
    { lat: 43.82760734419121, lng: -111.77379970076517, title: "Smith Park", type: "park" },
    { lat: 43.8330, lng: -111.7960, title: "Location 14", type: "shop" },
    { lat: 43.8340, lng: -111.7970, title: "Location 15", type: "museum" },
    { lat: 43.82578811295998, lng: -111.80527330813213, title: "Evergreen Park", type: "park" },
    { lat: 43.8360, lng: -111.7990, title: "Location 17", type: "shop" },
    { lat: 43.8370, lng: -111.8000, title: "Location 18", type: "museum" },
    { lat, lng: -111.8010, title: "Location 19", type: "park" },
    { lat: 43.8390, lng: -111.8020, title: "Location 20", type: "shop" }
  ];

  locations.forEach((loc) => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map: map,
      title: loc.title
    });

    marker.type = loc.type;

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <h3>${loc.title}</h3>
        <p>Type: ${loc.type}</p>
        <button id="route-btn" onclick="toggleRoute(this, ${loc.lat}, ${loc.lng})">Show Route</button>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    markers.push(marker);
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const userMarker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your Location",
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 14,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3
          }
        });

        map.setCenter(userLocation);
      },
      () => {
        alert("Geolocation failed or was denied.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function filterMarkers(type) {
  markers.forEach(marker => {
    if (type === 'all' || marker.type === type) {
      marker.setMap(map);
    } else {
      marker.setMap(null);
    }
  });
}

function startNavigation(destLat, destLng) {
  if (!userLocation) {
    alert("User location not available yet.");
    return;
  }

  const request = {
    origin: userLocation,
    destination: { lat: destLat, lng: destLng },
    travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService.route(request, (result, status) => {
    if (status === "OK") {
      directionsRenderer.setDirections(result);
    } else {
      alert("Could not display directions due to: " + status);
    }
  });
}

function clearRoute() {
  directionsRenderer.set('directions', null);
}

function toggleRoute(button, lat, lng) {
  if (button.textContent === "Show Route") {
    startNavigation(lat, lng);
    button.textContent = "Hide Route";
  } else {
    clearRoute();
    button.textContent = "Show Route";
  }
}
