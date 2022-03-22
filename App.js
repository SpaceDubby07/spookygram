import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import MainNavigator from "./navigation/Navigation";
import reducers from "./store/reducers/reducers";

// function for slightly faster app speed
enableScreens();

// // This is for the reducer, we need to merge the reducers into one - combineReducers
const rootReducer = combineReducers({
  // this mergers the meals reducer into this root reducer, so we can manager state
  // using this 'meals' property
  posts: reducers,
});

// we pass this into the provider - interact with the redux store of data
const store = createStore(rootReducer);

// fetch the fonts!
const fetchFonts = () => {
  return Font.loadAsync({
    "mer-reg": require("./assets/fonts/Merienda-Regular.ttf"),
    "mer-bold": require("./assets/fonts/Merienda-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  // used for loading fonts, load them once data is loaded
  const [fontLoaded, setFontLoaded] = useState(false);

  // Data not loaded, then fetch fonts, when finished load data
  // otherwise log an error to console
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
