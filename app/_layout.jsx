import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { AppState } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import "../global.css";

export default function RootLayout()
{
  useEffect(() =>
  {
    const ImerssiveMode = async () => 
    {
      await NavigationBar.setVisibilityAsync("hidden");
      StatusBar.setHidden(true);
    };
    ImerssiveMode();

    const subsription = AppState.addEventListener("change", (state) =>
    {
      if (state == "active") ImerssiveMode();
    });

    return () => subsription.remove();
  }, []);

  return <Stack screenOptions={{ headerShown: false }}/>;
}
