import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    //transparent black background
    backgroundColor: '#24292e',
    // ...
  },
  // ...
});

const AppBar = ({textContent}) => {
  return (
  <View style={styles.container}>
    <Pressable onPress={() => console.log('pressed')}>
    <Text color={'white'} fontWeight={'bold'}>
    {textContent}
    </Text>
    </Pressable>
  </View>
  );
};

export default AppBar;