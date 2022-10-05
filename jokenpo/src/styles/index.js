import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
  },
  buttonPlayer: {
    padding: 16,
    width: (width - 64) / 3,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    fontSize: 64,
    fontWeight: '800',
    marginVertical: 32,
  },
  buttonSobre: {
    padding: 16,
    width: (width - 16),
    backgroundColor: 'rgba(0,0,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
})

export default styles
export { width, height }
