import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemProduct: {
    width: 147,
    maxWidth: '100%',
    backgroundColor: '#F3F6FA',
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 21,
  },
  itemProductImg: {
    width: '100%',
    height: 100,
  },
  wrapperProdText: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  headingText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#141929',
    fontFamily: 'Mont-SemiBold',
  },
  headingTextDisc: {
    color: '#9FABC2',
    marginTop: 10,
  },
  buttonAddCart: {
    width: 48,
    height: 48,
    backgroundColor: '#FD4035',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  flexWrapFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
  priceTextItem: {
    color: '#FD4035',
    fontFamily: 'Mont-Bold',
    fontSize: 16,
    lineHeight: 28,
  },
});
