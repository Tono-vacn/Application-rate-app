import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import {Link} from 'react-router-native';

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
    <ScrollView horizontal>{/* ... */}
    <View><Pressable onPress={() => console.log('pressed')}>
    <Text color='white' fontWeight='bold' style={{
      paddingLeft: 20,
      paddingVertical: 10,
      fontSize: 20
    }}>
    {textContent}
    </Text>
    </Pressable>
    </View>
    <View style={{
      // marginLeft: 'auto',
      // marginRight: 20,
    }}><Link to='/login'><Text color='white' fontWeight='bold'  style={{
      paddingLeft: 20,
      paddingVertical: 10,
      fontSize: 20,
    }}>Sign In</Text></Link></View>
    </ScrollView>
    
  </View>
  );
};

export default AppBar;