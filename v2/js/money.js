(function(window,document){
  var latlngObject = {
    lat: 0,
    lng: 0
  };
  var mapXY;
  var random;
  var people = document.getElementById('person');
  var area = document.getElementById('area');
  var search = document.querySelector('.btn-primary');
  var search2 = document.getElementById('mobile_cate');
  var info = document.querySelector('.storeInfo');
  var menu = document.querySelectorAll('.menuName');
  var Sprice = document.querySelector('.price');
  var span = document.querySelectorAll('span');
  var addr = document.getElementById('sotreAddr');
  var sname = document.querySelector('#storeName');
  var img = document.querySelectorAll('.menuImg img');
  //console.log(img);
  var i = 0;

function findAddress(i){
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/ShowMeTheMoney', true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        mapXY = JSON.parse(xhr.responseText);
        var sum = mapXY[i].price1 + mapXY[i].price2 + mapXY[i].price3;
        var N = sum/people.value;
        var regx = /\B(?=(\d{3})+(?!\d))/g;
        //Sprice.insertAdjacentHTML('beforeend','<span>'+sum+' / 인원수 : '+people.value+' = '+Math.round(N)+'</span>');
        Sprice.innerHTML = '<span>시그니쳐 메뉴3개 가격 / 인원수 = N/1원</span><span>'+sum.toString().replace(regx, ",")+' / 인원수 : '+people.value+' = '+Math.round(N).toString().replace(regx, ",")+'</span>';
        menu[0].innerHTML = mapXY[i].menu1;
        menu[1].innerHTML = mapXY[i].menu2;
        menu[2].innerHTML = mapXY[i].menu3;
        sname.innerHTML=mapXY[i].store;
        img[0].src=mapXY[i].img1;
        img[1].src=mapXY[i].img2;
        img[2].src=mapXY[i].img3;
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
        findAddress(random);
        marker.setTitle(mapXY[random].store);
        naver.maps.Service.geocode({
          address: mapXY[random].addr,
        }, function(status, response){
          if(status!==naver.maps.Service.Status.OK){
            return alert('something wrong!');
          }
          var result = response.result,
          items = result.items;
          addr.innerHTML=items[0].address;
          latlngObject.lng = items[0].point.x;
          latlngObject.lat = items[0].point.y;
          map.setCenter(latlngObject);
          marker.setPosition(latlngObject);
        });
      }
    }
  }
}
function searchStore(e){
  if((e.keyCode === 13)||e.type ==='click'){
   if(!area.value.trim()) { alert('어디서 드실 건가요?'); area.focus();  return false;}
   if(!people.value.trim()) { alert('몇 명이서 드시러 가나요?'); people.focus(); return false; }
     findRandom();
  };
}

search.addEventListener('click',searchStore);
search2.addEventListener('click', searchStore);

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
