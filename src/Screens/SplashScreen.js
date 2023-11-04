import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, BackHandler, Alert } from "react-native";
import { FontFamily, Color } from "./src/assets/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])

  setTimeout(() => {
    navigation.navigate('OnboardingScreen')
  }, 3000);

  return (
    <View style={[styles.launching, styles.mainLayout]}>
      <View>
        <View style={styles.mainBackground1} />
        <Text style={styles.heading}>
          Welcome To Epoti
        </Text>
      </View>
      <Image
        style={styles.ovalIcon}
        resizeMode="cover"
        source={require("../Images/logo2.png")}
      />
      <Image
        style={styles.splashlogo}
        source={require('../Images/splash.png')}

      />
      <Text style={styles.bottom}>
        {"\t"} {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"} <Text style={{ color: 'red', textAlign: 'center' }}>SCERT</Text> {"\n"} UTTAR PRADESH
      </Text>
      <Text style={{ marginLeft:28,fontSize: 20,marginBottom:15,color:'black'
          , fontWeight: "800",
          fontFamily: 'bold',
          fontStyle: 'italic',
          color: 'black' }}>Developed @ Macreel Infosoft Pvt. Ltd.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    height: 926,
    width: 428,
  },
  mainBackground1: {
    backgroundColor: 'lightyellow', //"#F0F3F8",//#F0F3F8
    position: "absolute",
    height: 926,
    width: 428,
  },
  splashlogo: {
    top: 90,
    left: 72,
    right: 38,
    width: 260,
    height: 260,
    position: "absolute"
  },
  ovalIcon: {
    top: 70,
    left: 88,
    right: 38,
    width: 230,
    height: 230,
    position: "absolute",
    marginBottom: 0,
    marginTop: 300
  },
  heading: {
    marginTop: 4,
    marginLeft: 42,
    fontSize: 40,
    // textTransform: "uppercase",
    fontWeight: "600",
    //fontFamily: FontFamily.poppinsSemiBold,
    //color: Color.colorWhite,
    fontFamily: 'bold',
    fontStyle: 'italic',
    color: 'black'
  },
  bottom: {
    marginBottom: 10,
    marginLeft: 42,
    marginTop: 550,
    fontSize: 40,
    fontWeight: "600",
    color: 'black',
    fontFamily: 'bold',
    fontStyle: 'italic',

  }
});

export default SplashScreen;
