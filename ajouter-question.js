const container = document.getElementById('propositions');
const btnAdd = document.getElementById('add-propositions');

// TODO 2 — Ajouter des propositions dynamiquement
btnAdd.addEventListener('click', () => {
    // Créer un conteneur <div>
    const divRow = document.createElement('div');
    
    // Créer la case à cocher et le champ texte
    divRow.innerHTML = `
        <input type="checkbox" class="is-correct">
        <input type="text" class="prop-text" placeholder="Réponse">
    `;
    
    // Ajouter le conteneur dans la zone des propositions
    container.appendChild(divRow);
});

// TO DO 3 — Enregistrer la question dans l'examen
document.getElementById('form-question').addEventListener('submit', function(e) {
    // Empêcher le rechargement de la page
    e.preventDefault();

    // Lire les valeurs du formulaire
    const prop = document.getElementById('proprietaire').value;
    const examName = document.getElementById('nom-examen').value;
    const key = 'examens_' + prop;

    // Collecter les propositions depuis le DOM
    const props = [];
    document.querySelectorAll('#propositions div').forEach(div => {
        props.push({
            text: div.querySelector('.prop-text').value,
            correct: div.querySelector('.is-correct').checked
        });
    });

    // Récupérer les examens du localStorage
    const exams = JSON.parse(localStorage.getItem(key)) || [];

    // Trouver l'examen par son nom
    const exam = exams.find(ex => ex.nom === examName);

    // Vérifier que l'examen existe
    if (!exam) {
        alert('Examen introuvable !');
        return;
    }

    // Construire la question et l'ajouter
    const q = {
        title: document.getElementById('enonce').value,
        time: document.getElementById('duree').value,
        points: document.getElementById('points').value,
        answers: props
    };

    exam.questions.push(q);
    localStorage.setItem(key, JSON.stringify(exams));

    alert('Question ajoutée avec succès !');
    
    // Réinitialiser le formulaire et vider la zone des propositions
    this.reset();
    container.innerHTML = '';
});