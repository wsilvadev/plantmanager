import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";

import styles from "./style";

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}
export default function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado
        </Text>
        <Button title="Cadastrar planta" onPress={() => {}} />
      </View>
    </View>
  );
}
