const {totalMois, nbJourDansMois, dateString, verifMois} = require("./utilitaires.js");

// Sans indication précise sur le format de date à utiliser, le choix a été fait
// d'utiliser le format de saisie aaaa-mm-jj car il correspond à l'input date en html

// Implémentation de la notion de période(s)
class Periode {
  constructor(nom, debut, fin) {
      this.nom = nom;
      this.debut = debut;
      this.fin = fin;
  }
}

// Création d'une fonction permettant de déclarer une période de congés
const conges = (nom, debut, fin) => {
  return new Periode(nom, debut, fin);
}

// Création d'une fonction de contrôle pour vérifier si la période est totalement incluse dans une période mensuelle
// retourne "incohérence" en cas de date de fin antérieure à la date de début
// retourne "unique" en cas de période sur un mois unique
// retourne "multiple" en cas de période à cheval sur plusieurs mois
const controle = (conges) => {
  const arrayDateDebut = conges.debut.split("-");
  const arrayDateFin = conges.fin.split("-");
  const DateDebut = parseInt(arrayDateDebut.join(""));
  const DateFin = parseInt(arrayDateFin.join(""));

  if (DateFin - DateDebut < 0) {
    return "incohérent"
  }
  return arrayDateDebut[1] === arrayDateFin[1] && arrayDateDebut[0] === arrayDateFin[0] ? "unique" : "multiple";

}

// Création d'une fonction permettant de générer les lignes d'écriture
const generationEcriture = (conges) => {
  const periodeConges = []; // Chaque élément de la table permettra de générer une ligne d'écriture
  const ligneEcriture =[]; // Ensemble des lignes d'écriture
  const arrayDateDebut = conges.debut.split("-");
  const arrayDateFin = conges.fin.split("-");

  // Modification du format des dates dans les lignes d'écriture pour une lisibilité plus facile
  // 2021-05-01 => 01/05/2021
  const ecritureDateDebut = arrayDateDebut.reduce((ary, ele) => {ary.unshift(ele); return ary}, []).join("/");
  const ecritureDateFin = arrayDateFin.reduce((ary, ele) => {ary.unshift(ele); return ary}, []).join("/");

  const nbMois = totalMois(arrayDateDebut[1], arrayDateDebut[0], arrayDateFin[1], arrayDateFin[0]);

  if (controle(conges) === "incohérent") {
      return "Les dates ne sont pas cohérentes pour calculer une période de congés";
  }

  for (let i = 1; i <= nbMois; i++ ) {
    let jourFinDeMois = "";
    let dateFinDeMois ="";

    const mois = verifMois(parseInt(arrayDateDebut[1]) - 1 + i); // Calcul le numéro du mois concerné et le passe au format mm si besoin avec verifMois()
    const deltaAnnee = Math.ceil((parseInt(arrayDateDebut[1]) - 1 + i) / 12) - 1; // Calcul le delta avec l'année de la date de début dans le cas où les congés sont à cheval sur plusieurs années
    const annee = (parseInt(arrayDateDebut[0]) + deltaAnnee); // Calcul l'année à envoyer dans la ligne d'écriture

    switch (true) {
      // Si le début et la fin de période sont dans le même mois
      case (nbMois === 1) :
        periodeConges.push( new Periode("congés", ecritureDateDebut, ecritureDateFin));
        break;
      // Si la période dure plus d'un mois, on traite la première periode de congés avec le premier jour réel de la période
      case (nbMois > 1 && i === 1) :
        jourFinDeMois = nbJourDansMois(annee, mois);
        dateFinDeMois = dateString(jourFinDeMois, mois , annee);
        periodeConges.push( new Periode("congés", ecritureDateDebut, dateFinDeMois));
        break;
      // Si la période dure plus d'un mois, après le premier mois, on commence la période de congés avec le premier jour du mois
      case (nbMois > i && i !== 1) :
        dateDebutMois = dateString("01", mois, annee);
        jourFinDeMois = nbJourDansMois(annee, mois);
        dateFinDeMois = dateString(jourFinDeMois, mois, annee);
        periodeConges.push( new Periode("congés", dateDebutMois, dateFinDeMois));
        break;
      // Si la période dure plus d'un mois, on traite le dernier mois avec le dernier jour réel de congés
      case (nbMois === i) :
        dateDebutMois = dateString("01", mois, annee);
        periodeConges.push( new Periode("congés", dateDebutMois, ecritureDateFin));
        break;
      default :
        break;

    };
  };
    periodeConges.map((periode) => {
      ligneEcriture.push(`Période de ${periode.nom} du ${periode.debut} au ${periode.fin}`);
    });
    return (ligneEcriture);
}


{
  const nouvellePeriode = conges("Période à tester", "2001-01-01", "2021-01-05");
  controle(nouvellePeriode);
  generationEcriture(nouvellePeriode);
}


module.exports = { controle, generationEcriture, Periode};