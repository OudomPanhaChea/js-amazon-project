export let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToLocalStorage();
}

export function passingOrder(order) {
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}