
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