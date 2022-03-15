function bisextile(annee){

    var i = annee % 4;
    if(i==0)
        i = annee % 100;
    else
        return false
    if(i==0)
        i = annee % 400;
    else
        return false
    if(i==0)
        return true;
    else
        return false
}
console.log(bisextile(2022));