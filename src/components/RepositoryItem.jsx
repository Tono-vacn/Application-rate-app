import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    margin: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const RepositoryItem = ({item}) => {
return (  <View key={item.id} style={styles.container}>
  <Text>Full name: {item.fullName}</Text>
  <Text>Description: {item.description}</Text>
  <Text>Language: {item.language}</Text>
  <Text>Stars: {item.stargazersCount}</Text>
  <Text>Forks: {item.forksCount}</Text>
  <Text>Reviews: {item.reviewCount}</Text>
  <Text>Rating: {item.ratingAverage}</Text>
  {/* <Image
    style={{ width: 50, height: 50 }}
    source={{ uri: item.ownerAvatarUrl }}
  /> */}
</View>)
};

export default RepositoryItem;