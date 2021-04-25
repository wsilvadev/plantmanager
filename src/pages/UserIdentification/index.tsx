import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import Button from "../../components/Button";
import colors from "../../styles/colors";

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };
  const handleInputFocus = () => {
    setIsFocused(!isFilled);
  };
  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate("Confirmation");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{!isFocused ? "😏" : "😎"}</Text>
                <Text style={styles.title}>
                  Como podemos {"\n"} chamar você?
                </Text>
              </View>
              <TextInput
                placeholder="Digite um nome"
                style={[
                  styles.input,
                  (isFilled || isFocused) && { borderColor: colors.green },
                ]}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
