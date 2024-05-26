import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // marginTop: 20,
    //transparent black background
    backgroundColor: '#24292e',
    flexDirection: 'row',
    alignItems: 'center',
    // ...
  },
  // ...
});

const AppBar = ({textContent}) => {
  return (
  <View style={styles.container}>
    <Pressable onPress={() => console.log('pressed')}>
    <Text color='white' fontWeight='bold' style={{
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 20
    
    }}>
    {textContent}
    </Text>
    </Pressable>
  </View>
  );
};

export default AppBar;