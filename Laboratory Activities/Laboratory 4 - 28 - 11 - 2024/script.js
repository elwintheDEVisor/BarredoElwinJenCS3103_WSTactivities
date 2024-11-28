document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeIcon.src = "Assets/moon.png";
    }

    // Toggle dark mode on click
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            darkModeIcon.src = "Assets/sun.png";
            localStorage.setItem("darkMode", "disabled");
        } else {
            body.classList.add("dark-mode");
            darkModeIcon.src = "Assets/moon.png";
            localStorage.setItem("darkMode", "enabled");
        }
    });
});
