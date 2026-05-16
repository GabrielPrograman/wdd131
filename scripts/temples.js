const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('show');

});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("LastModified").textContent = `Last Modified: ${document.all ? document.lastModified : document.lastModified}`;