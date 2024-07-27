import { View } from "react-native";
import { useLanguage } from "~/hooks/useLanguage";
import EmptyScreen from "~/components/EmptyScreen";

export default function Tab() {
  const [t] = useLanguage();

  return (
    <View className="flex-1 justify-center items-center px-8">
      <EmptyScreen
        type="friends"
        description={t("friends.empty.paragraph")}
        btnLabel={t("friends.empty.button")}
      />
    </View>
  );
}
