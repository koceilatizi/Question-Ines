```javascript
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let attempts = 0;

// Bouton OUI
yes.addEventListener("click", () => {
  message.textContent = "🎉 Félicitations, merci !! ❤️";
  no.style.display = "none";
});

// Faire fuir le bouton NON
function escapeButton(event) {
  if (event) {
    event.preventDefault();
  }

  attempts++;

  // Première fuite : on le sort de sa position normale
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
    no.textContent = "Minimum 8 snaps 🤨";
  }

  if (attempts === 6) {
    no.textContent = "Après t'innoves 😭";
  }

  if (attempts === 10) {
    no.textContent = "Alleeeez 😈";
  }
}

// Ordinateur : le bouton fuit quand la souris arrive dessus
no.addEventListener("mouseenter", escapeButton);

// Téléphone : le bouton fuit dès qu'on essaie de le toucher
no.addEventListener("touchstart", escapeButton, { passive: false });

// Sécurité : si le navigateur déclenche quand même un clic
no.addEventListener("click", escapeButton);
```

Ton `style.css` doit toujours contenir cette partie :

```css
#no {
  background: #ddd;
  color: #333;
}

#no.running {
  position: fixed;
  transition: left 0.15s ease, top 0.15s ease;
}
```

### 📱 Sur téléphone

Au départ :

**[ ❤️ Oui ] [ 😈 Non ]**

Tu poses ton doigt sur **Non** → 💨 il change immédiatement de position.

Tu réessaies → 💨 encore ailleurs.

Et sur ordinateur, il continue à esquiver dès que la souris s'approche. 😈
