// Make in-page navigation interactive
document.addEventListener("DOMContentLoaded", function () {
    const inPageLinks = document.querySelectorAll(".in-page-nav a");
    const sections = document.querySelectorAll(".member-group");

    // Highlight active section
    function highlightActiveSection() {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        inPageLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    // Add event listeners
    window.addEventListener("scroll", highlightActiveSection);
    inPageLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight the first section on page load
    highlightActiveSection();

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

   
});
 // Search Functionality
 document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const items = document.querySelectorAll(".item");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        items.forEach((item) => {
            const title = item.querySelector(".item-title").innerText.toLowerCase();
            const description = item.querySelector(".item-description").innerText.toLowerCase();
            const tag = item.querySelector(".item-tag").innerText.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm) || tag.includes(searchTerm)) {
                item.style.display = "flex"; // Show matching items
            } else {
                item.style.display = "none"; // Hide non-matching items
            }
        });
    });
});