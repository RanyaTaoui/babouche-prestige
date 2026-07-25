// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Animation des cartes au défilement
const cards = document.querySelectorAll(".carte");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold:0.2
});


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});


// Message avant ouverture de WhatsApp
const boutons = document.querySelectorAll(".carte a");

boutons.forEach(btn => {

    btn.addEventListener("click", function() {

        alert("Merci 😊\nVous allez être redirigé vers WhatsApp pour passer votre commande.");

    });

});


// Année automatique dans le footer
const footer = document.querySelector("footer");

footer.innerHTML +=
`<p style="margin-top:20px;font-size:14px;">
© ${new Date().getFullYear()} Babouche Prestige - Tous droits réservés.
</p>`;