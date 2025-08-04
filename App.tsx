import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView } from 'react-native';
import ProductList from './src/components/ProductList';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        <ProductList />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
