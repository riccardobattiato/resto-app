import { View, StyleSheet } from "react-native";
import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/lib/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
export default function Tab() {
  const { colorScheme } = useColorScheme();

  return (
    <View style={styles.container}>
      <Button variant="outline" size="lg" className="flex-row items-center">
        <AntDesign
          name="adduser"
          size={18}
          color={Colors[colorScheme ?? "light"].primary}
          className="mr-2"
        />
        <Text>Add more friends</Text>
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
