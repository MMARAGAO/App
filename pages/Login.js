import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Icon, Image, Button } from "react-native-elements";

import Header from "../components/Header";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  // mostrar email e senha no console
  const entrar = () => {
    navigation.navigate("Principal");
  };

  const cadastro = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      {/* cor da barra de status */}
      <Header />

      <View style={styles.card}>
        <Text style={styles.h1}>Login</Text>

        {/* caixa de email com icone */}
        <Input
          placeholder="Email"
          name="email"
          onChangeText={(value) => setEmail(value)}
          leftIcon={<Icon name="email" size={24} color="#00bfff" />}
          // kyboard
          keyboardType="email-address"
        />
        {/* caixa de senha com icone */}
        <Input
          placeholder="Senha"
          // ocultar senha
          secureTextEntry={true}
          name="senha"
          // onchange text
          onChangeText={(value) => setSenha(value)}
          // ocutar senha
          leftIcon={<Icon name="lock" size={24} color="#00bfff" />}
          // icone de mostrar senha
          rightIcon={<Icon name="visibility" size={24} color="black" />}
          // tipo de teclado
          keyboardType="default"
        />
        <View style={styles.opçoes}>
          {/* cadastre-se */}
          <Text
            style={styles.cadastro}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastre-se /{" "}
          </Text>
          {/* esqueci minha senha */}
          <Text>Esqueci minha senha</Text>
        </View>

        {/* botao de entrar */}
        <Button
          Icon={<Icon name="arrow-right" size={15} color="white" />}
          button
          onPress={entrar}
          title="Entrar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  h1: {
    fontSize: 30,
    // espaçamento
    padding: 50,
  },
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
  button: {
    // espaçamento
    padding: 100,
  },
  card: {
    // espaçamento entre o card e o header
    marginTop: 20,
    marginBottom: 20,

    // espaçamento
    padding: 50,
    // itens no meio
    alignItems: "center",
    // tamanho
    width: "90%",
    // height sempre ser 90%
    height: "75%",

    // cor de fundo
    backgroundColor: "white",
    // borda
    borderWidth: 1,
    // borda arredondada
    borderRadius: 10,
    // sombra
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // cor da sombra
    // cor da border
    borderColor: "white",
  },
  opçoes: {
    // um do lado do outro
    flexDirection: "row",
    // espaçamento
    padding: 10,
  },
});
