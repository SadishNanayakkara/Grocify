import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { HeaderShownContext } from "expo-router/build/react-navigation";

const _layout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
