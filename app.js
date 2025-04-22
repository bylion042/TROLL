// Get the hamburger elements and nav links
const hamburgerOpen = document.getElementById("hamburger-icon");
const hamburgerClose = document.getElementById("hamburger-icon-close");
const navLinks = document.getElementById("nav-links");

// Toggle nav visibility on hamburger click
hamburgerOpen.addEventListener("click", () => {
    // Show the close icon and hide the open icon
    hamburgerOpen.style.display = "none";
    hamburgerClose.style.display = "block";
    
    // Show the nav links
    navLinks.classList.add("active");
});

// Close nav when clicking the close icon
hamburgerClose.addEventListener("click", () => {
    // Hide the close icon and show the open icon
    hamburgerClose.style.display = "none";
    hamburgerOpen.style.display = "block";
    
    // Hide the nav links
    navLinks.classList.remove("active");
});