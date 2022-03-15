window.addEventListener("DOMContentLoaded", (event) => {

    var getbutton = document.getElementById("button");
    var article = document.getElementById("article");

    function showhide(){
       if ( article.style.display != "block"){
           article.style.display = "block";
       } 
       else if ( article.style.display == "block") {
            article.style.display = "none";
       }    
    }
    getbutton.onclick = showhide;
  });