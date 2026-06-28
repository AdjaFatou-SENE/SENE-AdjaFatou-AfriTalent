// T O G G L E
// selectionne le bouton par son id
const togglebtn = document.getElementById("theme-toggle"); 
// selectionne l'element de l'icon par son id
const icon = document.getElementById("theme-icon");

// ecoute l'evenement du clic du bouton
togglebtn.addEventListener("click", () => {
    // ajoute ou supprime la classe a chaque clic
    document.body.classList.toggle("dark-mode");

    // verifie si la classe est est appliquee
    if (document.body.classList.contains("dark-mode")) {
        // enregistre le dark dans le localstorage du navigateur
        localStorage.setItem("theme", "dark");
        // change la source et affiche l'image du soleil
        icon.src = "Images/sun.svg";
        // si la classe n'est pas presente 
    } else {
        // enregistre le light dans le localstorage
        localStorage.setItem("theme", "light");
        // change la source et affiche l'image de la lune
        icon.src = "Images/moon-fill.svg";
    }
});
// recupere le theme garder precedemment dans localstorage
 const savedTheme = localStorage.getItem("theme");
//  si il est est dark
 if (savedTheme === "dark") {
    // applique dierectement dark mode au body
    document.body.classList.add("dark-mode");
 }

 // S C R O L L 

//ecoute l'evenement du scroll  
 window.addEventListener("scroll", () => {
// selectionne l'element qui a la classe navbar
    const navbar = document.querySelector(".navbar");

    // si on defile la page de plus de 50 px vers le bas 
    if (window.scrollY > 50) {
        // ajoute cette classe pour reduire la barre
        navbar.classList.add("navbar-scroll");
        // si c'est vers le haut
    } else {
        // supprime cette classe
        navbar.classList.remove("navbar-scroll");
    }
 });


//  R E T O U R   E N    H A U T

// selectionne le bouton de retour en haut par son id
 const backtotop = document.getElementById("backtotop");
//  ecoute l'evenemet du scroll
 window.addEventListener("scroll", () => {
    //  si on defile de plus de 300 px 
    if (window.scrollY >300) {
        // rend le bouton visible avec style css "block"
        backtotop.style.display = "block";
        // s'il est a moins de 300 px
    } else {
        // masque le bouton avec style css "none"
        backtotop.style.display = "none";
    }
 });

// ecoute l'avenement du clic
 backtotop.addEventListener("click", () => {

    // fait defiler la page a un endroit
    window.scrollTo({
        // destination (haut) de la page
        top: 0,
        // permet de configurer une animation fluide pour le deilement
        behavior: "smooth"
    })
 })

 //COMPTEURS STATISTIQUES

// selectionne ts les elements html qui ont la classe .counter
 const counter = document.querySelectorAll(".counter");

//  pour chacun des compteurs
 counter.forEach(counter => {
    // fonction interne pour l'animation
    const updatecounter = () => {
        // recupere la valeur cible stockee dans l'attribut html et la convertit en nombre grace au "+"
        const target = +counter.getAttribute("data-target");
        // recupere la valeur textuelle actuelle affichee dans le compteur et la convertit en nombre avec le "+"
        const current = +counter.innerText;

        // calcule la valeur de l'increment (la cible est divisee par 100pour une animation en 100 etape)
        const increment = target / 100;

        // verifie si la valeur actuelle affichee est toujours inferieure a la valeur cible attendue
        if (current <target) {
            // met a jour le compteur en ajoutant l'increment et en l'arrondissant a l'entier superieur(math.ceil)
            counter.innerText = Math.ceil(current + increment);

            // relance la fonction updatecounter apres un delai de 20milliseconde pour creer l'effet d'animation continue
            setTimeout(updatecounter, 20);
            // si la valeur cible est atteinte ou depasser
        } else {
            // force le compteur a afficher exactement la valeur cible du depart
            counter.innerText = target;
        }
    }
    // appelle la fonction une premiere fois pour lancer l'animation du compteur actuelle
    updatecounter()
});

//FADE-IN

// selectionne tous les elements de la page qui ont la classe fade-in
const section = document.querySelectorAll(".fade-in");
// initialise un nouvel observateur d'intersection pour detecter l'apparition des elemenrs a l'ecran
const observer = new IntersectionObserver(entries => {
    // percours chaque entree transmise par l'observateur
    entries .forEach(entry =>{
        // verifie si l'element est actuellement est actuellement visible dans la zone d'affichage
        if (entry.isIntersecting){
            // ajoute la class css show a l'element pour declencher l'animation d'apparition
            entry.target.classList.add("show");
        }
    });
});
// parcours chaque section 
section.forEach(section =>{
    // demande a l'observateur de surveiller activement cette section
    observer.observe(section);
})

// selectionne le menu deroulant de selection par son identifiant
const select = document.getElementById("free");
// selectionne tous les elements de type cards
const cards = document.querySelectorAll(".cards");

