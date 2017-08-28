let bookList = [
  { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];
const tab = document.querySelector('.book-table');
function insertBook(){
  bookList.map((book,i)=>{
    tab.insertAdjacentHTML('beforeend', `<tr>
  <td><input type="checkbox" id="${book.id}"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
  </tr>`);
  });  
};
insertBook();

/*
  `<tr>
    <td><input type="checkbox" id="${book.id}"></td>
    <th>${book.id}</th>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.price}</td>
  </tr>`
*/
//function bookPost(bookList){
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/id',true);
//};

//var xhr = new XMLHttpRequest();
//xhr.open('get', '/id', true);

// 1. Delete Book 버튼이 클릭되면 체크된 book 리스트를 삭제
// 2. 최상위 체크박스를 클릭하면 전체 체크박스 토글(on/off)
// 3. Add Book 버튼이 클릭되면 .add-form를 표시
// 4. Add Book 버튼이 클릭되면 Cancel 버튼 표시
// 5. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되었으면 Add Book 버튼이 클릭 시, bookList 객체에 .add-form의 입력값을 추가하고 DOM 갱신
// 6. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되지 않았으면 alert으로 입력되지 않았음을 경고
// 7. Cancel 버튼이 클릭되면 .add-form과 Cancel 버튼 비표시
// 8. 100,000숫자 표현식
// (*) 모든 선언문의 전역 선언 금지


