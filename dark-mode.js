// Sélectionnez le bouton et le body
const toggleButton = document.getElementById('dark-mode-on');
const body = document.body;

// Vérifiez si un thème est déjà enregistré dans localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Désactiver le mode sombre';
}

// Ajouter un écouteur d'événements au bouton
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Activer le mode sombre';
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Désactiver le mode sombre';
        localStorage.setItem('dark-mode', 'enabled');
    }
});
