// Écouter la soumission du formulaire
document.getElementById('form-examen').addEventListener('submit', function(e) {

    // Empêcher le rechargement de la page (pour ne pas perdre les données)
    e.preventDefault();

    // Construire l'objet examen
    const examen = {
        nom: document.getElementById('nom').value,
        duree: document.getElementById('duree').value,
        description: document.getElementById('description').value,
        proprietaire: document.getElementById('proprietaire').value,
        questions: []
    };

    // Construire la clé de stockage basée sur le propriétaire
    const examsKey = 'examens_' + examen.proprietaire;
    // Lire les examens existants (ou tableau vide si rien n'existe encore)
    // On récupère d'abord le texte du localStorage
    const sauvegarde = localStorage.getItem(examsKey);
    // On transforme le texte en tableau, ou on crée un tableau vide [] si c'est vide
    const exams = sauvegarde ? JSON.parse(sauvegarde) : [];
    // Ajouter le nouvel examen et sauvegarder
    exams.push(examen);
    localStorage.setItem(examsKey, JSON.stringify(exams));
    alert('Examen ajouté avec succès !');
    // Réinitialiser le formulaire pour le vider
    this.reset();
});