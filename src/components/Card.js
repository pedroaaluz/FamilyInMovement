import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation} from '@react-navigation/native';

export default (props) => {

  const navigation = useNavigation();
  const handleClick = () =>{
    navigation.navigate("Activity",{
      name:props.name,
      img:props.image,
      power:props.power,
      timer:props.timer,
      info:props.info,
      timerInfo:props.timerInfo

    });
  }

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={handleClick}>
        <Image style={styles.ImgItem} source={props.image} />
        <View style={styles.InfoArea}>
          <Text style={styles.NameActivity}>{props.name}</Text>
          <View style={styles.ActivityDifficulty}>
            <Text style={styles.ActivityDifficultyText}>Dificuldade:</Text>
            <Text style={{ color: props.color,  }}>
              {props.difficulty}
            </Text>
          </View>
          <View  style={styles.SeeActivityBox}>
            <Text style={styles.SeeActivity}>Ver Atividade</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    width: "90%",
  },
  ImgItem: {
    width: 88,
    height: 88,
    borderRadius: 20,
  },
  InfoArea: {
    marginLeft: 20,
    justifyContent: "space-between",
  },
  NameActivity: {
    fontSize: 17,
    fontWeight: "bold",
  },
  SeeActivity: {

    color: "#253b6e",
 
  },
  SeeActivityBox: {
    borderColor: "#FBAC91",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#253b6e",
    color: "#253b6e",
    alignContent: "center",
    borderWidth: 1,
    paddingBottom: 2,
    width: 100
  },
  ActivityDifficulty: {
    flexDirection: "row",
  },
  ActivityDifficultyText: {
    marginRight: 2,
  },
});
