import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import KittensOverviewScreen from "../screens/KittensOverviewScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Colors from "../constants/Colors";

const KittensNavigator = createStackNavigator(
  {
    KittensOverviewScreen: {
      screen: KittensOverviewScreen,
      navigationOptions: {
        headerTitle: "Home Screen",
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerTitle: "Details Screen",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(KittensNavigator);
