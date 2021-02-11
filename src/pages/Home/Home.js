import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import Card from "./../../components/Card";
import { HomeData } from "./HomeData";
import { Lower } from "./../../components/Lower";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default (props) => {

  const [HomeName, setHomeName] = useState("");

  return (
    <>
      <ScrollView style={styles.containerScroll}>
        <SafeAreaView style={styles.container}>

          <Text style={styles.text}>Casa <Icon name={'home'} size={50} /></Text>
          <TextInput
            placeholder="Pesquise sua atividade aqui..."
            placeholderTextColor="#004a7c"
            onChangeText={text => setHomeName(text)}
            value={HomeName}
            style={styles.Input}
          />

          {HomeData
            .filter((HomeData) => (
              Lower(HomeData.name).includes(Lower(HomeName))
            ))
            .map((HomeData, index) => (
              <>
                <Card
                  key={index}
                  name={HomeData.name}
                  color={HomeData.color}
                  difficulty={HomeData.difficulty}
                  image={HomeData.image}
                  info={HomeData.info}
                  timer={HomeData.timer}
                  power={HomeData.power}
                  timerInfo={HomeData.timerInfo}
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

