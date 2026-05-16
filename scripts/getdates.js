const yearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastmodified");
if (lastModifiedParagraph) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}