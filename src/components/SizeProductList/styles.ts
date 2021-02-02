import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  qualityTopAlign: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qualityTopAlignText: {
    color: '#4A4C67',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-Bold',
  },
  wrapperSizeGramm: {
    flexDirection: 'row',
  },
  itemSizeGramm: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F3F6FA',
    borderRadius: 10,
    marginLeft: 15,
  },
  textSizeGramm: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    color: '#9FABC2',
  },
  activeItemSizeGramm: {
    backgroundColor: '#FD4035',
  },
  activeTextSizeGramm: {
    color: '#ffffff',
  },
});
