//array of object
const houses = [
   {
       name: 'Rumah Hakim',
       address: 'Jl. Musyawarah 2-10, Sawah Lama',
       longitude: -6.301437,
       latitude: 106.739366,
       cover: 'https://lh5.googleusercontent.com/p/AF1QipPt6lCNErH7_SWGj5TdLGNx1r_gbo_vEpiOq0X0=w426-h240-k-no',
       price: '$8950'
   },
   {
       name: 'Kost Maman',
       address: 'Jl. Musyawarah No. 99, RT 04 / RW 01',
       longitude: -6.300862,
       latitude: 106.737177,
       cover: 'https://lh5.googleusercontent.com/p/AF1QipN0pzTo61t_lA29kclwTJrSvvaCISvvNBgCFF8t=w408-h306-k-no',
       price: '$6600'
   },
   {
       name: 'Kost Radif',
       address: 'South Tangerang City, Banten 15413',
       longitude: -6.302269,
       latitude: 106.737757,
       cover: 'https://lh5.googleusercontent.com/p/AF1QipN67UAg9nALt2Hr0GWq1hQ2UoT5vHnCojbqp5T8=w408-h248-k-no',
       price: '$9050'
   },
   {
       name: 'Kost Taufik',
       address: 'Gg. Tego 31-65, Sawah Lama, Kec. Ciputat',
       longitude: -6.302173,
       latitude: 106.740879,
       cover: 'https://lh5.googleusercontent.com/p/AF1QipNLaDJOj-eyE6U8hTRb_uwnXbKbIlnlwFdWva68=w426-h240-k-no',
       price: '$8210'
   }
   
]
//looping display card
let card = document.getElementById("cardlist");
for (let i=0; i < houses.length; i++) {
card.innerHTML +=
'<div class="col-6 pb-3"><div class="card relativediv" style="border-radius: 12px;">' +
'<img style="width:235px;height:160px;border-radius:12px 12px 0px 0px;" src="'+ houses[i].cover +'" class="card-img-top border-top-radius:12px;" alt="...">' +
'<button type="button" class="btn btn-success rounded-pill absolutediv" id="">'+houses[i].price+'</button>' +
'<div class="card-body">' +
'<p style="font-size:13px;" class="card-text">' + houses[i].name + '</p>' +
'<p class="card-text">'+ houses[i].address +'</p>' +
'<button style="font-size:13px;" type="button" class="btn btn-outline-secondary rounded-pill float-right" disabled data-toggle="button" aria-pressed="false" autocomplete="off">masuk</button>' +
'<button style="font-size:13px;" type="button" class="btn btn-outline-secondary rounded-pill float left" disabled data-toggle="button" aria-pressed="false" autocomplete="off">keluar</button>' +
'</div></div></div>';

}

//call a leaflet
var mapOptions = {
center: [-6.3013753, 106.7387529,17],
zoom: 16
}

var map = new L.map('mapid', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

//looping marked maps
for (let i=0;i < houses.length;i++) {

// Creating a marker
var marker = L.marker([houses[i].longitude, houses[i].latitude]);
// Adding popup to the marker
marker.bindPopup(
'<div class="card relativemap" style="border-radius: 12px;">' +
'<img style="width:300px;height:200px; border-radius:12px 12px 0px 0px;" src="'+ houses[i].cover +'" class="card-img-top img-fluid" alt="...">' +
'<button type="button" class="btn btn-success rounded-pill absolutemap" id="">'+ houses[i].price + '</button>' +
'<div class="card-body">' +
'<p class="card-text">'+ houses[i].name + '</p>' +
'<p style="font-size:17px;" class="card-text">'+ houses[i].address +'</p>' +
'<button style="font-size:13px;" type="button" class="btn btn-outline-secondary rounded-pill float-right" disabled data-toggle="button" aria-pressed="false" autocomplete="off">masuk</button>' +
'<button style="font-size:13px;" type="button" class="btn btn-outline-secondary rounded-pill float-left" disabled data-toggle="button" aria-pressed="false" autocomplete="off">keluar</button>' +
'</div></div>').openPopup();   
// Adding marker to the map
marker.addTo(map);
}