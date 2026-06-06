import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    console.log("Splash iniciado, navegando en 3 segundos...");
    const timer = setTimeout(() => {
      console.log("Intentando navegar a /(tabs)");
      router.replace("/(tabs)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-ecuador.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>ECUADOR</Text>

      <Text style={styles.subtitle}>Selección Ecuatoriana de Fútbol</Text>

      <Text style={styles.worldcup}>Clasificados al Mundial 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD400",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#001F5B",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#001F5B",
    marginTop: 10,
  },
  worldcup: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D62828",
    marginTop: 30,
  },
});
