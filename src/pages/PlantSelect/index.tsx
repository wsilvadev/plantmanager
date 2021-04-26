import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

import styles from "./style";
import Header from "../../components/Header";
import EnvironmentButton from "../../components/EnvironmentButton";
import PlantCardPrimary from "../../components/PlantCardPrimary";

import api from "../../services/api";
import Loading from "../../components/Loading";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

interface EnvironmentProps {
  key: string;
  title: string;
}
interface PlantProps {
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
}
export default function PlantSelect() {
  const [environments, setEnvironment] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  const fetchEnvironment = async () => {
    const { data } = await api.get("plants_environments?_sort=title");
    setEnvironment([{ key: "all", title: "Todos" }, ...data]);
  };

  const fetchPlants = async () => {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if(!data)
      return setLoading(true);

    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    }else{
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false)
    }
    setLoading(false)
    setLoadingMore(false)
  };

  const handlefetchMore = (distance: number) => {
    if(distance < 1)
    return;
    setLoadingMore(true);
    setPage(oldValue =>  oldValue + 1)
    fetchPlants()
  }

  const handlePlantSelect =(plant: PlantProps) =>{
    navigation.navigate('PlantSave', {plant})
    console.log(plant)
  }
  const handleEnvironmentSelected =(environment: string) =>{
      setEnvironmentSelected(environment);
      if(environment == 'all') return setFilteredPlants(plants);

      const filtered = plants.filter(plant => plant.environments.includes(environment));
      setFilteredPlants(filtered);
  }

  useEffect(() => {
    fetchEnvironment();
    fetchPlants();
  },[]);
if(isLoading)
return <Loading/>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View style={styles.environmentList}>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (<EnvironmentButton title={item.title} active={item.key === environmentSelected} onPress={() => handleEnvironmentSelected(item.key)}/>)}
          horizontal
          initialNumToRender={4}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)}/>}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          initialNumToRender={4}
          onEndReachedThreshold={0.1}
          onEndReached={({distanceFromEnd}) => handlefetchMore(distanceFromEnd) }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green}/>:<></>
          }
        />
      </View>
    </View>
  );
}
