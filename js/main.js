var username = 'Zgjimzhubaj'
var password = 'pejahill'

function login(){

  var userinput = document.getElementById('username').value 
  var passinput = document.getElementById('password').value 

  if (username == userinput & password == passinput){
    window.open('index.html')
  }

  else {
    document.getElementById('rez').innerHTML = 'incorrect username or password'

  }
}

//------------------------------------------------------------------------------

var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
} 

// -----------------------------------------------------------------------------

