function login() {
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value.trim();
  const msg = document.getElementById('msg');

  if (user === '' || pass === '') {
    msg.style.color = 'orange';
    msg.textContent = 'Faltan datos, compa 😬';
    return;
  }

  if (user === 'admin' && pass === '1234') {
    msg.style.color = 'lightgreen';
    msg.textContent = '¡Bienvenido, admin! 😎';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Usuario o contraseña incorrectos 😵';
  }
}
