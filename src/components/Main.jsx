// import Constants from 'expo-constants';
import {Text, View, StyleSheet} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
const styles = StyleSheet.create({
  container:{
    // margin: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar textContent="Repositories"/>
      {/* <Text>Rate Application</Text> */}
      <RepositoryList />
    </View>
  );
}

export default Main;