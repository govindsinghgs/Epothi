import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./SplashScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from "./OnboardingScreen";
import HomeScreen from "./HomeScreen";
import Hindi from "./Hindi";
import English from "./English";
import Urdu from "./Urdu";
import Teacher from "./Teacher";
import EnglishClass1 from "./EnglishScreens/EnglishClass1";
import EnglishClass2 from "./EnglishScreens/EnglishClass2";
import EnglishClass3 from "./EnglishScreens/EnglishClass3";
import EnglishClass4 from "./EnglishScreens/EnglishClass4";
import EnglishClass5 from "./EnglishScreens/EnglishClass5";
import EnglishClass6 from "./EnglishScreens/EnglishClass6";
import EnglishClass7 from "./EnglishScreens/EnglishClass7";
import EnglishClass8 from "./EnglishScreens/EnglishClass8";
import HindiClass1 from "./HindiScreens/HindiClass1";
import HindiClass2 from "./HindiScreens/HindiClass2";
import HindiClass3 from "./HindiScreens/HindiClass3";
import HindiClass4 from "./HindiScreens/HindiClass4";
import HindiClass5 from "./HindiScreens/HindiClass5";
import HindiClass6 from "./HindiScreens/HindiClass6";
import HindiClass7 from "./HindiScreens/HindiClass7";
import HindiClass8 from "./HindiScreens/HindiClass8";
import UrduClass1 from "./UrduScreens/UrduClass1";
import UrduClass2 from "./UrduScreens/UrduClass2";
import UrduClass3 from "./UrduScreens/UrduClass3";
import UrduClass4 from "./UrduScreens/UrduClass4";
import UrduClass5 from "./UrduScreens/UrduClass5";
import UrduClass6 from "./UrduScreens/UrduClass6";
import UrduClass7 from "./UrduScreens/UrduClass7";
import UrduClass8 from "./UrduScreens/UrduClass8";
import PdfOpener from "./HindiScreens/PdfOpener";
const Navigation = () => {
    const Stack = createStackNavigator();
    const [firstLaunch, setFirstLaunch] = React.useState(null);

    React.useEffect(() => {
        async function setData() {
            const appData = await AsyncStorage.getItem("appLaunched");
            if (appData === null) {
                setFirstLaunch(true);
                AsyncStorage.setItem("appLaunched", "true"); // Set it to "true" on the first launch
            } else {
                setFirstLaunch(false);
            }
            
        }
        setData();
    }, []);
     return (
        firstLaunch != null && (
            <NavigationContainer>
                 <Stack.Navigator initialRouteName={firstLaunch ? "OnboardingScreen" : "SplashScreen"}>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="OnboardingScreen"
                        component={OnboardingScreen}
                    />
                    <Stack.Screen options={{ headerShown: false, headerLeft: null, gestureEnabled: false }}
                        name="SplashScreen" component={SplashScreen} /> 
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        },
                        headerLeft: null,
                        gestureEnabled: false,
                        title: 'Epothi'
                    }} name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi'
                    }} name="Hindi" component={Hindi} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English'
                    }} name="English" component={English} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu'
                    }} name="Urdu" component={Urdu} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Teacher'
                    }} name="Teacher" component={Teacher} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 1'
                    }} name="EnglishClass1" component={EnglishClass1} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 2'
                    }} name="EnglishClass2" component={EnglishClass2} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 3'
                    }} name="EnglishClass3" component={EnglishClass3} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 4'
                    }} name="EnglishClass4" component={EnglishClass4} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 5'
                    }} name="EnglishClass5" component={EnglishClass5} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 6'
                    }} name="EnglishClass6" component={EnglishClass6} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 7'
                    }} name="EnglishClass7" component={EnglishClass7} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'English Class 8'
                    }} name="EnglishClass8" component={EnglishClass8} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 1'
                    }} name="HindiClass1" component={HindiClass1} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 2'
                    }} name="HindiClass2" component={HindiClass2} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 3'
                    }} name="HindiClass3" component={HindiClass3} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 4'
                    }} name="HindiClass4" component={HindiClass4} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 5'
                    }} name="HindiClass5" component={HindiClass5} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 6'
                    }} name="HindiClass6" component={HindiClass6} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 7'
                    }} name="HindiClass7" component={HindiClass7} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Hindi Class 8'
                    }} name="HindiClass8" component={HindiClass8} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 1'
                    }} name="UrduClass1" component={UrduClass1} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 2'
                    }} name="UrduClass2" component={UrduClass2} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 3'
                    }} name="UrduClass3" component={UrduClass3} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 4'
                    }} name="UrduClass4" component={UrduClass4} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 5'
                    }} name="UrduClass5" component={UrduClass5} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 6'
                    }} name="UrduClass6" component={UrduClass6} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 7'
                    }} name="UrduClass7" component={UrduClass7} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'Urdu Class 8'
                    }} name="UrduClass8" component={UrduClass8} />
                    <Stack.Screen options={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'lightyellow'
                        }, title: 'BOOK'
                    }} name="PdfOpener" component={PdfOpener}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
              )  }
export default Navigation;