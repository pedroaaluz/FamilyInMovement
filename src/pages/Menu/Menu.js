import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    TextInput,
    Text,
    ScrollView,
    View,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';



export default ({state, navigation}) => {


    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Family in </Text>
                    <Text style={styles.text}>Movement</Text>
                </View>

                <Image style={styles.img} source={require("./../../Assets/menu.jpeg")} />

                <View style={styles.chooseBox}>
                    <Icon style={styles.choose} name={'paw'} size={40} onPress={() => goTo('Pet')} />
                    <Icon style={styles.choose} name={'home'} size={40} onPress={() => goTo('Home')} />
                    <Icon style={styles.choose} name={'cloud-sun'} size={40} onPress={() => goTo('Park')} />
                </View>

            </SafeAreaView>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'center'

    },
    text: {
        fontSize: 40,
        color: "#005691",
        fontWeight: "bold",
        textAlign:'left',
        marginLeft:40

    },
    img: {
        width: 330,
        height: 160,
        margin: 50
    },
    chooseBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 40

    },
    choose: {
        color: '#fff',
        backgroundColor: "#005691",
        borderRadius: 40,
        padding: 10
    },
    textBox: {

        marginBottom: 40,
        justifyContent:'center',
        width:'100%',
        
     
    }


});
