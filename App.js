// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Main from './src/components/Main';

// const PressableComponent = () => {
//   const onPressFunction = () => {
//     console.log('You have pressed the button');
//     Alert.alert('You have pressed the button');
//   };

//   return (
//     <Pressable onPress={onPressFunction}>
//       <Text>Press me</Text>
//     </Pressable>
//   );
// };

export default function App() {
  return (
    <Main />
    // <View style={styles.container}>
    //   <PressableComponent />
    //   <Text>Open up App.js to start working on your app!{console.log("test")}</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
