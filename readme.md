## Overview

**Project Title**: Local Landmarks Map

**Project Description**:  
An interactive web-based map that displays local landmarks using the Google Maps JavaScript API. It allows users to view categorized markers (e.g., parks, shops, museums), see their own location, and get navigation directions to any marker. Users can also select their preferred travel mode: driving, walking, or bicycling.

**Project Goals**:  
* Display a customizable map with 20 interactive markers  
* Provide filter buttons to toggle visible marker types  
* Show the user's location on the map  
* Enable route navigation from user location to a selected marker

---

## Instructions for Build and Use

Steps to build and/or run the software:

1. Clone or download the repository into a local folder  
2. Ensure internet access is available (Google Maps loads online)  
3. Open `index.html` using Live Server in VS Code or any local web server (e.g., Python's `http.server`)

Instructions for using the software:

1. Choose a travel mode from the dropdown menu  
2. Filter landmarks using the provided buttons (optional)  
3. Click any marker → Click "Show Route" to generate a path from your location  
4. Click "Hide Route" to remove the path  

---

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Visual Studio Code (1.80+ recommended)
* Google Chrome or any modern browser
* Google Maps JavaScript API (enabled in Google Cloud Console)
* Live Server extension (if using VS Code)

---

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript/overview)
* [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
* [Google Cloud Console](https://console.cloud.google.com/)

---

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Add custom icons for each marker type  
* [ ] Implement step-by-step turn directions in a sidebar  
* [ ] Enable users to search and add new locations dynamically  
* [ ] Add mobile responsiveness for smaller screen devices  
* [ ] Load marker data from an external JSON file or API  
