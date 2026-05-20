document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    const tempElement = document.getElementById("temp-val");
    const windElement = document.getElementById("wind-val");
    const chillElement = document.getElementById("wind-chill");

    const t = parseFloat(tempElement.textContent);
    const w = parseFloat(windElement.textContent);

    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    if (t <= 10 && w > 4.8) {
        chillElement.textContent = calculateWindChill(t, w);
    } else {
        chillElement.textContent = "N/A";
    }

});