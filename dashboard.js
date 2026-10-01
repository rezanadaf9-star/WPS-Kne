// ===============================
// Active Sidebar Menu
// ===============================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// ===============================
// Notification
// ===============================

const notification = document.querySelector(".notification");

if(notification){

notification.addEventListener("click",()=>{

    alert("You have 3 new notifications!");

});

}

// ===============================
// Profile Dropdown
// ===============================

const profile = document.querySelector(".profile");

if(profile){

profile.addEventListener("click",()=>{

    alert("Profile Menu\n\n• My Profile\n• Settings\n• Logout");

});

}

// ===============================
// Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

    card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

    card.style.transform="translateY(0px)";

});

});

// ===============================
// Live Date
// ===============================

const today = new Date();

const options = {

weekday:"long",

year:"numeric",

month:"long",

day:"numeric"

};

console.log(today.toLocaleDateString("en-IN",options));

// ===============================
// Greeting
// ===============================

const hour = new Date().getHours();

let greeting="Good Morning";

if(hour>=12 && hour<17){

greeting="Good Afternoon";

}

else if(hour>=17){

greeting="Good Evening";

}

const heading=document.querySelector("header h1");

if(heading){

heading.innerHTML=greeting+", Md Jakariya 👋";

}

// ===============================
// Button Animation
// ===============================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.95)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="scale(1)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===============================
// Table Row Highlight
// ===============================

const rows=document.querySelectorAll("table tr");

rows.forEach((row,index)=>{

if(index===0) return;

row.addEventListener("mouseenter",()=>{

row.style.background="#edf3ff";

});

row.addEventListener("mouseleave",()=>{

row.style.background="white";

});

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href && href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Console Message
// ===============================

console.log("Student Dashboard Loaded Successfully!");

// ===============================
// Mobile Sidebar / Hamburger Menu
// ===============================

(function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".mobile-menu-toggle");

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
        if (event.key === "Escape") setSidebarState(false);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) setSidebarState(false);
    });
})();

console.log("Student Dashboard Loaded Successfully!");


// ===============================
// Floating Learn / Connect Touch Menu
// ===============================
(function () {
    const menu = document.querySelector('.floating-learning-menu');
    const learnButton = document.querySelector('.floating-learn');
    const connectButton = document.querySelector('.floating-ai');

    if (!menu || !learnButton || !connectButton) return;

    const isTouchLayout = () =>
        window.innerWidth <= 800 ||
        window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    function setFloatingMenu(open) {
        menu.classList.toggle('touch-open', open);
        menu.setAttribute('aria-expanded', String(open));
    }

    // On touch layouts, the first tap opens the two-button menu.
    // A second tap on Learn follows its normal link.
    learnButton.addEventListener('click', function (event) {
        if (!isTouchLayout()) return;

        if (!menu.classList.contains('touch-open')) {
            event.preventDefault();
            setFloatingMenu(true);
        }
    });

    // Connect remains a normal link when the touch menu is open.
    connectButton.addEventListener('click', function () {
        if (isTouchLayout()) setFloatingMenu(false);
    });

    // Tap/click anywhere outside the floating menu closes it.
    document.addEventListener('click', function (event) {
        if (!isTouchLayout()) return;
        if (!menu.contains(event.target)) setFloatingMenu(false);
    });

    window.addEventListener('resize', function () {
        if (!isTouchLayout()) setFloatingMenu(false);
    });
})();
