const container = document.getElementById('propositions');
const btnAdd = document.getElementById('add-propositions');

// Ajouter des propositions dynamiquement
btnAdd.addEventListener('click', () => {
    const div = document.createElement('div');
    
    // Créer checkbox et input texte [cite: 111, 115]
    div.innerHTML = `
        <input type="checkbox" class="is-correct">
        <input type="text" class="prop-text" placeholder="Réponse">
    `;
    
    container.appendChild(div); // Ajouter dans la zonee
});