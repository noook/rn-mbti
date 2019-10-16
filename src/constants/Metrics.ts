import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');


const isIphoneX = () => {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  return width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT;
}
export default {
  screenWidth: width,
  screenHeight: height,
  isIphoneX: isIphoneX()
}