// JavaScript para hacer que la pestaña sea interactiva
const tab = document.querySelector(".tab");
const tabContent = document.querySelector(".tab-content");

tab.addEventListener("click", () => {
    // Cambia el estado de visibilidad del contenido adicional al hacer clic en la pestaña
    if (tabContent.style.display === "none" || tabContent.style.display === "") {
        tabContent.style.display = "block";
    } else {
        tabContent.style.display = "none";
    }
});