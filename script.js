const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let attempts = 0;

// Quand elle clique sur OUI
yes.addEventListener("click", () => {
  message.textContent = "🎉 Félicitations, merci !! ❤️";

  yes.textContent = "OUI ❤️";
  no.style.display = "none";
});

// Le bouton NON fuit
function escapeButton() {
  attempts++;

  const margin = 20;

  const maxX = window.innerWidth - no.offsetWidth - margin;
  const maxY = window.innerHeight - no.offsetHeight - margin;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  no.style.left = `${Math.max(margin, x)}px`;
  no.style.top = `${Math.max(margin, y)}px`;

  // Le texte change au fur et à mesure
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

// Souris
no.addEventListener("mouseenter", escapeButton);

// Mobile / tactile
no.addEventListener("touchstart", (event) => {
  event.preventDefault();
  escapeButton();
});
