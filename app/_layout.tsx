import { Stack } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { ThemeProvider, useTheme } from "@/components/ui/theme/theme-provider";
import "@/global.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <>
        <InnerRoot />
      </>
    </ThemeProvider>
  );
}

function InnerRoot() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <GluestackUIProvider mode={theme || "light"}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
}
