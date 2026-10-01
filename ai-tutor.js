/* =========================================================
   NADAF CREATES AI TUTOR
   Frontend Demo Version
   ========================================================= */


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const writtenModeButton =
    document.getElementById("writtenModeButton");

const chatModeButton =
    document.getElementById("chatModeButton");

const voiceModeButton =
    document.getElementById("voiceModeButton");

const voiceModePanel =
    document.getElementById("voiceModePanel");

const aiChatBody =
    document.getElementById("aiChatBody");

const textInputArea =
    document.getElementById("textInputArea");

const chatInput =
    document.getElementById("chatInput");

const sendMessageButton =
    document.getElementById("sendMessageButton");

const microphoneButton =
    document.getElementById("microphoneButton");

const attachmentButton =
    document.getElementById("attachmentButton");

const chatMessages =
    document.getElementById("chatMessages");

const aiWelcomeState =
    document.getElementById("aiWelcomeState");

const aiTypingIndicator =
    document.getElementById("aiTypingIndicator");

const modelSelectorButton =
    document.getElementById("modelSelectorButton");

const modelDropdown =
    document.getElementById("modelDropdown");

const selectedModelName =
    document.getElementById("selectedModelName");

const selectedModelIcon =
    document.getElementById("selectedModelIcon");

const modelOptions =
    document.querySelectorAll(".model-option");

const suggestedPrompts =
    document.querySelectorAll(".suggested-prompt");

const startVoiceButton =
    document.getElementById("startVoiceButton");


/* =========================================================
   STATE
   ========================================================= */

let currentMode = "written";

let selectedModel = "Myelin Smart";

let isTyping = false;

let microphoneActive = false;


/* =========================================================
   ACTIVATE MODE BUTTON
   ========================================================= */

function resetModeButtons() {

    writtenModeButton.classList.remove("active");

    chatModeButton.classList.remove("active");

    voiceModeButton.classList.remove("active");

}


/* =========================================================
   WRITTEN MODE
   ========================================================= */

function activateWrittenMode() {

    currentMode = "written";

    resetModeButtons();

    writtenModeButton.classList.add("active");

    voiceModePanel.classList.remove("active");

    aiChatBody.classList.remove("voice-active");

    textInputArea.style.display = "block";

    aiWelcomeState.style.display = "flex";

    chatInput.placeholder =
        "Write your doubt in detail...";

    chatInput.focus();

}


/* =========================================================
   CHAT MODE
   ========================================================= */

function activateChatMode() {

    currentMode = "chat";

    resetModeButtons();

    chatModeButton.classList.add("active");

    voiceModePanel.classList.remove("active");

    aiChatBody.classList.remove("voice-active");

    textInputArea.style.display = "block";

    aiWelcomeState.style.display = "flex";

    chatInput.placeholder =
        "Chat with Myelin AI by Nadaf Creates...";

    chatInput.focus();

}


/* =========================================================
   VOICE MODE
   ========================================================= */

function activateVoiceMode() {

    currentMode = "voice";

    resetModeButtons();

    voiceModeButton.classList.add("active");

    textInputArea.style.display = "none";

    aiWelcomeState.style.display = "none";

    voiceModePanel.classList.add("active");

    aiChatBody.classList.add("voice-active");

}


/* =========================================================
   MODE EVENTS
   ========================================================= */

writtenModeButton.addEventListener(
    "click",
    activateWrittenMode
);


chatModeButton.addEventListener(
    "click",
    activateChatMode
);


voiceModeButton.addEventListener(
    "click",
    activateVoiceMode
);


/* =========================================================
   MODEL DROPDOWN
   ========================================================= */

modelSelectorButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        modelDropdown.classList.toggle("show");

    }
);


/* =========================================================
   MODEL SELECTION
   ========================================================= */

modelOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                selectedModel =
                    option.getAttribute("data-model");


                selectedModelName.textContent =
                    selectedModel;


                selectedModelIcon.textContent =
                    selectedModel.charAt(6) || "N";


                modelOptions.forEach(
                    function (item) {
                        item.classList.remove("selected");
                    }
                );


                option.classList.add("selected");


                modelDropdown.classList.remove("show");

            }
        );

    }
);


/* =========================================================
   CLOSE DROPDOWN OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.closest(".ai-model-selector")
        ) {

            modelDropdown.classList.remove("show");

        }

    }
);


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent = text;

    return element.innerHTML;

}


/* =========================================================
   SCROLL CHAT
   ========================================================= */

