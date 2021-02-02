import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryList from '../../../components/CategoryList/CategoryList';
import ProductList from '../../../components/ProductList/ProductList';

import Heading from '../../../components/UI/Heading/Heading';
import SearchPanel from '../../../components/UI/SearchPanel/SearchPanel';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {
  CHANGE_SEARCH_VALUE,
  SET_DEFAULT_CATEGORY_VAL,
  CHANGE_ACTIVE_CATEGORY,
  SET_DEFAULT_ADRESS,
} from '../../../store/actions/menuAction';
import {ICategoryList, IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';
import {selectProducts} from './selectProducts';
import {styles} from './style';

export const Main = () => {
  const dispatch = useDispatch();

  // Set default Values
  useEffect(() => {
    dispatch({type: SET_DEFAULT_CATEGORY_VAL});
    dispatch({type: SET_DEFAULT_ADRESS});
  }, []);

  // Get all categories
  const allCategories = useSelector(
    (state: AppStore) => state.menuReducer.categories,
  );

  // Get active category
  const activeCategory = useSelector(
    (state: AppStore) => state.menuReducer.selectedCategory,
  );

  // Get searchValues item
  const valueSearch = useSelector(
    (state: AppStore) => state.menuReducer.searchValue,
  );
  // Change Search values
  const changeSearchValues = (val: string) => {
    dispatch({type: CHANGE_SEARCH_VALUE, payload: val});
  };

  // change active category
  const changeActiveCategory = (item: ICategoryList) => {
    dispatch({type: CHANGE_ACTIVE_CATEGORY, payload: item.categoryId});
  };

  // Get all products
  const producetsItems = useSelector((state: any) => selectProducts(state));

  // Add item to cart
  const addToCart = (item: IProductList) => {
    console.log('Add item to cart', item);
  };

  const goToDetailInformation = (item: IProductList) => {
    navigationService.navigate(Screens.MENU_DETAILINFO_SCREEN, {info: item});
  };

  return (
    <View style={styles.containerWrapper}>
      <ScrollView style={styles.scrollContainer}>
        <Heading marginTop={30}>Fast and {'\n'}Delicious Food</Heading>
        <SearchPanel
          searchValue={valueSearch}
          handleChangeSearchValue={changeSearchValues}
        />
        <CategoryList
          list={allCategories || []}
          activeCategory={activeCategory}
          changeActiveCategory={changeActiveCategory}
        />

        <ProductList
          list={producetsItems}
          addToCart={addToCart}
          goToDetailInformation={goToDetailInformation}
        />
      </ScrollView>
    </View>
  );
};
