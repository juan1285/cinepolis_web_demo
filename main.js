document.getElementById("ageForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    const age = parseInt(document.getElementById("ageInput").value);
  
    if (isNaN(age)) {
      alert("Por favor, ingrese una edad válida.");
    } else if (age < 15) {
      alert("¡Felicidades! Tienes un descuento,se te aplicara en la cuenta total.");
    } else {
      alert("Lo siento, no tienes descuento.");
    }
  });
  


  let cartItems = [];
let total = 0;

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            addToCart(name, price);
        });
    });
});

