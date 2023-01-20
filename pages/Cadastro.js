import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Input, Text, Icon, Image, Button } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import { TextInputMask, Styles } from "react-native-masked-text";

// importar componente header
import Header from "../components/Header";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);
  const [errorTermos, setErrorTermos] = useState(null);
  const [checked, setChecked] = useState(false);

  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorSenha(null);
    setErrorNome(null);
    setErrorCpf(null);

    setErrorTelefone(null);
    setErrorTermos(null);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Digite um email válido");
      error = true;
    }

    if (senha == null) {
      setErrorSenha("Digite a senha");
      error = true;
    }
    if (nome == null) {
      setErrorNome("Digite o nome");
      error = true;
    }
    if (cpf == null) {
      setErrorCpf("Digite o CPF");
      error = true;
    }
    if (telefone == null) {
      setErrorTelefone("Digite o telefone");
      error = true;
    }
    if (checked == false) {
      setErrorTermos("Aceite os termos");
      error = true;
    }
    return !error;
  };

  // mostrar email e senha no console
  const salvar = () => {
    if (validar()) {
      console.log("Login");
    }
  };

  return (
    <View style={styles.container}>
      {/* cor da barra de status */}
      <Header />
      <View style={styles.card}>
        <Text style={styles.h1}>Cadastre-se</Text>

        {/* caixa de email com icone */}
        <Input
          style={styles.input}
          placeholder="Email"
          name="email"
          onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
          }}
          leftIcon={<Icon name="email" size={20} color="#00bfff" />}
          // kyboard
          keyboardType="email-address"
          returnKeyType="next"
          errorMessage={errorEmail}
        />
        <Input
          style={styles.input}
          placeholder="Nome"
          onChangeText={(value) => {
            setNome(value);
            setErrorNome(null);
          }}
          leftIcon={<Icon name="person" size={20} color="#00bfff" />}
          // kyboard
          keyboardType="default"
          returnKeyType="next"
          errorMessage={errorNome}
        />
        {/* imput mask com icone */}

        <View style={styles.Teste}>
          <Icon name="person" paddingTop={5} size={20} color="#00bfff" />
          <TextInputMask
            style={styles.TextInputMask}
            placeholder="CPF"
            name="cpf"
            onChangeText={(value) => {
              setCpf(value);
              setErrorCpf(null);
            }}
            // kyboard
            keyboardType="numeric"
            returnKeyType="next"
            errorMessage={errorCpf}
            type={"cpf"}
          />
        </View>
        <View style={styles.Teste}>
          <Icon name="phone" paddingTop={5} size={20} color="#00bfff" />
          <TextInputMask
            style={styles.TextInputMask}
            placeholder="Telefone"
            name="telefone"
            onChangeText={(value) => {
              setTelefone(value);
              setErrorTelefone(null);
            }}
            // kyboard
            keyboardType="numeric"
            returnKeyType="next"
            errorMessage={errorTelefone}
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
          />
        </View>
        {/* caixa de senha com icone */}
        <Input
          style={styles.input}
          placeholder="Senha"
          name="senha"
          onChangeText={(value) => {
            setSenha(value);
            setErrorSenha(null);
          }}
          leftIcon={<Icon name="lock" size={20} color="#00bfff" />}
          // kyboard
          keyboardType="default"
          secureTextEntry={true}
          returnKeyType="done"
          errorMessage={errorSenha}
        />
        <CheckBox
          checkedColor="#00bfff"
          uncheckedIcon="square-o"
          uncheckedColor="red"
          title="Concordar com os termos de uso"
          checked={checked}
          onPress={() => setChecked(!checked)}
          errorMessage={errorTermos}
        />
        {/* botão de salvar */}
        <Button
          title="Salvar"
          onPress={salvar}
          buttonStyle={{
            backgroundColor: "#00bfff",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={{ marginTop: 20 }}
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
  Teste: {
    flexDirection: "row",
    // posicionar no inicio
    alignItems: "flex-start",
    // margin
    marginBottom: 20,

    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // tamanho
    width: 250,
    paddingBottom: 10,
    paddingTop: 10,
    // cor de fundo
  },
  TextInputMask: {
    paddingLeft: 5,
    width: "100%",
  },
  Icon: {
    // tamanho
    width: 50,
    height: 45,
    // fonte
    fontSize: 12,
    // cor de fundo
    backgroundColor: "red",
  },
  ImputMask: {
    // tamanho
    width: 500,
    height: 45,
    // fonte
    fontSize: 12,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start",
  },

  input: {
    width: 300,
    height: 45,
    // fonte
    fontSize: 14,
  },
  h1: {
    fontSize: 30,
    color: "black",
    marginBottom: 20,
  },
  Cabeçalho: {
    // tamanho
    width: "100%",
    height: 80,
    backgroundColor: "black",
    // do lado do outro
    flexDirection: "row",
    // diminuir font
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
    // fonte
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
    height: "80%",

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
