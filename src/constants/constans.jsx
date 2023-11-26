import { Dimensions } from "react-native";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");
export const sizes = {
  icon: height * 0.025,
  largeicon: height * 0.07,
  cardItemHeight: height * 0.065,
  marginTopFromStatusBar: 30,
  marginBottomFromBottomTabBar: height / 6,
  pageLimit: 9,
  paddingHorizontalContainer: width * 0.05,
  cardBorderRadius: 8,
};
