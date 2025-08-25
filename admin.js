function adminLogin() {
  const username = document.getElementById('adminUsername').value.trim();
  const password = document.getElementById('adminPassword').value.trim();
  const messageEl = document.getElementById('message');

  if (username === 'admin' && password === 'admin123') {
    messageEl.style.color = 'green';
    messageEl.textContent = 'Login successful! Redirecting...';
    setTimeout(() => {
      window.location.href = 'admin-dashboard.html';  // <-- Yaha path check karein
    }, 1500);
  } else {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Invalid credentials!';
  }
}
