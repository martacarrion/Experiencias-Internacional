var map = L.map('map').setView([48, 8], 4);
var geojson;

// guardar marcadores para filtros
let universityMarkers = [];

// mapa base
L.tileLayer(
'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
{
 attribution: '&copy; OpenStreetMap & Carto'
}).addTo(map);


// PAÍSES ERASMUS
const countryMap = {

"ALEMANIA":"Germany",
"FRANCIA":"France",
"ITALIA":"Italy",
"AUSTRIA":"Austria",
"BÉLGICA":"Belgium",
"SUIZA":"Switzerland",
"BULGARIA":"Bulgaria",
"REPÚBLICA CHECA":"Czechia",
"GRECIA":"Greece",
"CROACIA":"Croatia",
"HUNGRÍA":"Hungary",
"IRLANDA":"Ireland",
"NORUEGA":"Norway",
"HOLANDA":"Netherlands",
"PORTUGAL":"Portugal",
"POLONIA":"Poland",
"RUMANÍA":"Romania",
"SERBIA":"Serbia",
"SUECIA":"Sweden",
"FINLANDIA":"Finland",
"ESLOVENIA":"Slovenia",
"ESLOVAQUIA":"Slovakia"

};

const erasmusCountries = {

"Germany": { label:"ALEMANIA", color:"#D0003A" },
"France": { label:"FRANCIA", color:"#FF5733" },
"Italy": { label:"ITALIA", color:"#FF7A2F" },
"Austria": { label:"AUSTRIA", color:"#FFB000" },

"Belgium": { label:"BÉLGICA", color:"#8E0D3B" },
"Switzerland": { label:"SUIZA", color:"#D0003A" },

"Bulgaria": { label:"BULGARIA", color:"#FF5733" },
"Czechia": { label:"REPÚBLICA CHECA", color:"#FF7A2F" },

"Greece": { label:"GRECIA", color:"#FFB000" },
"Croatia": { label:"CROACIA", color:"#D0003A" },

"Hungary": { label:"HUNGRÍA", color:"#FF5733" },
"Ireland": { label:"IRLANDA", color:"#FF7A2F" },

"Norway": { label:"NORUEGA", color:"#FFB000" },
"Netherlands": { label:"HOLANDA", color:"#D0003A" },

"Portugal": { label:"PORTUGAL", color:"#FF5733" },
"Poland": { label:"POLONIA", color:"#FF7A2F" },

"Romania": { label:"RUMANÍA", color:"#FFB000" },
"Serbia": { label:"SERBIA", color:"#8E0D3B" },

"Sweden": { label:"SUECIA", color:"#D0003A" },
"Finland": { label:"FINLANDIA", color:"#FF5733" },

"Slovenia": { label:"ESLOVENIA", color:"#FF7A2F" },
"Slovakia": { label:"ESLOVAQUIA", color:"#FFB000" }

};


// CREAR ICONO SEGÚN PAÍS
function createCountryIcon(country){

 const geoName = countryMap[country] || country;

 const color = erasmusCountries[geoName]
  ? erasmusCountries[geoName].color
  : "#d33";

 return L.divIcon({
  className:"uni-marker",
  html:`<div class="marker-pin" style="background:${color}"></div>`,
  iconSize:[18,18],
  iconAnchor:[9,9]
 });

}


// COLOR PAÍS
function getColor(country){
 return erasmusCountries[country]
  ? erasmusCountries[country].color
  : "transparent";
}


// ESTILO PAÍSES
function style(feature){

 const country = feature.properties.name;

 return {
  fillColor:getColor(country),
  weight:1,
  opacity:1,
  color:"#999",
  fillOpacity:erasmusCountries[country] ? 0.7 : 0
 };

}


// HOVER PAÍS
function highlightFeature(e){

 var layer = e.target;

 layer.setStyle({
  weight:3,
  color:"#222",
  fillOpacity:0.9
 });

 layer.bringToFront();

}


// RESET HOVER
function resetHighlight(e){
 geojson.resetStyle(e.target);
}


