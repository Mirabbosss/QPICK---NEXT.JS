import { saveToLocalStorage, getFromLocalStorage } from './localeStorage';

export const addToBasket = (productId) => {
  const basket = getFromLocalStorage('basket') || [];
  if (!basket.includes(productId)) {
    basket.push(productId);
    saveToLocalStorage('basket', basket);
  }
};

export const removeFromBasket = (productId) => {
  const basket = getFromLocalStorage('basket') || [];
  const updatedBasket = basket.filter(id => id !== productId);
  saveToLocalStorage('basket', updatedBasket);
};

export const getBasketItems = (basketKey) => {
  return getFromLocalStorage(basketKey) || [];
};