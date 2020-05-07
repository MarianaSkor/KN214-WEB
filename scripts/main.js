window.onscroll = function() {myFunction()};
var navbar = document.getElementById("dws-menu");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky+10) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


let button_up = document.getElementById('upper');

button_up.addEventListener('click', function(event){
    event.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"});
});

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "#2F4F4F";
}