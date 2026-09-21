```javascript
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

// Bouton OUI
yes.addEventListener("click", function () {
    message.textContent = "🎉 Félicitations, merci !! ❤️";
});

// Bouton NON
no.addEventListener("click", function () {

    // Position fixe pour pouvoir le déplacer
    no.style.position = "fixed";

    // Calcul d'une position aléatoire
    const maxX = window.innerWidth - no.offsetWidth;
    const maxY = window.innerHeight - no.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Déplacement
    no.style.left = x + "px";
    no.style.top = y + "px";
});
```
