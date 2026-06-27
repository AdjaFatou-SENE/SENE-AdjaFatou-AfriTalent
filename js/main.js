
const togglebtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

togglebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        icon.src = "Images/sun.svg";
    } else {
        localStorage.setItem("theme", "light");
        icon.src = "Images/moon-fill (1).svg";
    }
})
 const savedTheme = localStorage.getItem("theme");
 if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
 }
 window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
 });

 const backtotop = document.getElementById("backtotop");
 window.addEventListener("scroll", () => {
    if (window.scrollY >300) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
 });

 backtotop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
 })

 //COMPTEURS STATISTIQUES

 const counter = document.querySelectorAll(".counter");

 counter.forEach(counter => {
    const updatecounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current <target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updatecounter, 20);
        } else {
            counter.innerText = target;
        }
    }
    updatecounter()
});

//FADE-IN

const section = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries .forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
section.forEach(section =>{
    observer.observe(section);
})

const select = document.getElementById("free");
const cards = document.querySelectorAll(".cards");

if (select) {
    select.addEventListener("change", (event) => {
        const selectionCategory = event.target.value.toLowerCase();

        cards.forEach(card => {
            const cardcategory = card.getAttribute("data-category")
            .toLowerCase();
            if (
                selectionCategory === "all" ||
                cardcategory === selectionCategory)
                {
            card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        
        }); 
    });
}



const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const prenom = document.getElementById("prenom");

const email = document.getElementById("email");
const message = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    // alert("Le bouton envoyer fonctionne");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
        if (successMessage) {
    successMessage.classList.add("d-none");
        }

    let valid = true;
    const nameValue =name ? name.value.trim() : "";
    const prenomValue =prenom ? prenom.value.trim() : "";
    const emailValue =email ? email.value.trim() : "";
    const messageValue =message ? message.value.trim(): "";

    if (nameValue === ""){
        document.getElementById("nameError").textContent = "Le nom est obligatoire.";
            valid = false;
    }
    if(prenomValue ===""){
        document.getElementById("prenomError").textContent = "Le prenom est obligatoire.";
            valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === ""){
        document.getElementById("emailError"). textContent= "L'adresse email est obligatoir.";
            valid = false;
    } else if (! emailRegex.test(emailValue)){
        document.getElementById("emailError").textContent = " Veuillez entrer un mail valide.";
            valid = false;
    }
    if (messageValue ===""){
        document.getElementById("messageError").textContent= "Le message est requis.";
            valid = false;
    } else if (messageValue.length < 20) {
        document.getElementById("messageError").textContent = "Le message doit contenir au moins 20 caracteres.";
            valid = false;
    } if (valid){
        if (successMessage) {
        successMessage.classList.remove("d-none");
        }
            this.reset();
    }
});




// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     document.querySelectorAll(".error").forEach(error => error.textContent="");

//     let valid = true;

    
//     document.getElementById("successMessage").textContent = "";

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if(name === "") {
//         document.getElementById("nameError").textContent = "C'est obligatoire. "
//     }
// })