

function initMap()  {
    const map = L.map('map').setView([39.955, -75.236], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  map.CatchmentLayer = 
    L.geoJSON(null, {
        style: {color: "#000000"},
      })
       .bindTooltip("Sayre High School Catchement Area")
      .addTo(map);

      
    map.SayreLayer = L.geoJSON(null, {
        pointToLayer: (feature, latlng) => L.circleMarker(latlng),
       // style: {
       //   color: "#6cae75",
       //   fillColor: "#c4dfc8",
       //   radius: 5,
       //   weight: 1.5,
       // },
      })
        .bindTooltip(layer => {
        return layer.feature.properties['name'];
        })
      .addTo(map);

   

    return map;

};



export {
    initMap
}