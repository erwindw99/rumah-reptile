function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error("Failed load:", file, err));
}

loadComponent("navbar", "/rumah-reptile/components/navbar.html");
loadComponent("footer", "/rumah-reptile/components/footer.html");
