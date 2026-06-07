import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/fodo.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Image
        source={require("@/assets/images/logo-ecuador.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>ECUADOR</Text>

      <Text style={styles.subtitle}>Selección Ecuatoriana de Fútbol</Text>

      <Text style={styles.info}>Capitán: Enner Valencia</Text>
      <Text style={styles.info}>Entrenador: Sebastián Beccacece</Text>
      <Text style={styles.info}>Mundiales: 2002, 2006, 2014, 2022</Text>

      <Text style={styles.footer}>¡VAMOS LA TRI!</Text>

      <Button
        title="Ver Información"
        onPress={() =>
          Alert.alert(
            "La Tri",
            "Selección Ecuatoriana clasificada al Mundial 2026",
          )
        }
      />
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
  logo: { width: 180, height: 180, marginBottom: 25, resizeMode: "contain" },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#061A40",
    textShadowColor: "#FFFFFF",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
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
