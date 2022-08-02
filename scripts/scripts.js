//Variables
var headPage = document.getElementById("head");
var headLogo = document.getElementById("headLogo");


window.scrollBy(1, 1);
window.onscroll = function(){
    if (window.scrollY == 0){
        headPage.classList.remove("bgChange1");
        headLogo.classList.remove("bgChange2");
    }else{
        headPage.classList.add("bgChange1");
        headLogo.classList.add("bgChange2");
    }
}