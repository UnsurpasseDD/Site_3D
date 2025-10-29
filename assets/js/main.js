const form = document.getElementById('registration-form');
const toast = document.getElementById('toast');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    try {
      const profiles = JSON.parse(localStorage.getItem('neonforgeProfiles') || '[]');
      profiles.push({
        ...profile,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('neonforgeProfiles', JSON.stringify(profiles));
    } catch (error) {
      console.error('Не удалось сохранить профиль в localStorage', error);
    }

    form.reset();
    showToast('Спасибо за регистрацию! Неоновые баллы уже начислены.');
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
