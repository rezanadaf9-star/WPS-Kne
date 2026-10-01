/* ==========================================
   FEES PAGE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Fees Page Loaded Successfully!");

    /* ==========================================
       SIDEBAR DRAWER
    ========================================== */

    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    function openSidebar() {
        if (!sidebar || !overlay || !menuToggle) return;

        sidebar.classList.add("sidebar-open");
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");

        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    }

    function closeSidebar() {
        if (!sidebar || !overlay || !menuToggle) return;

        sidebar.classList.remove("sidebar-open");
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    if (menuToggle && sidebar && overlay) {

        menuToggle.addEventListener("click", function () {
            if (sidebar.classList.contains("sidebar-open")) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        overlay.addEventListener("click", closeSidebar);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeSidebar();
            }
        });

        sidebar.querySelectorAll("li").forEach(function (item) {
            item.addEventListener("click", function () {
                if (window.innerWidth <= 950) {
                    closeSidebar();
                }
            });
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 950) {
                closeSidebar();
            }
        });
    }

    /* ==========================================
       BUTTONS
    ========================================== */

    const payBtn = document.querySelector(".pay-btn");
    const downloadBtn = document.querySelector(".download-btn");
    const printBtn = document.querySelector(".print-btn");

    if (payBtn) {
        payBtn.addEventListener("click", function () {
            alert(
                "Online fee payment will be available after the backend is connected."
            );
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            alert(
                "Receipt download will be available after the backend is connected."
            );
        });
    }

    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }

    /* ==========================================
       DATE
    ========================================== */

    const today = new Date();

    console.log(
        "Today's Date : " + today.toLocaleDateString()
    );

    /* ==========================================
       PAGE TITLE
    ========================================== */

    document.title = "Fee Management | Welcome Public School";

});
