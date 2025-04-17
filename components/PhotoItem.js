import { View, Image, StyleSheet } from 'react-native';

const PhotoItem = ({ source }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1/2,
    aspectRatio: 1, 
    margin: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    padding: 30
  },
});

export default PhotoItem;