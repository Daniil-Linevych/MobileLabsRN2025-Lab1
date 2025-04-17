import { View, FlatList, StyleSheet } from 'react-native';
import PhotoItem from '../components/PhotoItem'

const GalleryScreen = () => {

    const photos = [
    { id: '1', source: require('../assets/snack-icon.png') },
    { id: '2', source: require('../assets/snack-icon.png') },
    { id: '3', source: require('../assets/snack-icon.png') },
    { id: '4', source: require('../assets/snack-icon.png') },
    { id: '5', source: require('../assets/snack-icon.png') },
    { id: '6', source: require('../assets/snack-icon.png') },
    { id: '7', source: require('../assets/snack-icon.png') },
    { id: '8', source: require('../assets/snack-icon.png') },
    { id: '9', source: require('../assets/snack-icon.png') },
    { id: '10', source: require('../assets/snack-icon.png') },
  ];


  return (
    <View style={styles.container}>
      <FlatList
          data={photos}
          renderItem={({item}) => <PhotoItem source={item.source} />}
          keyExtractor={item => item.id}
          numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default GalleryScreen;