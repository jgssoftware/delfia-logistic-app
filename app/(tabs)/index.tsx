import { Image, StyleSheet, Pressable } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";
import tailwind from "twrnc";

export default function HomeScreen() {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleResult = (data: string) => {
    if (data.length > 0) {
      setIsloading(true);

      setTimeout(() => {
        setIsloading(false);
        router.push({ pathname: "/information", params: { id: data } });
      }, 3000);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#B3FB4F", dark: "#B3FB4F" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView
        lightColor="#fff"
        darkColor="#fff"
        style={styles.titleContainer}
      >
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={[styles.stepContainer, { backgroundColor: "#FFF" }]}>
        <ThemedText type="subtitle">Digite o ID</ThemedText>
        <TextInput
          label="ID"
          value={text}
          onChangeText={(text) => setText(text)}
          activeOutlineColor="#B3FB4F"
          mode="outlined"
          textColor="#000000"
          style={tailwind`bg-white`}
        />

        <Button
          mode="contained"
          onPress={() => handleResult(text)}
          buttonColor="#B3FB4F"
          textColor="#000000"
          loading={isLoading}
          style={isLoading || text.length < 1 ? tailwind`opacity-50` : ""}
        >
          {isLoading ? "Aguarde" : "Continuar"}
        </Button>

        <Button
          mode="contained"
          icon="qrcode"
          onPress={() => handleResult(text)}
          buttonColor="#000"
          textColor="#FFF"
          loading={isLoading}
          style={tailwind`p-5`}
        >
          {""}
        </Button>
        {/* <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText> */}
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    fontFamily: "SpaceMono_400Regular",
  },
  stepContainer: {
    gap: 20,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    top: 50,
    position: "absolute",
    marginLeft: "auto",
    alignSelf: "center",
  },
});
