import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import Card from "./../../components/Card";
import {ParkData} from "./ParkData";
import {Lower} from "./../../components/Lower";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default (props) => {


  const [HomeName, setHomeName] = useState("");


  return (
    <>
      <ScrollView style={styles.containerScroll}> 
        <SafeAreaView style={styles.container}>

          <Text style={styles.text}>Praça <Icon name={'cloud-sun'} size={50}/></Text>
          <TextInput
            placeholder="Pesquise sua atividade aqui..."
            placeholderTextColor="#004a7c"
            onChangeText={text => setHomeName(text)}
            value={HomeName}
            style={styles.Input}
          />

          {ParkData
            .filter((ParkData) => (
              Lower(ParkData.name).includes(Lower(HomeName))
            ))
            .map((ParkData, index) => (
              <>
                <Card
                  key={index}
                  name={ParkData.name}
                  color={ParkData.color}
                  difficulty={ParkData.difficulty}
                  image={ParkData.image}
                  timer={ParkData.timer}
                  power={ParkData.power}
                  info={ParkData.info}
                  timerInfo={ParkData.timerInfo}
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
