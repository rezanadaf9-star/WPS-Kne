/* ==========================================
   NOTICES PAGE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Notices Page Loaded Successfully!");

    /* ==========================================
       MOBILE SIDEBAR / HAMBURGER MENU
       Matched to dashboard.js
    ========================================== */

    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");

    if (sidebar && menuToggle) {

        function setSidebarState(open) {

            sidebar.classList.toggle("sidebar-open", open);
            document.body.classList.toggle("sidebar-is-open", open);

            menuToggle.setAttribute("aria-expanded", String(open));
            menuToggle.setAttribute(
                "aria-label",
                open ? "Close navigation menu" : "Open navigation menu"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !open);
                icon.classList.toggle("fa-xmark", open);
            }

            if (sidebarOverlay) {
                sidebarOverlay.setAttribute("aria-hidden", String(!open));
            }
        }

        menuToggle.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            setSidebarState(
                !sidebar.classList.contains("sidebar-open")
            );
        });

        if (sidebarOverlay) {
            sidebarOverlay.addEventListener("click", function () {
                setSidebarState(false);
            });
        }

        sidebar.addEventListener("click", function (event) {
            const item = event.target.closest("li");

            if (item && window.innerWidth <= 767) {
                setSidebarState(false);
            }
        });

        document.addEventListener("click", function (event) {
            if (
                window.innerWidth <= 767 &&
                sidebar.classList.contains("sidebar-open") &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                setSidebarState(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setSidebarState(false);
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 767) {
                setSidebarState(false);
            }
        });
    }

    /* ==========================================
       DOWNLOAD BUTTON
    ========================================== */

    /* ==========================================
       DOWNLOAD BUTTON
    ========================================== */

    const downloadBtn = document.querySelector(".download-btn");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", function () {

            alert("Notice PDF download will be connected with the backend later.");

        });

    }

    /* ==========================================
       PRINT BUTTON
    ========================================== */

    const printBtn = document.querySelector(".print-btn");

    if (printBtn) {

        printBtn.addEventListener("click", function () {

            window.print();

        });

    }

    /* ==========================================
       NOTICE CARD ANIMATION
    ========================================== */

    const noticeCards = document.querySelectorAll(".notice-card");

    noticeCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-6px)";
            this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";
            this.style.boxShadow = "";

        });

    });

    /* ==========================================
       NOTICE ICON ANIMATION
    ========================================== */

    const icons = document.querySelectorAll(".notice-icon");

    icons.forEach(icon => {

        icon.addEventListener("mouseenter", function () {

            this.style.transform = "rotate(10deg) scale(1.1)";
            this.style.transition = "0.3s";

        });

        icon.addEventListener("mouseleave", function () {

            this.style.transform = "rotate(0deg) scale(1)";

        });

    });

    /* ==========================================
       HIGHLIGHT LATEST NOTICE
    ========================================== */

    const latestNotice = document.querySelector(".important");

    if (latestNotice) {

        latestNotice.style.borderLeft = "8px solid #ef4444";

    }

    /* ==========================================
       SHOW CURRENT DATE
    ========================================== */

    const today = new Date();

    console.log("Today's Date:", today.toDateString());

    /* ==========================================
       PAGE TITLE
    ========================================== */

    document.title = "School Notices | Welcome Public School";

});