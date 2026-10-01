/* ==========================================
   ATTENDANCE PAGE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Attendance Page Loaded Successfully!");


    /* ==========================================
       DOWNLOAD BUTTON
    ========================================== */

    const downloadBtn = document.querySelector(".download-btn");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", function () {

            alert(
                "Attendance Report download will be connected to the backend later."
            );

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
       ATTENDANCE CIRCLE ANIMATION

       Percentage + Circular Arc
       Animate together from 0% to target%
    ========================================== */

    const attendanceCircle =
        document.getElementById("attendanceCircle");

    const attendanceValue =
        document.getElementById("attendanceValue");


    if (attendanceCircle && attendanceValue) {

        let currentAttendance = 0;

        function animateAttendance(targetPercentage) {

            const startPercentage = currentAttendance;

            const difference =
                targetPercentage - startPercentage;

            const duration = 1500;

            const startTime = performance.now();


            function animate(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(elapsed / duration, 1);


                /* ==================================
                   SMOOTH EASING
                ================================== */

                const easedProgress =
                    1 - Math.pow(1 - progress, 3);


                /* ==================================
                   CALCULATE CURRENT VALUE
                ================================== */

                const currentValue =
                    startPercentage +
                    difference * easedProgress;


                /* ==================================
                   UPDATE PERCENTAGE TEXT
                ================================== */

                attendanceValue.textContent =
                    Math.round(currentValue) + "%";


                /* ==================================
                   UPDATE CIRCULAR ARC
                ================================== */

                attendanceCircle.style.setProperty(
                    "--progress",
                    currentValue + "%"
                );


                /* ==================================
                   CONTINUE ANIMATION
                ================================== */

                if (progress < 1) {

                    requestAnimationFrame(animate);

                } else {

                    currentAttendance =
                        targetPercentage;

                }

            }


            requestAnimationFrame(animate);

        }


        /* ==========================================
           TARGET ATTENDANCE
        ========================================== */

        const targetAttendance = 90;


        /* ==========================================
           START ANIMATION
        ========================================== */

        animateAttendance(targetAttendance);


        /* ==========================================
           OPTIONAL GLOBAL FUNCTION

           You can change attendance later using:

           updateAttendance(95);

           or

           updateAttendance(100);
        ========================================== */

        window.updateAttendance = function (newPercentage) {

            /* Prevent invalid values */

            newPercentage =
                Math.max(
                    0,
                    Math.min(100, Number(newPercentage))
                );


            animateAttendance(newPercentage);

        };

    }


    /* ==========================================
       DYNAMIC PAGE TITLE
    ========================================== */

    document.title =
        "Attendance | Welcome Public School";

});

/* ==========================================
   RESPONSIVE SIDEBAR DRAWER
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    if (!menuToggle || !sidebar || !overlay) return;

    function openSidebar() {
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

});
