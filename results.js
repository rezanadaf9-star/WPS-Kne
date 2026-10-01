/* =========================================================
   OUR BOARD RESULTS - RESULTS.JS
   Welcome Public School
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       YEAR RESULT BUTTONS
       ===================================================== */

    const yearButtons = document.querySelectorAll(".year-btn");

    yearButtons.forEach(button => {

        button.addEventListener("click", function () {

            const year = this.dataset.year;

            if (year) {
                window.location.href = `${year}result.html`;
            }

        });

    });


    /* =====================================================
       TOPPER CARD HOVER EFFECT
       ===================================================== */

    const topperCards = document.querySelectorAll(".topper-card");

    topperCards.forEach(card => {

        card.addEventListener("mouseenter", function () {
            this.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("active");
        });

    });


    /* =====================================================
       NOTIFICATION BUTTON
       ===================================================== */

    const notification = document.querySelector(".notification");

    if (notification) {

        notification.addEventListener("click", function () {

            // You can connect this to your notices page later
            window.location.href = "notices.html";

        });

    }


    /* =====================================================
       STUDENT PROFILE
       ===================================================== */

    const profileBox = document.querySelector(".profile-box");

    if (profileBox) {

        profileBox.addEventListener("click", function () {

            window.location.href = "profile.html";

        });

    }


    /* =====================================================
       SIDEBAR MENU
       ===================================================== */

    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            const link = this.getAttribute("data-link");

            if (link) {
                window.location.href = link;
            }

        });

    });


    /* =====================================================
       IMAGE FALLBACK
       If a topper image is missing
       ===================================================== */

    const topperImages = document.querySelectorAll(".topper-card img");

    topperImages.forEach(img => {

        img.addEventListener("error", function () {

            this.src = "images/student.jpg";

        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYearElement = document.querySelector(".current-year");

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }


    /* =====================================================
       PAGE LOADED
       ===================================================== */

    document.body.classList.add("results-page-loaded");

});

/* =========================================================
   DASHBOARD-COMPATIBLE MOBILE SIDEBAR
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const overlay = document.querySelector(".sidebar-overlay");
    if (!sidebar || !menuToggle) return;

    function setSidebarState(open) {
        sidebar.classList.toggle("sidebar-open", open);
        document.body.classList.toggle("sidebar-is-open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !open);
            icon.classList.toggle("fa-xmark", open);
        }
        if (overlay) overlay.setAttribute("aria-hidden", String(!open));
    }

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        setSidebarState(!sidebar.classList.contains("sidebar-open"));
    });

    if (overlay) overlay.addEventListener("click", function () { setSidebarState(false); });

    sidebar.addEventListener("click", function (event) {
        const item = event.target.closest("li, a");
        if (item && window.innerWidth <= 950) setSidebarState(false);
    });

    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 950 && sidebar.classList.contains("sidebar-open") &&
            !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            setSidebarState(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setSidebarState(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 950) setSidebarState(false);
    });
});
