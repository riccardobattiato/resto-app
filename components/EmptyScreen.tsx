import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/lib/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import EmptyGroupsImage from "~/assets/vectors/undraw_having_fun.svg";
import EmptyFriendsImage from "~/assets/vectors/undraw_friendship.svg";

export type Props = {
  type: "groups" | "friends";
  description: string;
  btnLabel: string;
};

const getImage = (type: Props["type"]) => {
  switch (type) {
    case "groups":
      return <EmptyGroupsImage width="100%" height="100%" />;
    case "friends":
      return <EmptyFriendsImage width="100%" height="100%" />;
  }
};

const iconsMap: Record<Props["type"], string> = {
  groups: "addusergroup",
  friends: "adduser",
};

const EmptyScreen = ({ type, description, btnLabel }: Props) => {
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full">
      <View className="w-full h-[25vh]">{getImage(type)}</View>
      <View className="mt-8">
        <Text className="text-center">{description}</Text>
      </View>
      <Button
        variant="outline"
        size="lg"
        className="flex-row items-center mt-4"
      >
        <AntDesign
          //@ts-ignore TODO fix types
          name={iconsMap[type]}
          size={18}
          color={Colors[colorScheme ?? "light"].primary}
          className="mr-2"
        />
        <Text>{btnLabel}</Text>
      </Button>
    </View>
  );
};

export default EmptyScreen;
