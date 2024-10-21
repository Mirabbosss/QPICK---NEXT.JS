import { saveToLocalStorage, getFromLocalStorage } from './localeStorage';

export const addToFavourites = (productId, favouritesKey) => {
  const favourites = getFromLocalStorage(favouritesKey) || [];
  if (!favourites.includes(productId)) {
    favourites.push(productId);
    saveToLocalStorage(favouritesKey, favourites);
  }
};

export const removeFromFavourites = (productId, favouritesKey) => {
  const favourites = getFromLocalStorage(favouritesKey) || [];
  const updatedFavourites = favourites.filter(id => id !== productId);
  saveToLocalStorage(favouritesKey, updatedFavourites);
};

export const getFavourites = (favouritesKey) => {
  return getFromLocalStorage(favouritesKey) || [];
};