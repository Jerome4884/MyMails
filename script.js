const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

// document.querySelector('#msg-container').innerHTML += newMessage;

let messagesCount = document.querySelectorAll('p').length;
document.querySelector('#count').textContent = messagesCount;

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = day + "-" + month + "-" + year;
document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

// recup des span contenant les X
function deleteMsg (){
  for(let i = 0; i < document.querySelectorAll('.delete').length; i++ ){
    document.querySelectorAll('.delete')[i].addEventListener('click', function() {
      console.log(this);
      this.parentNode.remove();
      //depression du compteur
      messagesCount--
      document.querySelector('#count').textContent = messagesCount;
    });  
  }
}
deleteMsg();

// suppression du contenu quand on click sur X
//    this.remove();
// for(let i = 0; i < document.querySelectorAll('p').length; i++ ){
//   document.querySelectorAll('.row')[i].addEventListener('click', function() {
//     this.remove();
//   });  
// }

// recuperation btn-add
document.querySelector('#btn-add').addEventListener('click', function() {
  console.log(this);
  let message = document.querySelector('#add-message').value;
  console.log(message);
  document.querySelector('#msg-container').innerHTML += `  
    <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p> ${message} </p>
    </div>
    <span class="delete">✖</span>
  </div>
`;
  messagesCount++;
  document.querySelector('#count').textContent = messagesCount;
  document.querySelector('#add-message').value = '';

  deleteMsg();
})
 
// moteur de recherche

document.querySelector('#btn-search').addEventListener('click', function() {
  console.log(this);
  let textToCompare = document.querySelector('#search-message').value.toLowerCase();
  console.log(textToCompare);

  for(let i = 0; i < document.querySelectorAll('h6').length; i++){
    let name = document.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare);
    //let search = /[a-z]/g;
    //let result = name.match(search);
    if(name === true){
      const showMsg = document.querySelectorAll('h6')[i].parentNode.parentNode;
      showMsg.style.display = 'flex';
    } else {
      const showMsg = document.querySelectorAll('h6')[i].parentNode.parentNode;
      showMsg.style.display = 'none';
    }
    document.querySelector('#search-message').value = '';
  }

})



