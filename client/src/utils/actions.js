// UPDATE_PRODUCTS is used by the ProductList component. 
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// UPDATE_CATEGORIES works a lot like UPDATE_PRODUCTS in that we want to take the list of categories retrieved from the server by Apollo and store it in this global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// UPDATE_CURRENT_CATEGORY is sort of the connecting piece of data for the previous two actions we created
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';