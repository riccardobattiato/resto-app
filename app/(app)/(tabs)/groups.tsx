import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/lib/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, StyleSheet } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useLanguage } from "~/hooks/useLanguage";

export default function Tab() {
  const { colorScheme } = useColorScheme();
  const [t] = useLanguage();
  return (
    <View style={styles.container}>
      <Button variant="outline" size="lg" className="flex-row items-center">
        <AntDesign
          name="addusergroup"
          size={18}
          color={Colors[colorScheme ?? "light"].primary}
          className="mr-2"
        />
        <Text>{t("groups.empty")}</Text>
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
