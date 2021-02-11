import React from 'react';
import {  StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default ({state, navigation}) =>{

    const goTo = (screenName) =>{
        navigation.navigate(screenName)
    }

    return(
        <>
            <View style={styles.Tab}>
                <TouchableOpacity  onPress={()=>goTo('Pet')}>
                    <Icon style={{opacity:state.index===2 ? 1:0.5}} name={'paw'} size={26} color={"#fff"}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>goTo('Home')}>
                    <Icon style={{opacity:state.index===1 ? 1:0.5}} name={'home'} size={26} color={"#fff"}/>
                </TouchableOpacity >
                <TouchableOpacity  onPress={()=>goTo('Park')}>
                    <Icon style={{opacity:state.index===3 ?1:0.5}} name={'cloud-sun'} size={26} color={"#fff"}/>
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    Tab: {
   
        backgroundColor: "#004a7c",
        height: 50,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 40

    },

  
  
  });
  