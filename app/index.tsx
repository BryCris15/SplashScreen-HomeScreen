import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
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
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 250, height: 250, resizeMode: "contain", marginBottom: 20 },
  title: { fontSize: 48, fontWeight: "bold", color: "#001F5B" },
  subtitle: {
    fontSize: 22,
    color: "#001F5B",
    textAlign: "center",
    marginTop: 15,
  },
  worldcup: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D62828",
    marginTop: 30,
  },
});
