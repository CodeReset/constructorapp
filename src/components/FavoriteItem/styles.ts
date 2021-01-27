import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fovoriteIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 30,
  },
  contextFavorite: {
    alignSelf: 'center',
    maxWidth: '50%',
  },
  fovoriteIconImage: {
    width: 90,
    height: 95,
    borderRadius: 20,
  },
  favoriteName: {
    fontSize: 16,
    lineHeight: 20,
    color: '#141929',
    fontFamily: 'Mont-SemiBold',
  },
  favoriteDescr: {
    fontSize: 12,
    lineHeight: 18,
    color: '#9FABC2',
    marginTop: 7,
    fontFamily: 'Mont-SemiBold',
  },
  favoritePrice: {
    marginTop: 10,
    color: '#FD4035',
    fontFamily: 'Mont-Bold',
    fontSize: 16,
    lineHeight: 20,
  },
});
