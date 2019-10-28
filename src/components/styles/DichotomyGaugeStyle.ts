import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  spacer: {
    flexGrow: 1,
  },
  coupleTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#576071',
    fontWeight: '500',
  },
  coupleDescription: {
    textAlign: 'center',
    color: Colors.gray,
    marginVertical: 5,
  },
  gauge: {
    borderRadius: 10,
    height: 15,
    marginHorizontal: 15,
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '500',
  },
  value: {
    height: '100%',
  },
  valueLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  valueRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  legendContainer: {
    marginTop: 5,
    justifyContent: 'space-between',
  },
  legend: {
    textTransform: 'uppercase',
    color: Colors.gray,
    fontWeight: '500',
  },
});
