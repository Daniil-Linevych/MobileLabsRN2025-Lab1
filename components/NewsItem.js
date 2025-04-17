import { View, Text, Image, StyleSheet } from 'react-native';

const NewsItem = ({ title, date, text }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  text: {
    fontSize: 14,
  },
});

export default NewsItem;