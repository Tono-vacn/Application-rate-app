// import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, View } from "react-native";

const SignInFormat = ({ onsubmit }) => {
  return (
      <View>
      <FormikTextInput name="Username" placeholder="username" />
      <FormikTextInput name="Password" placeholder="Password" />
      <Pressable onPress={onsubmit}>
        <Text>Sign in</Text>
      </Pressable>
      </View>
  );
}

export default SignInFormat;