const userName = document.getElementById('userName');
const password = document.getElementById('pass');
const formLogin = document.getElementById('formLogin');
let flagUser;
let currentData = [];
window.onload = () => {
    createAJAXGetAllUser();
    formLogin.addEventListener('submit', onSubmitForm);
};

function onSubmitForm(e) {
    e.preventDefault();
    createAJAXGetAllUser();
    setTimeout(
      resultRedirect, 1000
    );
}
function resultRedirect () {
  verifyUser(currentData);
  if(flagUser) {
    window.location.replace("http://localhost:3000/index.html");
  } else {
    createAJAXVerifyUser();
    window.location.replace("http://localhost:3000/index.html");
  }
}

function createAJAXVerifyUser() {
  const data = JSON.stringify({
    "name": `${userName.value}`,
    "token": `${password.value}`
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "http://localhost:3000/api/user");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);
}

function createAJAXGetAllUser() {
  
  fetch('http://localhost:3000/api/user', {
method: 'GET',
}).then(res=>res.json())
.then(res=>currentData=res);
}

function verifyUser (arr) {
  for (let i =0; i < arr.length; i++) {
    if(arr[i].token === password.value) {
      flagUser = true;
      return;
    }
  }
  flagUser = false;
}