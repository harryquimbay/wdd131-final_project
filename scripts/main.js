// ===== GREETING MESSAGE =====
const greeting = document.querySelector("#greeting");
if (greeting) {
    const hour = new Date().getHours();
    const message =
        hour < 12 ? "Good morning, beach lover!" :
        hour < 18 ? "Good afternoon, sun seeker!" :
        "Good evening, ocean dreamer!";
    greeting.textContent = message;
}

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        // accessibility update
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
    });
}

// ===== USER PROFILE OBJECT =====
const userProfile = {
    name: localStorage.getItem("userName") || "Guest",
    favoriteSpot: "Umi Beach",
    theme: localStorage.getItem("theme") || "light"
};

console.log(`Welcome back, ${userProfile.name}! Enjoy your time at ${userProfile.favoriteSpot}.`);

// ===== FEATURED PRODUCTS ARRAY =====
const featuredProducts = ["Beach Hat", "Sunscreen", "Flip Flops", "Towel"];
featuredProducts.forEach(item => console.log(`🌴 Featured Product: ${item}`));

// ===== LOCAL STORAGE: VISIT COUNTER =====
if (!localStorage.getItem("visitCount")) {
    localStorage.setItem("visitCount", 1);
} else {
    let count = parseInt(localStorage.getItem("visitCount"));
    localStorage.setItem("visitCount", count + 1);
}
console.log(`You have visited this site ${localStorage.getItem("visitCount")} times.`);

// ===== CONDITIONAL BRANCHING BASED ON THEME =====
if (userProfile.theme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}


