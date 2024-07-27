import { useColorScheme as useNativewindColorScheme } from "nativewind";
import { useColorScheme as nativeColorScheme } from "~/hooks/useColorScheme";

export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();
  const native = nativeColorScheme();
  console.log("LALA", colorScheme, native);
  return {
    colorScheme: colorScheme ?? "dark",
    isDarkColorScheme: colorScheme === "dark",
    setColorScheme,
    toggleColorScheme,
  };
}
