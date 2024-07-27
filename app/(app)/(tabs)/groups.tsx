import { View } from "react-native";
import { useLanguage } from "~/hooks/useLanguage";
import EmptyScreen from "~/components/EmptyScreen";

export default function Tab() {
  const [t] = useLanguage();
  return (
    <View className="flex-1 justify-center items-center px-8">
      <EmptyScreen
        type="groups"
        description={t("groups.empty.paragraph")}
        btnLabel={t("groups.empty.button")}
      />
    </View>
  );
}
