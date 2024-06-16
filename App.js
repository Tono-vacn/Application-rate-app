import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';

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

const apolloClient = createApolloClient();

export default function App() {
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
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
