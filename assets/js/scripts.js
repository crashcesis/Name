var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');


var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtnReg");
var button = document.getElementsByClassName("regmodal-link")[0];

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

btn.onclick = function() {
    modal.style.display = "block"; 
}

btn2.onclick = function() {
    modal2.style.display = "block"; 
}

button.onclick = function() {
	modal.style.display = "none";
    modal2.style.display = "block"; 
}

span.onclick = function() {
    modal.style.display = "none";

}

span2.onclick = function() {
    modal2.style.display = "none";

}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
