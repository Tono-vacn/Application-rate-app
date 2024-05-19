import Constants from 'expo-constants';
import {Text, View, StyleSheet} from 'react-native';
import RepositoryList from './RepositoryList';
const styles = StyleSheet.create({
  container:{
    margin: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Application</Text>
      <RepositoryList />
    </View>
  );
}

export default Main;