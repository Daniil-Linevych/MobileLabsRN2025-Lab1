import {View, Text, StyleSheet} from 'react-native'

const Footer = () => {
   return (
    <View>
        <Text style={styles.footer}> Linevych Daniil IPZ-21-1 </Text>
    </View>
   );
}

const styles = StyleSheet.create({
    footer: {
      padding: 10,
      textAlign: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
  },
})

export default Footer