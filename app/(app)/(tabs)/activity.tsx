import { View, StyleSheet } from "react-native";
import { Text } from "~/components/ui/text";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text className="text-center">
        There is no activity in your account yet.{"\n"}Try adding an expense!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
