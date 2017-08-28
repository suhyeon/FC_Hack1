(function(window,document){
  var Mstore;
  var inputStore = document.querySelector('#storeName');
  var inputAddr = document.querySelector('#addr');
  var inputOne = document.querySelector('#menu1');
  var inputPone = document.querySelector('#price1');
  var inputTwo = document.querySelector('#menu2');
  var inputPtwo = document.querySelector('#price2');
  var inputThree = document.querySelector('#menu3');
  var inputPthree = document.querySelector('#price3');
  var input = document.querySelectorAll('input[type=text]');
 var add = document.querySelector('.btn-success');
var can = document.querySelector('.btn-primary');
can.addEventListener('click',function(){
  location.href = "index.html"; 
});
function addListItem(e){
      var input = document.querySelectorAll('input[type=text]');
      if(inputStore.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputAddr.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputOne.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputPone.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputTwo.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputPtwo.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputThree.value=="") { return alert('전부 다 필수항목입니다.');};
      if(inputPthree.value=="") { return alert('전부 다 필수항목입니다.');};
      var store = {
        store: inputStore.value,
        menu1: inputOne.value,
        price1: inputPone.value,
        menu2: inputTwo.value,
        price2: inputPtwo.value,
        menu3: inputThree.value,
        price3: inputPthree.value,
        addr: inputAddr.value
      }
      const req = new XMLHttpRequest();
      req.open("POST", "/ShowMeTheMoney"),true;
         // HTTP 통신패킷의 header 속성을 바꿔주는 API content-type을 application/json으로 변경시켜줌
      req.setRequestHeader('Content-type', 'application/json');
    // data를 문자열화 시켜서 HTTP 통신 패킷의 body에 넣어서 보냄
    req.send(JSON.stringify(store));
    location.href = "index.html";
};
add.addEventListener('click', addListItem);
})(window,document);