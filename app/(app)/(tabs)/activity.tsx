import { useLanguage } from "~/hooks/useLanguage";
import { View, StyleSheet } from "react-native";
import { Text } from "~/components/ui/text";

export default function Tab() {
  const [t] = useLanguage();
  return (
    <View style={styles.container}>
      <Text className="text-center">{t("activity.empty")}</Text>
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
