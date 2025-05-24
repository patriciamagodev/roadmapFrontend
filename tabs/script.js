const tabs = document.querySelectorAll(".tab"); // busca todos los botones
const contents = document.querySelectorAll(".tab-content"); // busca todo el contenido

// Agregamos un evento click a cada tab
// y al hacer click, quitamos la clase active de todos los tabs y contenidos
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    
    tabs.forEach(t => t.classList.remove("active")); // Quitamos la clase active de todos los tabs y contenidos
    contents.forEach(c => c.classList.remove("active")); // para que solo uno esté activo al mismo tiempo

    tab.classList.add("active"); // Agregamos la clase active al tab que fue clicado y al contenido correspondiente

    const contentId = tab.dataset.tab; // Obtenemos el id del contenido correspondiente al tab clicado por ejemplo "tab3" 
    document.getElementById(contentId).classList.add("active");
  });
});
