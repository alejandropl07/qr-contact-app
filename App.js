import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReactQRCode from "react-qr-code";

export default function App() {
  let card = "BEGIN:VCARD\r\n";
  card += "VERSION:3.0\r\n";
  card += "FN:Gerardo Vargas\r\n";
  card += "TEL;TYPE=WORK,VOICE:+52 55 5255 1902\r\n";
  //   card += "TEL;TYPE=HOME,VOICE:+52 55 5414 0055\r\n";
  card += "EMAIL:gvargas@vargasruiz.com\r\n";
  card += "URL:www.vargasruiz.com\r\n";
  card +=
    "ADR;TYPE=WORK,PREF:;;Av. Ejercito Nacional 373 Piso 3-303;Col. Granada;CDMX;11520;Mexico\r\n";
  card +=
    "LABEL;TYPE=WORK,PREF:Av. Ejercito Nacional 373 Piso 3-303\nCol. Granada, CDMX 11520\nMexico\r\n";
  card += "ORG:KRESTON VARGAS RUIZ Y ASOC\r\n";
  card += "END:VCARD";

  return (
    <View style={styles.container}>
      <ReactQRCode value={card} size={150} style={{ paddingBottom: "0.7em" }} />
      <Text style={styles.text}>Gerardo Vargas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
});
