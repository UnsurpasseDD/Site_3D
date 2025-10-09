const state = {
  currentCategory: 'all',
  minPrice: null,
  maxPrice: null,
  type: 'all',
  sort: 'popular',
};

const categoryTitleEl = document.getElementById('category-title');
const categoryDescriptionEl = document.getElementById('category-description');
const categoryBreadcrumbEl = document.getElementById('category-breadcrumb');
const productGridEl = document.getElementById('product-grid');
const typeFilterEl = document.getElementById('type-filter');
const minPriceEl = document.getElementById('min-price');
const maxPriceEl = document.getElementById('max-price');
const sortOrderEl = document.getElementById('sort-order');
const cartToggleEl = document.getElementById('cart-toggle');
const cartPanelEl = document.getElementById('cart-panel');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const toastEl = document.getElementById('toast');

init();

function init() {
  state.currentCategory = getCategoryFromUrl();
  renderCategoryInfo();
  populateTypeOptions();
  renderProducts();
  renderCartPanel();
  updateCartBadge();
  bindEvents();
}

function bindEvents() {
  minPriceEl?.addEventListener('input', handleFilterChange);
  maxPriceEl?.addEventListener('input', handleFilterChange);
  typeFilterEl?.addEventListener('change', handleFilterChange);
  sortOrderEl?.addEventListener('change', handleFilterChange);

  cartToggleEl?.addEventListener('click', () => {
    const isOpen = cartPanelEl?.classList.toggle('open');
    if (cartToggleEl) {
      cartToggleEl.setAttribute('aria-expanded', isOpen);
    }
    if (cartPanelEl) {
      cartPanelEl.setAttribute('aria-hidden', !isOpen);
    }
  });

  checkoutBtn?.addEventListener('click', () => {
    const cartItems = NeonForgeCart.readCart();
    if (cartItems.length === 0) {
      showToast('Добавьте товары в корзину, чтобы оформить заказ.');
      return;
    }
    showToast('Заказ оформлен! Бонусные баллы начислим автоматически.');
    NeonForgeCart.clearCart();
    renderCartPanel();
  });

  document.addEventListener('cart-updated', () => {
    renderCartPanel();
    updateCartBadge();
  });
}

function handleFilterChange() {
  state.minPrice = minPriceEl?.value ? Number(minPriceEl.value) : null;
  state.maxPrice = maxPriceEl?.value ? Number(maxPriceEl.value) : null;
  state.type = typeFilterEl?.value || 'all';
  state.sort = sortOrderEl?.value || 'popular';
  renderProducts();
}

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (category && catalog.meta[category]) {
    return category;
  }
  return 'all';
}

function renderCategoryInfo() {
  const meta = catalog.meta[state.currentCategory] || catalog.meta.all;
  if (categoryTitleEl) categoryTitleEl.textContent = meta.title;
  if (categoryDescriptionEl) categoryDescriptionEl.textContent = meta.description;
  if (categoryBreadcrumbEl) categoryBreadcrumbEl.textContent = meta.badge;
}

function populateTypeOptions() {
  if (!typeFilterEl) return;
  const types = new Set();
  getFilteredByCategory().forEach((product) => types.add(product.type));

  typeFilterEl.innerHTML = '<option value="all">Все виды</option>';
  Array.from(types)
    .sort()
    .forEach((type) => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      typeFilterEl.appendChild(option);
    });
}

function getFilteredByCategory() {
  if (state.currentCategory === 'all') {
    return catalog.products;
  }
  return catalog.products.filter((product) => product.category === state.currentCategory);
}

function applyFilters(products) {
  return products
    .filter((product) => {
      const { minPrice, maxPrice, type } = state;
      if (minPrice !== null && product.price < minPrice) return false;
      if (maxPrice !== null && product.price > maxPrice) return false;
      if (type !== 'all' && product.type !== type) return false;
      return true;
    })
    .sort((a, b) => {
      switch (state.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return Number(b.popular) - Number(a.popular);
      }
    });
}

function renderProducts() {
  if (!productGridEl) return;
  productGridEl.innerHTML = '';

  const filteredProducts = applyFilters(getFilteredByCategory());

  if (filteredProducts.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'card';
    emptyState.innerHTML = '<h3>Нет товаров</h3><p>Попробуйте изменить фильтры или вернитесь позже — скоро будет пополнение.</p>';
    productGridEl.appendChild(emptyState);
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <span>${product.type}</span>
        <span class="price">${product.price.toLocaleString('ru-RU')} ₽</span>
      </div>
      <button class="btn btn-primary cart-button" type="button">Добавить в корзину</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      NeonForgeCart.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
      });
      showToast(`«${product.name}» добавлен в корзину.`);
    });

    productGridEl.appendChild(card);
  });
}

function renderCartPanel() {
  if (!cartItemsEl || !cartTotalEl) return;
  const items = NeonForgeCart.readCart();
  cartItemsEl.innerHTML = '';

  if (items.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'Корзина пока пуста. Добавьте неоновый шедевр!';
    empty.style.color = 'rgba(226, 232, 240, 0.7)';
    cartItemsEl.appendChild(empty);
  } else {
    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <div>${item.quantity} × ${item.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div>
          <button type="button" aria-label="Уменьшить количество">−</button>
          <button type="button" aria-label="Увеличить количество">+</button>
          <button type="button" aria-label="Удалить из корзины">Удалить</button>
        </div>
      `;

      const [decreaseBtn, increaseBtn, removeBtn] = row.querySelectorAll('button');
      decreaseBtn.addEventListener('click', () => {
        if (item.quantity > 1) {
          NeonForgeCart.updateQuantity(item.id, item.quantity - 1);
        }
      });
      increaseBtn.addEventListener('click', () => {
        NeonForgeCart.updateQuantity(item.id, item.quantity + 1);
      });
      removeBtn.addEventListener('click', () => {
        NeonForgeCart.removeFromCart(item.id);
      });

      cartItemsEl.appendChild(row);
    });
  }

  cartTotalEl.textContent = `${NeonForgeCart.getCartTotal(items).toLocaleString('ru-RU')} ₽`;
}

function updateCartBadge() {
  if (!cartToggleEl) return;
  const items = NeonForgeCart.readCart();
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const badge = cartToggleEl.querySelector('span');
  if (badge) badge.textContent = count;
}

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3200);
}
