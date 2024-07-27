import { View, Text, StyleSheet } from "react-native";
import { Button } from "~/components/ui/button";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Button
        variant="outline"
        className="shadow shadow-foreground/5"
        onPress={() => {
          console.log("Hi");
        }}
      >
        <Text className="text-blue-700">Start a new group</Text>
      </Button>
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