// verifie si l'element de selection existe bien sur la page actuelle
if (select) {
    // ecoute le changement de valeur de ce menu deroulant
    select.addEventListener("change", (event) => {
        // recupere la valeur selectionne par l'utilisateurs et la convertit entirement en miniscule 
        const selectionCategory = event.target.value.toLowerCase();

        // parcours l'ensemble des cartes de la pages 
        cards.forEach(card => {
            // recupere la valeur de l'attribut personnalise de la carte
            const cardcategory = card.getAttribute("data-category")
            // convertit egalement cette valeur d'attribut en lettre miniscule pour eviter ces erreurs de casse
            .toLowerCase();
            // debut de la structure conditionnelle de filtrage
            if (
                // verifie si l'utilisateur a choisi d'afficher tous 
                selectionCategory === "all" ||
                // si la categorie de la carte correspond egalement a la categorie selectionner
                cardcategory === selectionCategory)
                {
            // ouverture du block de la condition valider
            // affieche la carte en appliquant le style css "block"
            card.style.display = "block";
            // si aucune des conditions precedentes est vrai 
            } else {
                // masque la carte en appliquant du style css "none"
                card.style.display = "none";
            }
        
        }); 
    });
}

// F O R M U L A I R E S


// selectionne le formulaire de contact par son id
const form = document.getElementById("contactForm");
// selectionne le champ saisie du nom de son id
const name = document.getElementById("name");
// selectionne le champ saisie du prenom de id
const prenom = document.getElementById("prenom");
// selectionne le champ de l'email par son id
const email = document.getElementById("email");
// slectionne le champ du message 
const message = document.getElementById("message");
// selectionne l'element affichant le message de succes 
const successMessage = document.getElementById("successMessage");

// ecoute l'evenement de soumission sur le formulaires de contact
form.addEventListener("submit", function(e) {
    // bloque le comportement par defaut de soumission du formulaires 
    e.preventDefault();
    // alert("Le bouton envoyer fonctionne");
    // selectionne tous les elements de message d'erreur et vide leur texte pour reinitialiser l'affichage des erreurs
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
        // verifie si l'element de message de succes existe
        if (successMessage) {
            // masque le message de succes en lui ajoutant cette classe 
    successMessage.classList.add("d-none");
        }
    // initialise une variable bouleen vide qui servira d'indicateur de validite
    let valid = true;
    // recupere la valeur du nom retire les espaces superflus aux extremites trim et renvoie une chaine vide si l'element n'existe pas
    const nameValue =name ? name.value.trim() : "";
    // recupere la valeur du prenom retire les espaces superflus aux extremites trim et renvoie une chaine vide
    const prenomValue =prenom ? prenom.value.trim() : "";
    // recupere la valeur du mail retire les espaces superflus aux extremites trim et renvoie une chaine vide
    const emailValue =email ? email.value.trim() : "";
    // recupere la valeur du message retire les espaces superflus aux extremites trim et renvoie une chaine vide
    const messageValue =message ? message.value.trim(): "";

    // verifie si le champ du nom et rester vide
    if (nameValue === ""){
        // injecte le texte d'erreur approprie dans l'element html ayant id nameError
        document.getElementById("nameError").textContent = "Le nom est obligatoire.";
        // change l'etat de la variable de validation a false (erreur)
            valid = false;
    }
    // verifie si le champ du prenom est rester vide
    if(prenomValue ===""){
         // injecte le texte d'erreur approprie dans l'element html ayant id prenomError
        document.getElementById("prenomError").textContent = "Le prenom est obligatoire.";
            // change l'etat de la variable de validation a false (erreur)
            valid = false;
    }
    // declare une expression reguliere permettant de verifier la structure standard d'une adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // verifie  si le champ d'adresse email est reste vide
    if (emailValue === ""){
        // injecte le texte d'erreur approprie dans l'element html ayant id emailError
        document.getElementById("emailError"). textContent= "L'adresse email est obligatoir.";
        // invalide le formulaire en passant la variable a false
            valid = false;
            // si le champ n'est pas vide teste la valeur saisie
    } else if (! emailRegex.test(emailValue)){
        // injecte le message d'erreur correspondant dans l'element d'id
        document.getElementById("emailError").textContent = " Veuillez entrer un mail valide.";
        // invalide le formulaire en passant la variable a false
            valid = false;
    }

    // verifie si le champ est rester vide
    if (messageValue ===""){
        // injecte le message d'erreur correspondant dans l'element d'id
        document.getElementById("messageError").textContent= "Le message est requis.";
            // invalide le formulaire en passant la variable a false
            valid = false;

    // verifie si la longueur totale est strictement inferieur a 20 caracteres
    } else if (messageValue.length < 20) {
        //ijnecte u n message exigeant le minimum de texte pour valider la saisie 
        document.getElementById("messageError").textContent = "Le message doit contenir au moins 20 caracteres.";
            // invalide le formulaire en passant la variable a false  
            valid = false;
    } 

    // validation finale
    if (valid){
        // verifie si l'element de message de succes existe dans la structure html
        if (successMessage) {
            // rend visible le message de succes en lui retirant la classe cc d-none
        successMessage.classList.remove("d-none");
        }
        // reinitialise integralement tous les champs du formulaires actuel
            this.reset();
    }
});
