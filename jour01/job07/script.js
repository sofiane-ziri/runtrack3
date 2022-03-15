
function jourTravaille(date) {
    var jourFeries = ['2022-01-01','2022-04-13','2022-05-01','2022-05-08','2022-05-21','2022-06-01','2022-07-14','2022-09-15',
        '2022-11-01','2022-11-11','2022-12-25']; 
    var dateType = new Date(date); 
    console.log("DATE = " + date); 

    
    var jour = new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(dateType); 
    console.log("JOUR DE LA SEMAINE = " + jour);

   
    var numeroday = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(dateType); 
    console.log("Numero du jour dans le mois = " + numeroday);

   
    var mois = new Intl.DateTimeFormat('fr', { month: 'long' }).format(dateType); 
    console.log("Le mois = " + mois);

  
    var annee = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(dateType); 
    console.log("annee = " + annee);



    if (jourFeries.includes(date)) { 
        console.log("Le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour férié")
    }
    else if (jour === "samedi" || jour === "dimanche") { 
        console.log("Non, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un weekend")
    }
    else if (!jourFeries.includes(date)) {
        console.log("Oui, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour travaillé")
    }
}
console.log(jourTravaille('2022-12-28')); 