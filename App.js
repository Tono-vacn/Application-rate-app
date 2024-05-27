import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

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
    <>
    <NativeRouter>
      <Main />
    </NativeRouter>
    <StatusBar style="auto" />
    </>
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
