import "~/global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { AnimatedDogSplash } from "~/components/AnimatedDogSplash";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = React.useState(true);

  const handleSplashComplete = React.useCallback(async () => {
    setShowSplash(false);
    await SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: "Woofstagram",
            headerShown: false,
          }}
        />
      </Stack>

      {/* Custom animated splash screen */}
      {showSplash && (
        <AnimatedDogSplash onAnimationComplete={handleSplashComplete} />
      )}
    </>
  );
}

function noop() {}
