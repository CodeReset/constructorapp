import React from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ButtonIcon from '../../../assets/svg/ButtonIcon';

import SearchIcon from '../../../assets/svg/SearchIcon';
import {styles} from './styles';

interface Props {
  searchValue: string;
  handleChangeSearchValue: (val: string) => void;
}

const SearchPanel = ({searchValue = '', handleChangeSearchValue}: Props) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputWrapper}>
        <SearchIcon />
        <TextInput
          style={styles.SearchInput}
          value={searchValue}
          onChangeText={handleChangeSearchValue}
          placeholder="Search"
          placeholderTextColor="#9FABC2"
        />
      </View>
      <View style={styles.buttonSvgWrapper}>
        <TouchableOpacity style={styles.buttonSvg}>
          <ButtonIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchPanel;
