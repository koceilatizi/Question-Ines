```javascript
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let attempts = 0;

// Bouton OUI
yes.addEventListener("click", () => {
  message.textContent = "🎉 Félicitations, merci je t'attends sur snap !! ❤️";
  no.style.display = "none";
});

// Faire fuir le bouton NON
function escapeButton() {
  attempts++;

  // On passe le bouton en mode "fuite"
  no.classList.add("running");

  const margin = 20;

  const maxX = window.innerWidth - no.offsetWidth - margin;
  const maxY = window.innerHeight - no.offsetHeight - margin;

  const x = Math.random() * (maxX - margin) + margin;
  const y = Math.random() * (maxY - margin) + margin;

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  // Le texte change progressivement
  if (attempts === 3) {
    no.textContent = "T'es sûre ? 🤨";
  }

  if (attempts === 6) {
    no.textContent = "Allez 😭";
  }

  if (attempts === 10) {
    no.textContent = "Tu ne m'auras pas 😈";
  }
}

// Ordinateur
no.addEventListener("mouseenter", escapeButton);

// Téléphone
no.addEventListener("touchstart", (event) => {
  event.preventDefault();
  escapeButton();
});
```
