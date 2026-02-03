function openTab(evt, tabName) {
    // Cacher tous les contenus
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retirer la classe active de tous les onglets
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Afficher le contenu choisi et activer l’onglet
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Afficher le premier onglet par défaut
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});
