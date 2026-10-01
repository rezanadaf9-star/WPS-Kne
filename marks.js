/* ==========================================
   MARKS PAGE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       SIDEBAR DRAWER
    ============================ */

    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const overlay = document.querySelector(".sidebar-overlay");

    function openSidebar() {
        if (!sidebar || !menuToggle || !overlay) return;

        sidebar.classList.add("sidebar-open");
        overlay.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close sidebar");
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        if (!sidebar || !menuToggle || !overlay) return;

        sidebar.classList.remove("sidebar-open");
        overlay.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open sidebar");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow = "";
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar?.classList.contains("sidebar-open")
                ? closeSidebar()
                : openSidebar();
        });
    }

    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }

    if (sidebar) {
        sidebar.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", function () {
                if (window.innerWidth <= 950) {
                    closeSidebar();
                }
            });
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 950) {
            closeSidebar();
        }
    });

    /* ============================
       DOWNLOAD BUTTON
    ============================ */

    const downloadBtn = document.querySelector(".download-btn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert("Digital Marksheet Download feature will be connected with backend later.");
        });
    }

    /* ============================
       PRINT BUTTON
    ============================ */

    const printBtn = document.querySelector(".print-btn");

    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }

    /* ============================
       DYNAMIC PAGE TITLE
    ============================ */

    const hour = new Date().getHours();
    let greeting = "Welcome";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    document.title = greeting + " | My Marks";
});
