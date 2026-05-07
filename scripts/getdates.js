const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;