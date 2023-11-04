import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Hindi = () => {
  const navigation = useNavigation();
  const classes = [
    {
      title: 'कक्षा १',
      bgColor: '#E0FFFF',
    },
    {
      title: 'कक्षा २',
      bgColor: '#E6E6FA',
    },
    {
      title: 'कक्षा ३',
      bgColor: '#FAF0E6',
    },
    {
      title: 'कक्षा ४',
      bgColor: '#FAFAD2',
    },
    {
      title: 'कक्षा ५',
      bgColor: '#E0FFFF',
    },
    {
      title: 'कक्षा ६',
      bgColor: 'lightpink',
    },
    {
      title: 'कक्षा ७',
      bgColor: '#27ae60',
    },
    {
      title: 'कक्षा ८',
      bgColor: '#7f8c8d',
    }

  ];

  const handleItemPress = (item) => {
    if (item.title === 'कक्षा १') {
      navigation.navigate('HindiClass1')
    }
    else if (item.title === 'कक्षा २') {
      navigation.navigate('HindiClass2')
    }
    else if (item.title === 'कक्षा ३') {
      navigation.navigate('HindiClass3')
    }
    else if (item.title === 'कक्षा ४') {
      navigation.navigate('HindiClass4')
    }
    else if (item.title == 'कक्षा ५') {
      navigation.navigate('HindiClass5')
    }
    else if (item.title == 'कक्षा ६') {
      navigation.navigate('HindiClass6')
    }
    else if(item.title=='कक्षा ७'){
      navigation.navigate('HindiClass7')
    }
    else if (item.title == 'कक्षा ८') {
      navigation.navigate('HindiClass8')
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

      <View style={[styles.card, { backgroundColor: item.bgColor }]}>
        <TouchableOpacity
          onPress={() => {
            handleItemPress(item)
          }}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classes</Text>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={classes}
        //ListHeaderComponent={renderHeader}
        renderItem={renderClassItem}
      //keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#1f1f39'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 160,
    color: 'white'
  },
  card: {
    flex: 1,
    backgroundColor: '#ff7f50',//#ff7f50
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 10,
    padding: 16,
    marginLeft: -250,
    alignItems: 'center'
  },
  classItem: {
    flex: 1,
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

export default Hindi