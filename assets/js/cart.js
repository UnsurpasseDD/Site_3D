const CART_STORAGE_KEY = 'neonforgeCart';

function readCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (error) {
    console.error('Ошибка чтения корзины', error);
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  document.dispatchEvent(new CustomEvent('cart-updated', { detail: items }));
}

function addToCart(product) {
  const items = readCart();
  const existing = items.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    items.push({ ...product, quantity: 1 });
  }

  writeCart(items);
  return items;
}

function removeFromCart(productId) {
  const items = readCart().filter((item) => item.id !== productId);
  writeCart(items);
  return items;
}

function updateQuantity(productId, quantity) {
  const items = readCart();
  const item = items.find((cartItem) => cartItem.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    writeCart(items);
  }
  return items;
}

function clearCart() {
  writeCart([]);
}

function getCartTotal(items = readCart()) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

window.NeonForgeCart = {
  readCart,
  writeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCartTotal,
};
