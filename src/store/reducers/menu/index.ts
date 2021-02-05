import {
  CHANGE_SEARCH_VALUE,
  CHANGE_ACTIVE_CATEGORY,
  TO_FROM_FOVORITE,
  SET_SELECTED_DETAIL_PROFILE,
  SET_ALL_MENU_CATEGORY,
  SET_ALL_MENU_PRODUCTS,
} from '../../actions/menuAction';

export interface ICategoryList {
  id: string;
  appId: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProductList {
  id: string;
  appId: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  img: string;
  options: null | any;
  size?: any;
  additional?: any;
  count: number;
  createdAt?: string;
  updatedAt?: string;
}

const initialState: any = {
  // Menu
  categories: [],
  products: [],

  // Fovorite array
  favoriteItems: [],

  // Searcher
  searchValue: '',

  // Selected Items
  selectedCategory: {},
  selectedProduct: {},
};

export const menuReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    // Заполнение категориями
    case SET_ALL_MENU_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        selectedCategory: action.payload[0].id,
      };
    // Заполнение продуктами
    case SET_ALL_MENU_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_SELECTED_DETAIL_PROFILE:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case CHANGE_ACTIVE_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    // Add and Remove product from fovorite
    case TO_FROM_FOVORITE:
      if (
        !state.favoriteItems.some((item: any) => item.id === action.payload.id)
      ) {
        return {
          ...state,
          favoriteItems: [action.payload, ...state.favoriteItems],
        };
      }
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (item: any) => item.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};
