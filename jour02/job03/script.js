window.addEventListener("DOMContentLoaded", (event) => {
    var getbutton = document.getElementById("button");
    var count = document.getElementById("compteur");

    function addone(){
        getbutton.addEventListener('click', event =>{
            count.innerHTML++;
        });
    }
    addone();
});