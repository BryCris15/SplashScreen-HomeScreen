import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-ecuador.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>ECUADOR</Text>
      <Text style={styles.subtitle}>Selección Ecuatoriana de Fútbol</Text>
      <Text style={styles.info}>Capitán: Enner Valencia</Text>
      <Text style={styles.info}>Entrenador: Sebastián Beccacece</Text>
      <Text style={styles.info}>Mundiales: 2002, 2006, 2014, 2022, 2026</Text>
      <Text style={styles.footer}>¡VAMOS LA TRI!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD400",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  logo: { width: 180, height: 180, marginBottom: 25, resizeMode: "contain" },
  title: { fontSize: 42, fontWeight: "900", color: "#061A40" },
  subtitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#061A40",
    textAlign: "center",
    marginBottom: 30,
  },
  info: {
    fontSize: 18,
    color: "#061A40",
    marginBottom: 10,
    textAlign: "center",
  },
  footer: { fontSize: 24, fontWeight: "900", color: "#D71920", marginTop: 30 },
});
