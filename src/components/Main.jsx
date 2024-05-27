// import Constants from 'expo-constants';
import {View, StyleSheet} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
const styles = StyleSheet.create({
  container:{
    // margin: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar textContent="Repositories"/>
      {/* <Text>Rate Application</Text> */}
      <Routes>
        <Route path="/" element={<RepositoryList />} exact/>
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
}

export default Main;