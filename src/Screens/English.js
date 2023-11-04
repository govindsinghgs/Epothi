import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const English = () => {
  const navigation =useNavigation();
  const classes = [
    {
      title: 'Class I',
      bgColor:'#E0FFFF',
    },
    {
      title: 'Class II',
      bgColor:'#E6E6FA',
    },
    {
      title: 'Class III',
      bgColor:'#FAF0E6',
    },
    {
      title: 'Class IV',
      bgColor:'#FAFAD2',
    },
    {
      title: 'Class V',
      bgColor:'lightpink',
    },
    {
      title: 'Class VI',
      bgColor:'#16a085',
    },
    {
      title: 'Class VII',
      bgColor:'#27ae60',
    },
    {
      title: 'Class VIII',
      bgColor:'#7f8c8d',
    }
  ];
   
  const handleItemPress=(items)=>{
    if(items.title==='Class I'){
     navigation.navigate('EnglishClass1')
    }
    else if(items.title==='Class II'){
      navigation.navigate('EnglishClass2')
    }
    else if(items.title==='Class III'){
      navigation.navigate('EnglishClass3')
    }
    else if (items.title==='Class IV'){
      navigation.navigate('EnglishClass4')
    }
    else if(items.title=='Class V'){
        navigation.navigate('EnglishClass5')
    }
    else if(items.title=='Class VI'){
        navigation.navigate('EnglishClass6')
    }
    else if(items.title=='Class VII'){
        navigation.navigate('EnglishClass7')
    }
    else if(items.title=='Class VIII'){
        navigation.navigate('EnglishClass8')
    }

} 
  const renderClassItem = ({ item }) => (
    <View style={styles.classItem}>
      <View style={styles.timelineContainer}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>

      <View style={styles.classContent}>
        </View>

        <View style={[styles.card,{backgroundColor:item.bgColor}]}>
        <TouchableOpacity
          onPress={() => {
            handleItemPress(item)
          }}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
        </View>
      </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classes</Text>

      <FlatList
      contentContainerStyle={{paddingHorizontal:16}}
        data={classes}
        renderItem={renderClassItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 0,
    backgroundColor:'#1f1f39'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 160,
    color:'white'
  },
  card: {
    flex:1,
    backgroundColor: '#ff7f50',//#ff7f50
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 10,
    padding: 16,
    marginLeft:-250,
    alignItems:'center'
  },
  classItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timelineContainer: {
    width: 30,
    alignItems: 'center',
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 6,
    backgroundColor: '#ff7f50',
    marginBottom: 8,
  },
  timelineLine: {
    flex: 1,
    width: 8,
    backgroundColor: '#ff7f50',
  },
  classContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 28,
    color: '#00008B',
    marginBottom: 2

  },
});

export default English