import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import Home from "./src/screens/Home/index";

import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Home/>
      </PersistGate>
    </Provider>
  );
};
export default App;

//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>App</Text>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default App;
