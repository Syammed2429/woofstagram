import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { NAV_THEME } from "~/lib/constants";

export async function setAndroidNavigationBar(theme: "light" | "dark") {
  if (Platform.OS !== "android") return;
  // Always use light theme since dark mode is disabled
  await NavigationBar.setButtonStyleAsync("dark");
  await NavigationBar.setBackgroundColorAsync(NAV_THEME.light.background);
}
