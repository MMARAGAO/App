import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Icon, Image, Button } from "react-native-elements";

export default function Header() {
  return (
    <>
      <StatusBar hidden />
      {/* fazer cabeçalho com a logo */}
      <View style={styles.Cabeçalho}>
        <Image
          style={styles.Image}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.TextCabeçalho}>Global Access</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Cabeçalho: {
    // tamanho
    width: "100%",
    height: 80,
    backgroundColor: "black",
    // do lado do outro
    flexDirection: "row",
    // espaçamento
  },
  TextCabeçalho: {
    // cor da fonte
    color: "white",
    // tamanho da fonte
    fontSize: 30,
    // espaçamento esquerda
    marginLeft: 10,
    // espaçamento em cima
    marginTop: 20,
  },
  Image: {
    // tamanho
    width: 30,
    height: 30,
    // espaçamento na esquerda
    marginLeft: 10,
    // espaço em cima
    marginTop: 20,
  },
});
