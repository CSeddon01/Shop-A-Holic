// A reducer is a function that updates state by returning a new state object and never alters the original state object.
// state is intended to be immutable, meaning it never should be directly altered in any way.
import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

      case ADD_MULTIPLE_TO_CART:
  return {
    ...state,
    cart: [...state.cart, ...action.products],
  };
//This test will remove both cart items from initialState, one after the other. We want to test the removal of both because removing the last item from the cart should also close it
  case REMOVE_FROM_CART:
  let newState = state.cart.filter(product => {
    return product._id !== action._id;
  });

  return {
    ...state,
    cartOpen: newState.length > 0,
    cart: newState
  };
//ensure that only the first items quantity is updated
//uses map method to create a new array because the original state is immutable
  case UPDATE_CART_QUANTITY:
  return {
    ...state,
    cartOpen: true,
    cart: state.cart.map(product => {
      if (action._id === product._id) {
        product.purchaseQuantity = action.purchaseQuantity;
      }
      return product;
    })
  };

  case CLEAR_CART:
  return {
    ...state,
    cartOpen: false,
    cart: []
  };
//expects cartOpen to be the opposite of its previous state
  case TOGGLE_CART:
  return {
    ...state,
    cartOpen: !state.cartOpen
  };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
