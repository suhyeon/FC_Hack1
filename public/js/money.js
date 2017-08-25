(function(window,document){
  var latlngObject = {
    lat: 0,
    lng: 0
  };
  var mapXY;
  var random;
  var search = document.querySelector('.search');
  var people = document.querySelector('.people');
  var location = document.querySelector('.location');
  var storeName = document.querySelectorAll('#storeName');
  var storeAddress = document.querySelectorAll('#sotreAddr');
  var i = 0;
function findAddress(i){
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/ShowMeTheMoney', true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        mapXY = JSON.parse(xhr.responseText);
        console.log(mapXY[i].store);
      }
    }
  }
}
function findRandom(){
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/ShowMeTheMoney', true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        mapXY = JSON.parse(xhr.responseText);
        random = Math.floor(Math.random()*mapXY.length);
        console.log(random);
        divide(random);
        findAddress(random);
        //mapParse(random);
        latlngObject.lng = mapXY[random].mapX;
        latlngObject.lat = mapXY[random].mapY;
        map.setCenter(latlngObject);
        marker.setPosition(latlngObject);
        marker.setTitle(mapXY[random].store);
      }
    }
  }
}
function searchStore(e){
  if(!people.value.trim()) return alert('몇 명이서 드시러 가나요?');
  if(!location.value.trim()) return alert('어디서 드실 건가요?');
  if((e.keyCode === 13)||e.type ==='click'){
    findRandom();
  };
}

search.addEventListener('click',searchStore);

function divide(i){
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/ShowMeTheMoney',true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
      if(xhr.status === 200){
        mapXY = JSON.parse(xhr.responseText);
        var sum = mapXY[i].price1 + mapXY[i].price2 + mapXY[i].price3;
        var N = sum/people.value;
        console.log(sum);
      }
    }
  }
}

var map = new naver.maps.Map('map', {
  zoom: 20,
  daraggable : true
});
var marker = new naver.maps.Marker({
  position : new naver.maps.LatLng(latlngObject.lat, latlngObject.lng),
  title: "",
  map: map
});

})(window,document);
//marker.setPosition(latlngObject);
/*function mapParse(){
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/ShowMeTheMoney',true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
      if(xhr.status === 200){
        mapXY = JSON.parse(xhr.responseText);
       console.log(mapXY[i].mapX, mapXY[i].mapY);
       latlngObject.lng = mapXY[i].mapX;
       latlngObject.lat = mapXY[i].mapY;
       map.setCenter(latlngObject);
       marker.setPosition(latlngObject);
       marker.setTitle(mapXY[i].store);
      }
    }
  }
}*/
//console.log(mapXY);
//console.log(latlngObject);