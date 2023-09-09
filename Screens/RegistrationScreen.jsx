import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <TextInput placeholder="Type text" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "green",
  },
});
