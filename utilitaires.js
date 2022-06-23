/*
** Ensemble des fonctions utilitaires
*/

// Calcul du nombre de mois de la période de congés
const totalMois = (moisDebut, anneeDebut, moisFin, anneeFin) => {
  if (anneeDebut === anneeFin) {
    return parseInt(moisFin) - parseInt(moisDebut) + 1
  }
  return ((1 + parseInt(anneeFin) - parseInt(anneeDebut)) * 12 ) - parseInt(moisDebut) - 1 - (11 - parseInt(moisFin) - 1)
}

// Calcul du nombre de jour dans un mois donné
const nbJourDansMois = (annee, mois) => {
  return new Date(annee, mois, 0).getDate();
}
// Génération d'une date au format string pour les écritures
const dateString = (jour, mois, annee) => {
  parseInt(mois) < 10 ? mois = `0${mois}` : mois;
  return `${jour}/${mois}/${annee}`
}

// Vérification du numéro du mois (lorsque la période est à cheval sur plusieurs années)
const verifMois = (mois) => {
  return mois / 12 <= 1 ? mois : (
    mois % 12 === 0 ?
      12 :
      mois - Math.floor(mois / 12) * 12
  )
}


module.exports = {totalMois, nbJourDansMois, dateString, verifMois};