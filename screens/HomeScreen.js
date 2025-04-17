import {View, FlatList, StyleSheet} from 'react-native';
import NewsItem from '../components/NewsItem';

const HomeScreen = () => {
  const newsData = [
    { id: '1', title: 'Заголовок новини 1', date: '2023-10-27', text: 'Короткий текст новини 1' },
    { id: '2', title: 'Заголовок новини 2', date: '2023-10-26', text: 'Короткий текст новини 2' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem title={item.title} date={item.date} text={item.text} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;