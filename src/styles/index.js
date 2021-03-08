import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    justifyContent: 'space-between',
  },
  borderContainer: {
    padding: 16,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLarge: {fontSize: 60, fontWeight: '500'},
  textMedium: {fontSize: 24},
  textSmall: {fontSize: 18},
  margin: {
    margin: 24 * 2,
    height: '60%',
    justifyContent: 'space-between',
  },
  rowContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});
