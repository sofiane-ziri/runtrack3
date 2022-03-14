
function afficherjourdelasemaine(){
    var jours = [ 'Lundi' , 'Mardi' , 'Mercredi' , 'Jeudi' , 'Vendredi' , 'Samedi' , 'Dimanche']

    for(var i = 0; i < jours.length;i++){
        document.write(" " , jours[i]);
        }
}
afficherjourdelasemaine()