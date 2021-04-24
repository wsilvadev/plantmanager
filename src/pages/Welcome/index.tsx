import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, View } from "react-native";

import wateringImg from "../../assets/watering.png";
import { Entypo } from "@expo/vector-icons";

import styles from "./style";

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>

      <Text style={styles.title}>
        Gerencie{"\n"} suas plantas de{"\n"}  forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar vocé
        sempre que precisar
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Entypo style={styles.buttonIcon} name="chevron-thin-right" />
      </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
