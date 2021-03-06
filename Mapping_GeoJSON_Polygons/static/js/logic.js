// // Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/CS50Hsinyu/Mapping_Earthquakes/main/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";


// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/CS50Hsinyu/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/torontoRoutes.json";



// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/CS50Hsinyu/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/majorAirports.json";

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>")
//     }

//   }).addTo(map);


// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//     console.log(layer);
//         layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2><hr><h2>Airport name: "+feature.properties.name+"</h2>");
//     }
// }).addTo(map);



// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
//    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJson(data).addTo(map);
//});


// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
//    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  // add a popup marker that displays all airports' codes and names.
//  L.geoJson(data,{
//    onEachFeature: function(feature, layer) {
//        layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2><hr><h2>Airport name: "+feature.properties.name+"</h2>");  
//    }
//  }).addTo(map);
//});




// Grabbing our GeoJSON data.
//d3.json(torontoData).then(function(data) {
//  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data,{
//    color:"#ffffa1",
//    weightL2,
//    onEachFeature:function(feature,layer){
//      layer.bindPopup("<h2>Airport line: " + feature.properties.airline+"</h2><hr><h2>Destination: "+feature.properties.dst+"</h2>")
//    }
//}).addTo(map);
//});



// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data).addTo(map);
//});


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
    "color": "blue",
    "weight": 1,
    "fillColor":"yellow",
    onEachFeature:function(feature,layer){
      layer.bindPopup("<h2>Airport line: " + feature.properties.AREA_NAME+"</h2>")
    }
}).addTo(map);
});

