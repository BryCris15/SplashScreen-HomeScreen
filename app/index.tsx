import { router } from "expo-router";
import { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("@/assets/images/fodos.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.topText}>SELECCIÓN ECUATORIANA</Text>

      <Image
        source={require("@/assets/images/logo-ecuador.png")}
        style={styles.logo}
      />

      <Text style={styles.bottomText}>LA COPA MUNDIAL</Text>
      <Text style={styles.bottomText}>DE LA FIFA 2026</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  topText: {
    fontSize: 26,
    fontWeight: "900",
    color: "#061A40",
    textAlign: "center",
    marginBottom: 45,
  },
  logo: {
    width: 240,
    height: 240,
    resizeMode: "contain",
    marginBottom: 55,
  },
  bottomText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#061A40",
    textAlign: "center",
  },
});
