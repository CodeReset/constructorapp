export const GET_ALL_USERS = 'getAllUsers';
export const REMOVE_USERS = 'removeUsers';
export const ADD_TEXT = 'addText';

export const CHANGE_SEARCH_VALUE = 'changeSearchValue';
export const SET_DEFAULT_CATEGORY_VAL = 'changeDefaultCatVal';
export const CHANGE_ACTIVE_CATEGORY = 'changeActiveCategory';

// Cart
export const REMOVE_FROM_CART = 'removeFromCart';

export const TO_FROM_FOVORITE = 'toFromFovorite';

export interface GetUsers {
  type: typeof GET_ALL_USERS;
  payload: any;
}

export interface RemoveAllUsers {
  type: typeof REMOVE_USERS;
  payload?: any;
}

export interface adderTextTest {
  type: typeof ADD_TEXT;
  payload?: any;
}

export type DispatchType = GetUsers | RemoveAllUsers | adderTextTest;
