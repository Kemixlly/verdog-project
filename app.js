// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([40.75527789581924, 15.535535290147822], 13);

  var greenIcon = L.icon({
    iconUrl: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img638416f95c3a02.09155291.jpg?lastEdited=1669601029&w=600&h=600&f=webp',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  
  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([51.505, -0.09]).addTo(map);
  marker.bindPopup("Olá! Eu sou o Verdog!").openPopup();

 var marker2 = L.marker([20.308067887461203, -74.29669802433997], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("De tu querida presencia... Comandante Che Guevara").openPopup();
  
});
