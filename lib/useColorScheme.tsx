import { useColorScheme as useNativewindColorScheme } from "nativewind";

export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();
  return {
    colorScheme: "light", // Always return light mode
    isDarkColorScheme: false, // Never dark mode
    setColorScheme,
    toggleColorScheme,
  };
}
