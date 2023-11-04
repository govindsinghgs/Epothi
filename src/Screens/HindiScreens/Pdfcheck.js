import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Pdf } from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';

const HindiClass1 = () => {
  const [calls, setCalls] = useState([]);
  const [selectedPDF, setSelectedPDF] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://www.scert-up.in/api/GetEbookApi?id=1&lang=hindi';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          Alert.alert('No Data', 'There is no Data Available.');
        } else {
          setCalls(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const viewPDF = (filePath) => {
    setSelectedPDF(filePath); // Set the selected PDF for viewing
  };

  const downloadPDF = (filePath, fileName) => {
    const { dirs } = RNFetchBlob.fs;
    const path = `${dirs.Download}/${fileName}`;
    
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path,
      },
    })
      .fetch('GET', filePath)
      .then((res) => {
        Alert.alert('Download Complete', `File saved to ${path}`);
      })
      .catch((error) => {
        Alert.alert('Error', 'Could not open the PDF.');
        console.error('Error downloading PDF:', error);
      });
  };

  const closePDFViewer = () => {
    setSelectedPDF(null); // Close the PDF viewer
  };

  const renderItem = ({ item }) => {
    const subjecticon = require("../HindiScreens/hindi.png");
    const callIcon = require("../HindiScreens/download.png");
    const viewIcon = require("../HindiScreens/view.png");

    return (
      <View style={styles.row}>
        <Image source={subjecticon} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.Subject}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => viewPDF(item.File_Path)}>
          <Image style={styles.iconview} source={viewIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => downloadPDF(item.File_Path, item.File_Name)}>
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
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {selectedPDF && (
        <View style={styles.pdfViewerContainer}>
          <TouchableOpacity style={styles.closePDFButton} onPress={closePDFViewer}>
            <Text style={styles.closePDFButtonText}>Close PDF Viewer</Text>
          </TouchableOpacity>
          <Pdf
            source={{ uri: selectedPDF, cache: true }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
          />
        </View>
      )}
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
  pdfViewerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  closePDFButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  closePDFButtonText: {
    color: 'white',
  },
});

export default HindiClass1;
