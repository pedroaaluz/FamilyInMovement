import React, { useState, Component, onChange } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import Input from "./../../components/OptionButton";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "./../../components/Card";
import { PetData } from "./PetData";
import {Lower} from "./../../components/Lower";


export default (props) => {
  const [ActivityName, SetActivityName] = useState("");
  const [value, onChangeText] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Pet <Icon size={40} name="paw"/></Text>
        

        <TextInput
          placeholder="Pesquise sua atividade aqui..."
          placeholderTextColor="#37ABFC"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.Input}
        />

        
        {PetData.filter((PetData) => (Lower(PetData.name).includes(value))).map((item, index) =>{
          return (
            <Card
              name={item.name}
              difficulty={item.difficulty}
              color={item.color}
              image={item.image}
            />
          );
        })}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1891ac",
    alignItems: "center",
    padding: 25,
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
    marginBottom: 20,
    backgroundColor: "#1f5f8b",
    color: "#fff",
    padding: 10,
    borderRadius: 20,
    width: "90%",
    alignItems: 'center',
    textAlign:'center'
  },

});
