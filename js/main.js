
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