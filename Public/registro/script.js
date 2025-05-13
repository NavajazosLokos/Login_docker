function register() {
  const email = document.getElementById('email').value.trim();
  const nickname = document.getElementById('nickname').value.trim();
  const pass = document.getElementById('password').value.trim();
  const confirm = document.getElementById('confirm').value.trim();
  const msg = document.getElementById('msg');

  if (!email || !nickname || !pass || !confirm) {
    msg.style.color = 'orange';
    msg.textContent = 'Todos los campos son obligatorios 🧐';
    return;
  }

  // Validación básica de correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    msg.style.color = 'red';
    msg.textContent = 'El correo no es válido 📭';
    return;
  }

  if (pass.length < 6) {
    msg.style.color = 'red';
    msg.textContent = 'La contraseña debe tener al menos 6 caracteres 🔐';
    return;
  }

  if (pass !== confirm) {
    msg.style.color = 'red';
    msg.textContent = 'Las contraseñas no coinciden ❌';
    return;
  }

  msg.style.color = 'lightgreen';
  msg.textContent = `¡Cuenta creada para ${nickname}! 🎉`;
}