function scrollChatToBottom() {
    requestAnimationFrame(function () {
        aiChatBody.scrollTo({
            top: aiChatBody.scrollHeight,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   ADD USER MESSAGE
   ========================================================= */

function addUserMessage(message) {

    const messageElement =
        document.createElement("div");

    messageElement.className =
        "chat-message user";


    messageElement.innerHTML = `

        <div class="message-avatar">
            <i class="fa-solid fa-user"></i>
        </div>

        <div class="message-content">
            ${escapeHTML(message)}
        </div>

    `;


    chatMessages.appendChild(messageElement);

    scrollChatToBottom();

}


/* =========================================================
   ADD AI MESSAGE
   ========================================================= */

function addAIMessage(message) {

    const messageElement =
        document.createElement("div");

    messageElement.className =
        "chat-message ai";


    messageElement.innerHTML = `

        <div class="message-avatar">
            N
        </div>

        <div class="message-content">
            ${message}
        </div>

    `;


    chatMessages.appendChild(messageElement);

    scrollChatToBottom();

}


/* =========================================================
   TYPING INDICATOR
   ========================================================= */

function showTypingIndicator() {

    aiTypingIndicator.classList.add("show");

    scrollChatToBottom();

}


function hideTypingIndicator() {

    aiTypingIndicator.classList.remove("show");

}


/* =========================================================
   DEMO RESPONSE ENGINE
   ========================================================= */

function generateDemoResponse(userMessage) {

    const message =
        userMessage.toLowerCase();


    if (
        message.includes("math") ||
        message.includes("mathematics") ||
        message.includes("algebra") ||
        message.includes("calculus")
    ) {

        return `
            Let's solve this Maths concept step by step.
            <br><br>
            First, identify the given values, then select
            the correct formula and simplify the expression.
            <br><br>
            Share the exact question for a complete solution.
        `;

    }


    if (
        message.includes("python") ||
        message.includes("coding") ||
        message.includes("programming") ||
        message.includes("javascript")
    ) {

        return `
            I can explain this programming topic in a
            beginner-friendly way.
            <br><br>
            We can divide it into:
            <br>
            1. Concept<br>
            2. Syntax<br>
            3. Example<br>
            4. Practice problem
        `;

    }


    if (
        message.includes("physics") ||
        message.includes("force") ||
        message.includes("motion")
    ) {

        return `
            Let's understand the Physics concept using
            the basic idea, formula, units, and one example.
            <br><br>
            Please mention the exact chapter or question.
        `;

    }


    if (
        message.includes("chemistry") ||
        message.includes("chemical")
    ) {

        return `
            I can help you revise Chemistry through
            definitions, reactions, examples, and quick
            memory techniques.
            <br><br>
            Tell me the chapter name.
        `;

    }


    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {

        return `
            Hello! 👋
            <br><br>
            I'm Myelin AI, your personal study assistant.
            What would you like to learn today?
        `;

    }


    if (
        message.includes("revision") ||
        message.includes("study plan")
    ) {

        return `
            Here's a simple study structure:
            <br><br>
            <strong>1.</strong> Understand the concept<br>
            <strong>2.</strong> Review important formulas<br>
            <strong>3.</strong> Solve examples<br>
            <strong>4.</strong> Practice without looking at solutions<br>
            <strong>5.</strong> Revise mistakes
        `;

    }


    return `
        That's an interesting doubt.
        <br><br>
        I can help you understand it clearly with
        simple explanations, examples, and practice.
        <br><br>
        Please share the subject, chapter, or complete
        question for a more accurate answer.
    `;

}


/* =========================================================
   SEND MESSAGE
   ========================================================= */

function sendMessage() {

    const message =
        chatInput.value.trim();


    if (!message || isTyping) {
        return;
    }


    aiWelcomeState.style.display = "none";


    addUserMessage(message);


    chatInput.value = "";

    chatInput.style.height = "auto";


    isTyping = true;

    showTypingIndicator();


    setTimeout(
        function () {

            hideTypingIndicator();


            const response =
                generateDemoResponse(message);


            addAIMessage(response);


            isTyping = false;

        },
        1000
    );

}


/* =========================================================
   SEND BUTTON
   ========================================================= */

sendMessageButton.addEventListener(
    "click",
    sendMessage
);


/* =========================================================
   ENTER TO SEND
   ========================================================= */

chatInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


/* =========================================================
   AUTO RESIZE TEXTAREA
   ========================================================= */

chatInput.addEventListener(
    "input",
    function () {

        this.style.height = "auto";

        this.style.height =
            Math.min(this.scrollHeight, 125) + "px";

    }
);


/* =========================================================
   SUGGESTED PROMPTS
   ========================================================= */

suggestedPrompts.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                chatInput.value =
                    button.textContent.trim();

                chatInput.focus();

                chatInput.style.height = "auto";

                chatInput.style.height =
                    Math.min(chatInput.scrollHeight, 125) + "px";

            }
        );

    }
);


/* =========================================================
   MICROPHONE BUTTON
   ========================================================= */

microphoneButton.addEventListener(
    "click",
    function () {

        microphoneActive =
            !microphoneActive;


        this.classList.toggle(
            "microphone-active",
            microphoneActive
        );


        if (microphoneActive) {

            this.innerHTML =
                '<i class="fa-solid fa-stop"></i>';

            this.title =
                "Stop microphone";

        }

        else {

            this.innerHTML =
                '<i class="fa-solid fa-microphone"></i>';

            this.title =
                "Use microphone";

        }

    }
);


/* =========================================================
   ATTACHMENT BUTTON
   ========================================================= */

attachmentButton.addEventListener(
    "click",
    function () {

        alert(
            "File and image upload will be added later."
        );

    }
);


/* =========================================================
   START VOICE SESSION
   ========================================================= */

startVoiceButton.addEventListener(
    "click",
    function () {

        alert(
            "Voice AI integration will be added later."
        );

    }
);


/* =========================================================
   INITIAL STATE
   ========================================================= */

activateWrittenMode();

/* FUll Screen Window */

const aiTutorWindow = document.querySelector(".ai-tutor-window");
const fullscreenButton = document.getElementById("aiFullscreenButton");

if (fullscreenButton && aiTutorWindow) {
    fullscreenButton.addEventListener("click", () => {
        aiTutorWindow.classList.toggle("fullscreen");

        const icon = fullscreenButton.querySelector("i");

        if (aiTutorWindow.classList.contains("fullscreen")) {
            icon.classList.remove("fa-expand");
            icon.classList.add("fa-compress");

            fullscreenButton.title = "Exit Fullscreen";
            fullscreenButton.setAttribute(
                "aria-label",
                "Exit AI Tutor fullscreen"
            );
        } else {
            icon.classList.remove("fa-compress");
            icon.classList.add("fa-expand");

            fullscreenButton.title = "Fullscreen";
            fullscreenButton.setAttribute(
                "aria-label",
                "Open AI Tutor fullscreen"
            );
        }
    });
}

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