// INTERACCIÓN PAÍSES
function onEachFeature(feature, layer){

 const country = feature.properties.name;

 if(erasmusCountries[country]){

  const data = erasmusCountries[country];

  layer.bindTooltip(
   data.label,
   {
    permanent:true,
    direction:"center",
    className:"country-label"
   }
  );

  layer.on({
   mouseover:highlightFeature,
   mouseout:resetHighlight
  });

 }

}


// CARGAR GEOJSON
fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
.then(res=>res.json())
.then(data=>{

 geojson = L.geoJSON(data,{
  style:style,
  onEachFeature:onEachFeature
 }).addTo(map);

});


// CREAR HTML PLAZAS
function createPlacesHTML(places){

 let html=`<div class="uni-places-title">PLAZAS</div>`;
 html+=`<div class="places-container">`;

 for(const degree in places){

  const value=places[degree];

  if(value>0){

   html+=`
<div class="place-badge degree-${degree}">
<span>${degree}</span>
<span>${value}</span>
</div>
`;

  }

 }

 html+=`</div>`;
 return html;

}


// AÑADIR UNIVERSIDADES
universities.forEach(u=>{

 const marker=L.marker(
  [u.lat,u.lon],
  {icon:createCountryIcon(u.country)}
 )
 .addTo(map)

 .bindTooltip(
  u.university,
  {
   direction:"top",
   offset:[0,-12],
   opacity:0.9,
   className:"uni-tooltip"
  }
 )

 .bindPopup(`

<div class="uni-popup">

<div class="uni-title">${u.university}</div>

<div class="uni-location">
${u.city} · ${u.country}
</div>

${createPlacesHTML(u.places)}

<div class="uni-buttons">

<a href="${u.website}" target="_blank" class="uni-btn web">
🌐 Universidad
</a>

<a href="${u.experience}" target="_blank" class="uni-btn exp">
📖 Experiencias
</a>

</div>

</div>

`);

 universityMarkers.push({
  marker:marker,
  places:u.places,
  country:u.country
 });

});


// FILTROS
function updateFilters(){

 const selected=[];

 document
 .querySelectorAll("#filters input:checked")
 .forEach(cb=>selected.push(cb.value));

 universityMarkers.forEach(item=>{

  let visible=false;

  selected.forEach(degree=>{

   if(item.places[degree] && item.places[degree]>0){
    visible=true;
   }

  });

  if(visible){

   if(!map.hasLayer(item.marker)){
    item.marker.addTo(map);
   }

  }else{

   if(map.hasLayer(item.marker)){
    map.removeLayer(item.marker);
   }

  }

 });

 updateCountryStyles();

}


document
.querySelectorAll("#filters input")
.forEach(cb=>cb.addEventListener("change",updateFilters));


// PAÍSES ACTIVOS
function getActiveCountries(){

 const countries={};

 universityMarkers.forEach(item=>{

  if(map.hasLayer(item.marker)){

   if(!countries[item.country]){
    countries[item.country]=0;
   }

   countries[item.country]++;

  }

 });

 return countries;

}


// ACTUALIZAR ESTILO PAÍSES
function updateCountryStyles(){

 const activeCountries=getActiveCountries();

 geojson.eachLayer(layer=>{

  const country=layer.feature.properties.name;

  if(activeCountries[country]){

   layer.setStyle({fillOpacity:0.7});

  }else{

   layer.setStyle({fillOpacity:0.15});

  }

 });

}


// BUSCADOR
function normalizeText(text){
 return text
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g,"");
}


const searchBox=document.getElementById("search-box");

searchBox.addEventListener("input",function(){

 const query=normalizeText(this.value);

 universityMarkers.forEach(item=>{

  const name=normalizeText(
   item.marker.getTooltip().getContent()
  );

  if(name.includes(query)){

   if(!map.hasLayer(item.marker)){
    item.marker.addTo(map);
   }

  }else{

   if(map.hasLayer(item.marker)){
    map.removeLayer(item.marker);
   }

  }

 });

});