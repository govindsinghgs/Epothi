import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Urdu = () => {
  const navigation =useNavigation();
  const classes = [
    {
      title: 'کلاس 1',
      bgColor: '#E0FFFF',
    },
    {
      title: 'کلاس 2',
      bgColor: '#E6E6FA',
    },
    {
      title: 'کلاس 3',
      bgColor: '#FAF0E6',
    },
    {
      title: 'کلاس 4',
      bgColor: '#FAFAD2',
    },
    {
      title: 'کلاس 5',
      bgColor: '#E0FFFF',
    },
    {
      title: 'کلاس 6',
      bgColor: 'lightpink',
    },
    {
      title: 'کلاس 7',
      bgColor: '#27ae60',
    },
    {
      title: 'کلاس 8',
      bgColor: '#7f8c8d',
    }

  ];
    
  const handleItemPress=(items)=>{
    if(items.title==='کلاس 1'){
     navigation.navigate('UrduClass1')
    }
    else if(items.title==='کلاس 2'){
      navigation.navigate('UrduClass2')
    }
    else if(items.title==='کلاس 3'){
      navigation.navigate('UrduClass3')
    }
    else if(items.title=='کلاس 4'){
        navigation.navigate('UrduClass4')
    }
    else if (items.title==='کلاس 5'){
      navigation.navigate('UrduClass5')
    }
    else if(items.title=='کلاس 6'){
        navigation.navigate('UrduClass6')
    }
    else if(items.title=='کلاس 7'){
        navigation.navigate('UrduClass7')
    }
    else if(items.title=='کلاس 8'){
        navigation.navigate('UrduClass8')
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
    backgroundColor:'#1f1f39'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 160,
    color:'white'
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
    marginLeft: -280,
    alignItems: 'center'
  },
  header: {
    marginBottom: 8,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    width: 24
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#ffffff',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userRole: {
    fontSize: 12,
    color: '#ffffff',
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
  classHours: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  startTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  endTime: {
    fontSize: 16,
  },
  cardTitle: {
    fontSize: 28,
    color: '#00008B',
    marginBottom: 2

  },
  cardDate: {
    fontSize: 12,
    color: '#00008B',
    marginBottom: 4,
  },
  studentListContainer: {
    marginRight: 10,
  },
  studentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -3,
    borderWidth: 1,
    borderColor: '#fff'
  },
});

export default Urdu