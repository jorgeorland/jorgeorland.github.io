// Obtenemos el botón de llamada por su ID
const callButton = document.getElementById('call-button');

// Agregamos un evento de clic al botón de llamada
callButton.addEventListener('click', function() {
  // Reemplaza "1234567890" con tu número de teléfono real
  window.location.href = 'tel:+9931776316';
});
