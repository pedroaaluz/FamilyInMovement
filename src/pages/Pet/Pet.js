import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView
} from "react-native";
import Card from "./../../components/Card";
import {PetData} from "./PetData";
import {Lower} from "./../../components/Lower";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default (pŕops) => {


  const [PetName, setPetName] = useState("");


  return (
    <>
      <ScrollView style={styles.containerScroll}>
        <SafeAreaView style={styles.container}>

          <Text style={styles.text}>Pet <Icon name={'paw'} size={50}/></Text>
          <TextInput
            placeholder="Pesquise sua atividade aqui..."
            placeholderTextColor="#004a7c"
            onChangeText={text => setPetName(text)}
            value={PetName}
            style={styles.Input}
          />

          {PetData
            .filter((PetData) => (
              Lower(PetData.name).includes(Lower(PetName))
            ))
            .map((PetData, index) => (
              <>
                <Card
                  key={index}
                  name={PetData.name}
                  color={PetData.color}
                  difficulty={PetData.difficulty}
                  image={PetData.image}
                  onPress={() => props.navigation.navigate('Activity')}
                  timer={PetData.timer}
                  power={PetData.power}
                  info={PetData.info}
                  timerInfo={PetData.timerInfo}
                />

              </>
            ))}

        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005691",
    alignItems: "center",
    paddingTop: 35,
    flexDirection: "column",
   
  },  
  containerScroll: {
    flex: 1,
    backgroundColor: "#005691",
    flexDirection: "column",
   
  },
  text: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",

    marginBottom: 20,
  },

  img: {
    width: 292,
    height: 186,
    resizeMode: "cover",
  },
  Input: {
    marginBottom: 40,
    backgroundColor: "#1f5f8b",
    color: "#fff",
    padding: 10,
    borderRadius: 20,
    width: "90%",
    alignItems: 'center',
    textAlign: 'center'
  },

});
