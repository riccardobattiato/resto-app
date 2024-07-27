import { Slot } from "expo-router";
import { SessionProvider } from "@/context/index";
import { LocalizationProvider } from "@/context/localization";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <LocalizationProvider>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </LocalizationProvider>
  );
}
