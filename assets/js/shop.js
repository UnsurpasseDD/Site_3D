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
const filtersSection = document.querySelector('.filters');
const toastEl = document.getElementById('toast');
const productInfoModal = document.getElementById('product-info-modal');
const productInfoTitle = document.getElementById('product-info-title');
const productInfoDescription = document.getElementById('product-info-description');
const productInfoDetails = document.getElementById('product-info-details');
const productInfoClose = document.getElementById('product-info-close');
const productInfoBackdrop = productInfoModal?.querySelector('[data-close-modal]');

let lastFocusedElement = null;

init();

function init() {
  state.currentCategory = getCategoryFromUrl();
  renderCategoryInfo();
  populateTypeOptions();
  renderProducts();
  bindEvents();
  setupModal();
}

function bindEvents() {
  minPriceEl?.addEventListener('input', handleFilterChange);
  maxPriceEl?.addEventListener('input', handleFilterChange);
  typeFilterEl?.addEventListener('change', handleFilterChange);
  sortOrderEl?.addEventListener('change', handleFilterChange);

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

  if (state.currentCategory === 'custom') {
    filtersSection?.classList.add('is-hidden');
    renderCustomRequest();
    return;
  }

  filtersSection?.classList.remove('is-hidden');

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
      <figure class="product-media" style="--product-gradient: ${product.gradient}; --product-glow: ${product.glow};">
        <div class="media-orb"></div>
        <div class="media-ring"></div>
        <span class="sr-only">${product.name}</span>
      </figure>
      <div class="product-content">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <span>${product.type}</span>
        <span class="price">${product.price.toLocaleString('ru-RU')} ₽</span>
      </div>
      <div class="product-actions">
        <button class="btn btn-secondary info-button" type="button">О товаре</button>
        <a class="btn btn-primary order-button" href="https://t.me/PrintMatter3D" target="_blank" rel="noopener">Заказать</a>
      </div>
      </div>
    `;

    const infoButton = card.querySelector('.info-button');

    infoButton?.addEventListener('click', () => {
      openProductInfo(product);
    });

    productGridEl.appendChild(card);
  });
}

function renderCustomRequest() {
  if (!productGridEl) return;
  const request = document.createElement('section');
  request.className = 'request-card';
  request.innerHTML = `
    <div class="request-copy">
      <h3>Создадим изделие по вашему брифу</h3>
      <p>Опишите идею, прикрепите фото или 3D-модель, укажите материалы и сроки. Мы ответим в течение рабочего дня.</p>
      <ul>
        <li>• Любые размеры и совместимость с вашим оборудованием;</li>
        <li>• Подбор пластика, смолы или металла под задачу;</li>
        <li>• Сопровождение дизайнера и инженера до финального согласования.</li>
      </ul>
      <div class="messengers">
        <a class="btn btn-secondary" href="https://wa.me/79990000000" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn btn-secondary" href="https://t.me/neonforge3d" target="_blank" rel="noopener">Telegram</a>
      </div>
    </div>
    <form class="request-form">
      <label>
        <span>Имя</span>
        <input type="text" name="name" required placeholder="Как к вам обращаться?">
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" name="email" required placeholder="Для отправки расчёта">
      </label>
      <label>
        <span>Расскажите об изделии</span>
        <textarea name="details" rows="4" required placeholder="Материал, размеры, желаемые эффекты"></textarea>
      </label>
      <label class="file-input">
        <span>Добавьте фото или эскиз</span>
        <input type="file" name="attachment" accept="image/*">
      </label>
      <button class="btn btn-primary" type="submit">Отправить запрос</button>
      <small>После отправки мы свяжемся с вами и начислим приветственные баллы за первый заказ.</small>
    </form>
  `;

  const form = request.querySelector('form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Запрос отправлен! Мы вернёмся с расчётом в течение дня.');
    form.reset();
  });

  productGridEl.appendChild(request);
}

function setupModal() {
  if (!productInfoModal) return;

  productInfoClose?.addEventListener('click', closeProductInfo);
  productInfoBackdrop?.addEventListener('click', closeProductInfo);

  productInfoModal.addEventListener('click', (event) => {
    if (event.target === productInfoModal) {
      closeProductInfo();
    }
  });

  document.addEventListener('keydown', handleModalKeydown);
}

function openProductInfo(product) {
  if (!productInfoModal || !productInfoTitle || !productInfoDescription || !productInfoDetails) return;

  lastFocusedElement = document.activeElement;

  productInfoTitle.textContent = product.name;
  productInfoDescription.textContent = product.description;
  productInfoDetails.innerHTML = '';

  if (Array.isArray(product.details) && product.details.length > 0) {
    product.details.forEach((detail) => {
      const row = document.createElement('li');
      const label = document.createElement('strong');
      label.textContent = detail.label;
      const value = document.createElement('span');
      value.textContent = detail.value;
      row.append(label, value);
      productInfoDetails.appendChild(row);
    });
  } else {
    const row = document.createElement('li');
    row.textContent = 'Подробности о товаре скоро появятся.';
    productInfoDetails.appendChild(row);
  }

  productInfoModal.classList.add('is-open');
  productInfoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  productInfoClose?.focus();
}

function closeProductInfo() {
  if (!productInfoModal) return;
  productInfoModal.classList.remove('is-open');
  productInfoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function handleModalKeydown(event) {
  if (event.key === 'Escape' && productInfoModal?.classList.contains('is-open')) {
    closeProductInfo();
  }
}

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3200);
}
