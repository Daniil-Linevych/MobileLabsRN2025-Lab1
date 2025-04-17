import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
   return (
   <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.text}>FirstMobileApp</Text>
      </View>
   </View>
   );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 40
    },
    image: {
      width: 80,
      height: 80,  
      marginRight: 20
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default Header