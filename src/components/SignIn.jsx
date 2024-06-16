import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .min(1, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username is required'),
  Password: yup
    .string()
    .min(5, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Password is required'),
});
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 20,
  },
  name_container:{
    // backgroundColor: '#0366d6',
    padding: 5,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
    marginVertical: 20,
    // width: 200,
  },
  password_container:{
    padding: 5,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  submit_button:{
    backgroundColor: '#0366d6',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const SignIn = () => {
  const { width } = useWindowDimensions();

  return (
    <Formik 
    initialValues={{ Username: '', Password: '' }} 
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="Username" placeholder="Username" style={
            [styles.name_container,{
              width: width * 0.8,
              // innerHeight: 40
            }]
          }/>
          <FormikTextInput name="Password" placeholder="Password" style={
            [styles.password_container,{
              width: width * 0.8
            }]
          }/>
          <View style={[styles.submit_button,{
            width: width * 0.8
          }]}>
          <Pressable onPress={handleSubmit}>
            <Text style={{
              color: 'white',
              // fontSize: 20,
            }}>Sign in</Text>
          </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;