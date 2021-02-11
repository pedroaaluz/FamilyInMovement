import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  Share,
  Modal,

} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation, useRoute } from '@react-navigation/native';

export default (props) => {

  const [Play, setPlay] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    image: route.params.img,
    name: route.params.name,
    power: route.params.power,
    info: route.params.info,
    timer: route.params.timer,
    timerInfo: route.params.timerInfo
  })

  const [text, setText] = useState("Começar");
  const [modalOpen, setModalOpen] = useState(false)
  const Playing = () => {
    setPlay(!Play)

    if (text == "Começar" || text == "Continuar") {
      setText("Pausar")
    } else {
      setText("Continuar")
    }

  }


  const onShare = async () => {
    try {

      const result = await Share.share({
       
        message: "Acabei de fazer " + userInfo.name + " no FamilyInMovement e perdir " + userInfo.power + " calorias de maneira saudável e divertida. Venha se exercitar comigo também!",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={require("./../../Assets/back.png")} style={styles.header}>
            <Text style={styles.text}>{userInfo.name}</Text>
            <Image style={styles.img} source={userInfo.image} />
          </ImageBackground>

          <View style={styles.TimeAndPower}>
            <View>
              <Text style={styles.PowerText}>Calorias:</Text>
              <Text style={styles.PowerNumber}>{userInfo.power}</Text>
            </View>
            <View>
              <Text style={styles.TimeText}>Duração:</Text>
              <Text style={styles.TimeNumber}>{userInfo.timerInfo}</Text>
            </View>
          </View>

          <View style={styles.BoxText}>
            <Text style={styles.Text1}>
              {userInfo.info}
            </Text>
          </View>

          <View style={styles.Timer}>

            <CountdownCircleTimer

              isPlaying={Play}
              duration={userInfo.timer}
              colors={[
                ['#005691', 0.4],
                ['#1f4f6f', 0.3],
                ['#578bae', 0.3],
              ]}
              onComplete={() => setModalOpen(true)}
            >
              {({ remainingTime, animatedColor }) => (
                <Animated.Text style={{ color: animatedColor }}>
                  {Math.floor(remainingTime / 60)}:{remainingTime % 60}
                </Animated.Text>
              )}
            </CountdownCircleTimer>

          </View>

          <TouchableOpacity style={styles.Button} onPress={() => Playing()}>
            <Text style={styles.textButtom}>{text}</Text>
          </TouchableOpacity >
 
        </SafeAreaView>

      </ScrollView>


      <Modal visible={modalOpen} animationType='slide'>
        <SafeAreaView style={styles.containerModal}>

          <Text style={styles.textModal}>Parabéns você concluiu {userInfo.name}</Text>
          <View style={styles.BoxImg}>
            <Image style={styles.ModalImg} source={require("./../../Assets/pet3.gif")} />
          </View>
          <Text style={styles.textModal}>Deseja compartilhar com seus amigos?</Text>
          <View style={styles.BoxButton}>
            <TouchableOpacity onPress={() => onShare()} style={styles.ButtonYes}>
              <Text style={styles.fontButton}>Sim</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.ButtonNo}>
              <Text style={styles.fontButton}>Não</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 26,
    flexDirection: "column",
  },
  text: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 140,
    resizeMode: "cover",
    borderRadius: 80,
    marginBottom: -70
  },
  header: {
    backgroundColor: "#005691",
    width: '100%',
    alignItems: 'center',
    height: '20%'
  },
  Timer: {
    marginTop: 50
  },
  TimeAndPower: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  TimeNumber: {
    color: '#1f4f6f',
    fontSize: 30
  },
  TimeText: {
    color: '#928a97',
    fontSize: 20
  },
  PowerNumber: {
    color: '#fecea8',
    fontSize: 30
  },
  PowerText: {
    color: '#928a97',
    fontSize: 20
  },
  BoxText: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 30
  },
  Text1: {
    fontSize: 18,
    color: '#928a97',
    textAlign: 'justify'
  },
  Button: {
    height: 50,
    width: '50%',
    backgroundColor: '#005691',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 100
  },
  textButtom: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  textModal: {
    color: "#FFFFFF",
    fontSize: 25,
    textAlign: 'center',
    padding: 20
  },
  containerModal: {
    flex: 1,
    backgroundColor: "#005691",
    alignItems: "center",
    paddingTop: 26,
    flexDirection: "column",
  },
  ModalImg: {
    width: 200,
    height: 300
  },
  BoxImg: {
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    alignItems: "center",
    width: 300,
    justifyContent: 'center',
    marginTop: 20
  },
  BoxButton:{
    justifyContent:'space-around',
    flexDirection:'row-reverse',
    width:'100%',
    marginTop:30
  },
  ButtonNo:{
    backgroundColor:'#e84545',
    borderRadius:50,
    width:"40%",

  },ButtonYes:{
    backgroundColor:'#1fab89',
    borderRadius:50,
    width:"40%",
    

  },
  fontButton:{
    color: "#FFFFFF",
    fontSize: 25,
    textAlign: 'center',
    padding:10
 
  }

});
