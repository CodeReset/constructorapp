import {
  CHANGE_SEARCH_VALUE,
  SET_DEFAULT_CATEGORY_VAL,
  CHANGE_ACTIVE_CATEGORY,
  TO_FROM_FOVORITE,
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
  size?: any;
  additional?: any;
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
      size: [
        {
          id: 0,
          size: 350,
          val: 'gram',
        },
        {
          id: 1,
          size: 500,
          val: 'gram',
        },
        {
          id: 2,
          size: 900,
          val: 'gram',
        },
      ],
      additional: [
        {
          id: 0,
          name: 'Hot Jalapeno',
          price: 2.5,
        },
        {
          id: 1,
          name: 'Mushrooms',
          price: 2.5,
        },
        {
          id: 2,
          name: 'Hot Chiken',
          price: 2.5,
        },
      ],
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

  // Fovorite array
  favoriteItems: [],

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

    // Add and Remove product from fovorite
    case TO_FROM_FOVORITE:
      if (
        !state.favoriteItems.some(
          (item: any) => item.productId === action.payload.productId,
        )
      ) {
        return {
          ...state,
          favoriteItems: [action.payload, ...state.favoriteItems],
        };
      }
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (item: any) => item.productId !== action.payload.productId,
        ),
      };

    default:
      return state;
  }
};
