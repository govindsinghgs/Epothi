import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert, BackHandler } from 'react-native'
const HomeScreen = () => {
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
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Hindi',
      image: 'https://img.icons8.com/clouds/100/000000/groups.png',
      count: 124.711,
    },
    {
      id: 2,
      name: 'English',
      image: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-English-Book-education-smashingstocks-flat-smashing-stocks.png",
      count: 234.722,
    },
    {
      id: 3,
      name: 'Urdu',
      image: "https://img.icons8.com/dusk/64/book.png",
      count: 324.723,
    },
    {
      id: 4,
      name: 'Teacher Material',
      image: 'https://img.icons8.com/clouds/100/000000/employee-card.png',
      count: 154.573,
    },
    // {
    //   id: 5,
    //   name: 'For sale',
    //   image: 'https://img.icons8.com/color/100/000000/land-sales.png',
    //   count: 124.678,
    // },
  ]

  const [options, setOptions] = useState(data)

  const handleItemPress = (items) => {
    if (items.name === 'English') {
      navigation.navigate('English')
    }
    else if (items.name === 'Hindi') {
      navigation.navigate('Hindi')
    }
    else if (items.name === 'Urdu') {
      navigation.navigate('Urdu')
    }
    else if (items.name === 'Teacher Material') {
      navigation.navigate('Teacher')
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        //columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() =>  handleItemPress(item)}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Text style={{ marginLeft:28,fontSize: 20,marginBottom:15,color:'black'
          , fontWeight: "800",
          fontFamily: 'bold',
          fontStyle: 'italic',
          color: 'black' }}>Developed @ Macreel Infosoft Pvt. Ltd.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#ff9933',//#ebf0f7
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',//#ebf0f7
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },
  name: {
    marginTop:16,
    fontSize: 26,
    flex: 1,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
    marginLeft:8
  
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 55,
    width: 120,
    padding: 10,
    marginRight:12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'700',
    
  },
})

export default HomeScreen;