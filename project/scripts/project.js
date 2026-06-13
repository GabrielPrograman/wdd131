const transportMethods = [
    { id: 1, name: "Caravan Bus", time: "Group Scheduled", cost: "Included in Stake Budget"},
    {id: 2, name: "Public Metro", time: "06:00 - 21:00", cost: "Low"},
    {id: 3, name: "Private Taxi/Ride App", time: "24/7", cost: "High (Safe option)"}
];

function setupFooter() {
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan && modifiedSpan) {
        yearSpan.textContent = `${new Date().getFullYear()}`;
        modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }
}

function setupMobileMenu() {
    const menuBtn = document.querySelector("#menu-btn");
    const navMenu = document.querySelector("#nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {
                menuBtn.textContent = `✕`;
            } else {
                menuBtn.textContent = `☰`;
            
            }
       });
    }
}

function setupWelcomeMessage() {
    const visitMessageEl = document.getElementById("visit-message");

    if (visitMessageEl) {
        let visits = Number(window.localStorage.getItem("templeSiteVisits")) || 0;
        visits++;
        window.localStorage.setItem("templeSiteVisits", visits);

        if (visits === 1) {
            visitMessageEl.textContent = `Welcome! Start planning your first trip today.`;
            visitMessageEl.textContent = `Welcome back! You have accessed this guide ${visits} times.`;
        }
    }
}

function renderTransportCards() {
    const transportList = document.getElementById("transport-list");

    if (transportList) {
        transportMethods.forEach(method => {
            let card = document.createElement("div");
            card.className = "transport-card";

            card.innerHTML = `
            <h4>${method.name}</h4>
            <p><strong>Hours:</strong> ${method.time}</p>
            <p><strong>Cost:<strong> ${method.cost}</p>
            `;
            transportList.appendChild(card);
        });
    }
}

function renderSidebarTip() {
    const sidebarContainer = document.getElementById("dynamic-tips-container");

    if (sidebarContainer) {
        const tips = [
            "Bring your active recommend.",
            "Double-check session times online",
            "Caravans require 1 month notice."
        ];

        const randomTip = tips[Math.floor(Math.random() * tips.length)];

        let p = document.createElement("p");
        p.style.marginTop = "1rem";

        p.innerHTML = `<em>💡 Tip: ${randomTip}</em>`;
        sidebarContainer.appendChild(p);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupFooter();
    setupMobileMenu();
    setupWelcomeMessage();
    renderTransportCards();
    renderSidebarTip();
});