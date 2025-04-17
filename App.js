import AppNavigator from './navigation/AppNavigator';
import Header from './components/Header'
import Footer from './components/Footer'
import {NavigationContainer} from '@react-navigation/native'
import {View, StyleSheet} from 'react-native'

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <AppNavigator />
        <Footer />
      </View>
    </NavigationContainer>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;