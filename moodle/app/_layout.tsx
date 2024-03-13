import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import App from "./app";
import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  return <App />;
}
