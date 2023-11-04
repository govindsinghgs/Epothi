import React from "react";
import {
    View,
    Text, Image,
    TouchableOpacity,
    BackHandler,
    Alert
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Onboarding from "react-native-onboarding-swiper";
const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
};
const Done = ({ ...props }, navigation) => (

    <TouchableOpacity onPress style={{ marginHorizontal: 8 }} {...props}>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '800' }}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                Alert.alert("Hold on!", "Are you sure you want to exit?", [
                    { text: "Cancel" },
                    { text: "Yes", onPress: () => BackHandler.exitApp() }
                ]);
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );
            return () => backHandler.remove();
        }, [])
    );
    return (
        <Onboarding
            onSkip={() => navigation.navigate("HomeScreen")}
            onDone={() => navigation.navigate("HomeScreen")}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            pages={[
                {
                    backgroundColor: "white",
                    image: <Image source={require("../Images/logo2.png")} />,
                    title: "Welcome To Epothi",
                    subtitle: "Welcome To Epothi",
                },
                {
                    backgroundColor: "#fdeb93",
                    image: <Image source={require("../Images/kids.png")} />,
                    title: "Learn With US !!",
                    subtitle: "Let's Go ",
                },
                {
                    backgroundColor: "white",
                    image: <Image style={{
                        width: 370,
                        height: 690,
                        marginTop: 18
                    }} source={require("../Images/check.png")} />,
                },
            ]}
        />
    );
};

export default OnboardingScreen;