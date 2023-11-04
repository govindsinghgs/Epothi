import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Linking,Alert } from 'react-native';

const Teacher = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://www.scert-up.in/api/GetEbookApi?id=1&lang=Teacher';

    // Fetch data from the API using the fetch function
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          // Display an alert if the fetched data is empty
          Alert.alert('No Data', 'There is no Data Available.');
        } else {
          setCalls(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const downloadPDF = (filePath) => {
    const { dirs } = RNFetchBlob.fs;
    const path = `${dirs.Download}/${File_Name}`;
    
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path,
      },
    })
      .fetch('GET', File_Path)
      .then((res) => {
        Alert.alert('Download Complete', `File saved to ${res.path}`);
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });

    Linking.openURL(filePath);
  };

  const viewPDF = (filePath) => {
    const { File_Path, File_Name } = fileData;
    // Use the Linking module to open the PDF file for viewing
    Linking.openURL(filePath);
  };

  const renderItem = ({ item }) => {
     const subjecticon = require("../Images/teacher.png")
    const callIcon = require("../Images/download.png");
    const viewIcon = require("../Images/view.png");

    return (
      <View style={styles.row}>
        <Image source={subjecticon} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.Subject}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => viewPDF(item.File_Path)} >
          <Image style={[styles.iconview, { marginLeft: -50 }]} source={viewIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => downloadPDF(item.File_Path)} >
          <Image style={[styles.icon, { marginRight: 60 }]} source={callIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        extraData={calls}
        data={calls}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 80,
    height: 80,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 20,
  },
  icon: {
    height: 35,
    width: 35,
  },
  iconview: {
    height: 35,
    width: 35,
  },
});

export default Teacher;
