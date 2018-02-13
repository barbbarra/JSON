var user = '{"_id":"5a73794999c23affd30c3535",  "index": 0,  "guid": "340d3f77-031b-423f-a01a-4e695e9cdab2",  "isActive": false,  "balance": "$2,126.11",  "picture": "https://source.unsplash.com/sibVwORYqs0/200x200",  "age": 22,  "eyeColor": "green",  "name": {    "first":"Kelsey",    "last":"Gallegos"  },  "work": "Front End Developer",  "email": "kelsey.gallegos@cinesanct.biz",  "phone": "+1 (958) 412-2378",  "address": "134 Cropsey Avenue, Cannondale, Louisiana, 1585",  "about": "Irure Lorem proident do deserunt deserunt aliqua est consectetur. Eiusmod ex qui excepteur voluptate. Ut eu occaecat deserunt aliquip dolor ut laboris magna incididunt est ullamco sint. Et sit anim elit voluptate aute reprehenderit mollit sint et occaecat occaecat proident enim esse. Reprehenderit minim elit non enim reprehenderit laboris voluptate nulla incididunt veniam ex adipisicing.",  "lastConnect": "Wednesday, September 2, 2018",  "latitude": "-68.114463",  "longitude": "101.648502",  "tags": ["sunt", "ipsum", "id", "aliqua", "dolor"],  "greeting": "Hello, Kelsey! You have 9 unread messages.",  "favoriteFruit": "apple"}';

var usuario = JSON.parse(user);

  $(document).ready(function() {

    console.log(usuario)


 $('img.rounded-circle.border-secondary').attr( 'src', usuario.picture );
 $('#name').text(usuario.name.first + " "+ usuario.name.last);
 $('#work').text(usuario.work);
  $('#last-connect').text(usuario.lastConnect);
$('#about').text(usuario.about);
$('#email').append(" " + usuario.email);
$('#phone').append(" " + usuario.phone);
$('#direction').append(" " + usuario.address);
$('#salary').append(" " + usuario.balance);
$('#tags ~ .container .row').empty();
usuario.tags.forEach(function(tag){
 $('#tags ~ .container .row').append('<span class="badge badge-info">'+ tag +'</span>');
});







  });
