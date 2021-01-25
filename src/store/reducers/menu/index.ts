import {
  CHANGE_SEARCH_VALUE,
  SET_DEFAULT_CATEGORY_VAL,
  CHANGE_ACTIVE_CATEGORY,
} from '../../actions/menuAction';

export interface ICategoryList {
  categoryId: number;
  name: string;
}

export interface IProductList {
  img: string;
  productId: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
}

const initialState: any = {
  categories: [
    {
      categoryId: 0,
      name: 'Pizza',
    },
    {
      categoryId: 1,
      name: 'Burger',
    },
    {
      categoryId: 2,
      name: 'Sushi',
    },
    {
      categoryId: 3,
      name: 'Kebab',
    },
    {
      categoryId: 4,
      name: 'Soup',
    },
  ],
  products: [
    {
      img: 'https://cabare.gr/wp-content/uploads/2018/07/maki-sushi.jpg',
      productId: 0,
      categoryId: 2,
      name: 'Saske Roll',
      description: 'Kino, kani, rice, avocado, ikra...',
      price: 1400,
    },
    {
      img: 'https://cabare.gr/wp-content/uploads/2018/07/maki-sushi.jpg',
      productId: 1,
      categoryId: 2,
      name: 'Naruto Roll',
      description: 'Kino, kani, rice, avocado, ikra...',
      price: 1300,
    },
    {
      img: 'https://cabare.gr/wp-content/uploads/2018/07/maki-sushi.jpg',
      productId: 3,
      categoryId: 2,
      name: 'Boruto Roll',
      description: 'Kino, kani, rice, avocado, ikra...',
      price: 1200,
    },
  ],
  searchValue: '',

  // Selected Items
  selectedCategory: null,
};

export const menuReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SET_DEFAULT_CATEGORY_VAL:
      return {
        ...state,
        selectedCategory: state?.categories[0]?.categoryId,
      };

    case CHANGE_ACTIVE_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    default:
      return state;
  }
};
