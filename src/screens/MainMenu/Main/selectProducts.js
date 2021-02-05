import {createSelector} from 'reselect';

const activeCategory = (state) => state.menuReducer.selectedCategory;
const allProducts = (state) => state.menuReducer.products;
const searchValue = (state) => state.menuReducer.searchValue;

export const selectProducts = createSelector(
  [activeCategory, allProducts, searchValue],
  (active, products, value) => {
    let arrayProducts = [];
    if (products.length) {
      arrayProducts = products.filter((item) => item.categoryId === active);
      if (value.trim()) {
        arrayProducts = arrayProducts.filter((item) =>
          item.name.includes(value),
        );
      }
    }

    return arrayProducts;
  },
);
