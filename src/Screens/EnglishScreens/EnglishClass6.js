import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Linking, Alert, Dimensions } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';
const EnglishClass6 = () => {
  const [calls, setCalls] = useState([]);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pdfUri, setPdfUri] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://www.scert-up.in/api/GetEbookApi?id=6&lang=english';
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

  const openPdf = (item) => {
    const baseUri = 'https://www.scert-up.in/EBook/';
    const pdfFileName = `${item.File_Name}`; // Use "File_Name" key
    const pdfUri = baseUri + pdfFileName;
    setPdfUri(pdfUri);
    setPdfVisible(true);
    navigation.navigate('PdfOpener', { pdfUri });
  };
 
  const downloadPdfForSubject = (item) => {
    const pdfFileName2 = `${item.File_Name}`;
    const baseUri = 'https://www.scert-up.in/EBook/';
    const pdfUri = baseUri + pdfFileName2;
    // Use RNFetchBlob to download the PDF
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: pdfFileName2,
        description: 'Downloading PDF',
        mime: 'application/pdf',
        path: RNFetchBlob.fs.dirs.DownloadDir + '/' + pdfFileName2,
      },
    })
      .fetch('GET', pdfUri, {})
      .then((res) => {
        console.log('File downloaded to:', res.path());
        // You can setPdfUri here if needed.
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };
  
  const renderItem = ({ item }) => {
    const subjecticon = require("../EnglishScreens/english.png")
    const callIcon = require("../EnglishScreens/download.png");
    const viewIcon = require("../EnglishScreens/view.png");
    return (
      <View style={styles.row}>
        <Image source={subjecticon} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.Subject}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => openPdf(item)}>
          <Image style={styles.iconview} source={viewIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => downloadPdfForSubject(item)}>
          <Image style={styles.icon} source={callIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        extraData={calls}
        data={calls}
        keyExtractor={(item) => item.id.toString()} // Ensure it's a string
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    marginLeft:0,
    fontSize: 18,
  },
  icon: {
    height: 35,
    width: 35,
  },
  iconview: {
    height: 35,
    width: 35,
  },
  pdfContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0,
  },
  pdf: {
    flex: 1,
    width: 800,
    height: 800,
  },
});

export default EnglishClass6;
