import { View, StyleSheet } from "react-native";
import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/lib/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useLanguage } from "~/hooks/useLanguage";
import EmptyFriendsImage from "~/assets/vectors/undraw_friendship.svg";

export default function Tab() {
  const { colorScheme } = useColorScheme();
  const [t] = useLanguage();

  return (
    <View style={styles.container}>
      <View className="w-full h-[25vh] mb-8">
        <EmptyFriendsImage width="100%" height="100%" />
      </View>
      <Button variant="outline" size="lg" className="flex-row items-center">
        <AntDesign
          name="adduser"
          size={18}
          color={Colors[colorScheme ?? "light"].primary}
          className="mr-2"
        />
        <Text>{t("friends.empty")}</Text>
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
