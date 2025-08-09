import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView } from 'react-native';
import ProductList from './src/components/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Contact from './src/components/Contact';

const stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
    {/* <SafeAreaView style={styles.container}>
      
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        <ProductList />
     
    </SafeAreaView> */}
    <stack.Navigator>
      <stack.Screen name="ProductList" component={ProductList} />
      <stack.Screen name='Contact' component={Contact} />
    </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
