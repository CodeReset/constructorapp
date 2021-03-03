import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryList from '../../../components/CategoryList/CategoryList';

// iMPORTS
import ProductList from '../../../components/ProductList/ProductList';
import TestProductList from '../../../components/TestProductList/TestProductList';
// iMPORTS

import Heading from '../../../components/UI/Heading/Heading';
import Loader from '../../../components/UI/Loader/Loader';
import SearchPanel from '../../../components/UI/SearchPanel/SearchPanel';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {ADD_TO_CART_MAIN} from '../../../store/actions/cartAdder';
import {
  CHANGE_SEARCH_VALUE,
  CHANGE_ACTIVE_CATEGORY,
  SET_DEFAULT_ADRESS,
  SET_SELECTED_DETAIL_PROFILE,
} from '../../../store/actions/menuAction';
import {getCategoryAndProducts} from '../../../store/actionTypes/menuActionTypes';
import {ICategoryList, IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';
import {selectProducts} from './selectProducts';
import {styles} from './style';

export const Main = () => {
  const dispatch = useDispatch();

  // Set default Values
  useEffect(() => {
    dispatch(getCategoryAndProducts());
    dispatch({type: SET_DEFAULT_ADRESS});
  }, []);

  //Get loader
  const loaderMenu = useSelector(
    (state: AppStore) => state.menuReducer.loadingData,
  );

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
    dispatch({type: CHANGE_ACTIVE_CATEGORY, payload: item.id});
  };

  // Get all products
  const producetsItems = useSelector((state: any) => selectProducts(state));

  // Add item to cart
  const addToCart = (item: IProductList) => {
    dispatch({type: ADD_TO_CART_MAIN, payload: item});
  };

  const goToDetailInformation = (item: IProductList) => {
    dispatch({type: SET_SELECTED_DETAIL_PROFILE, payload: item});
    navigationService.navigate(Screens.MENU_DETAILINFO_SCREEN);
  };

  return (
    <View style={styles.containerWrapper}>
      <ScrollView style={styles.scrollContainer}>
        <Heading marginTop={30}>Fast and {'\n'}Delicious Food</Heading>
        <SearchPanel
          searchValue={valueSearch}
          handleChangeSearchValue={changeSearchValues}
        />
        {loaderMenu ? (
          <Loader />
        ) : (
          <View>
            <CategoryList
              list={allCategories || []}
              activeCategory={activeCategory}
              changeActiveCategory={changeActiveCategory}
            />

            {/* Two different components */}
            {/* Horizontal */}
            <ProductList
              list={producetsItems}
              addToCart={addToCart}
              goToDetailInformation={goToDetailInformation}
            />
            {/* Vertical */}
            <TestProductList
              list={producetsItems}
              addToCart={addToCart}
              goToDetailInformation={goToDetailInformation}
            />
            {/* Two different components */}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
