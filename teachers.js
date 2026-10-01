// ==========================================
// TEACHERS PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Teachers page loaded successfully.");

});

// =========================================================
// Dashboard-style mobile/tablet sidebar
// =========================================================
(function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const overlay = document.querySelector(".sidebar-overlay");

    if (!sidebar || !menuToggle) return;

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
    }

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        setSidebarState(!sidebar.classList.contains("sidebar-open"));
    });

    if (overlay) {
        overlay.addEventListener("click", function () {
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
        if (window.innerWidth > 950) {
            setSidebarState(false);
        }
    });
})();
