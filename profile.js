/*====================================================
  STUDENT PROFILE JAVASCRIPT
  Welcome Public School
====================================================*/

document.addEventListener("DOMContentLoaded", () => {
    /*==================================================
      SIDEBAR / HAMBURGER MENU
    ==================================================*/

    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    const setSidebarState = (open) => {
        if (!menuToggle || !sidebar) return;

        sidebar.classList.toggle("sidebar-open", open);
        document.body.classList.toggle("sidebar-is-open", open);

        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute(
            "aria-label",
            open ? "Close navigation menu" : "Open navigation menu"
        );

        if (overlay) {
            overlay.setAttribute("aria-hidden", String(!open));
        }
    };

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            setSidebarState(!sidebar.classList.contains("sidebar-open"));
        });
    }

    if (overlay) {
        overlay.addEventListener("click", () => setSidebarState(false));
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setSidebarState(false);
        }
    });

    /* Close the drawer after selecting a navigation item. */
    document.querySelectorAll(".sidebar ul li").forEach((item) => {
        item.addEventListener("click", () => {
            setSidebarState(false);
        });
    });

    /*==================================================
      WELCOME MESSAGE
    ==================================================*/

    const hour = new Date().getHours();
    let greeting = "Good Morning";

    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17) {
        greeting = "Good Evening";
    }

    console.log(`${greeting}, Md Jakariya`);

    /*==================================================
      EDIT PROFILE
    ==================================================*/

    const editBtn = document.querySelector(".left-profile button");

    if (editBtn) {
        editBtn.addEventListener("click", () => {
            alert(
`Edit Profile

This feature will be available after connecting the backend.

Students will be able to edit:
• Phone Number
• Email
• Address
• Profile Photo

Only the Admin can edit:
• Student Name
• Roll Number
• Admission Number
• Class
• Section`
            );
        });
    }

    /*==================================================
      CHANGE PASSWORD
    ==================================================*/

    const changePassword = document.querySelector(".blue");

    if (changePassword) {
        changePassword.addEventListener("click", () => {
            alert(
`Change Password

Backend is not connected yet.

Soon students will be able to change their password securely.`
            );
        });
    }

    /*==================================================
      DOWNLOAD PROFILE
    ==================================================*/

    const downloadBtn = document.querySelector(".green");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            alert(
`Download Profile

PDF download will be available after backend integration.`
            );
        });
    }

    /*==================================================
      PROFILE CARD ANIMATION
    ==================================================*/

    document.querySelectorAll(".section").forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });

    /*==================================================
      ACTIVE SIDEBAR
    ==================================================*/

    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            menuItems.forEach((menu) => menu.classList.remove("active"));
            item.classList.add("active");
        });
    });

    /*==================================================
      PROFILE IMAGE HOVER
    ==================================================*/

    const studentImage = document.querySelector(".left-profile img");

    if (studentImage) {
        studentImage.addEventListener("mouseenter", () => {
            studentImage.style.transform = "scale(1.05)";
            studentImage.style.transition = "0.3s";
        });

        studentImage.addEventListener("mouseleave", () => {
            studentImage.style.transform = "scale(1)";
        });
    }

    console.log("Student Profile Loaded Successfully");
});
