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

// Обновляем счётчик товаров в шапке при загрузке главной страницы
updateCartBadge();

document.addEventListener('cart-updated', updateCartBadge);

function updateCartBadge() {
  const count = getCartItems().reduce((total, item) => total + item.quantity, 0);
  let badge = document.querySelector('.cart-toggle span');

  if (!badge) {
    const cartLink = document.createElement('a');
    cartLink.href = 'sections.html?category=all';
    cartLink.className = 'btn btn-secondary';
    cartLink.textContent = `Корзина (${count})`;
    const actions = document.querySelector('.hero-actions');
    if (actions) {
      actions.appendChild(cartLink);
    }
    return;
  }

  badge.textContent = count;
}

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem('neonforgeCart') || '[]');
  } catch (error) {
    console.error('Не удалось прочитать корзину из localStorage', error);
    return [];
  }
}
