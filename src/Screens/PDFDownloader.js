// PDFDownloader.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import RNFS from 'react-native-fs';

const PDFDownloader = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    const downloadDest = `${RNFS.ExternalDirectoryPath}/${fileName}`;
    try {
      const response = await RNFS.downloadFile({
        fromUrl: fileUrl, // Use the URL received from props
        toFile: downloadDest,
      }).promise;

      if (response.statusCode === 200) {
        Alert.alert('Download Complete', `File saved to: ${downloadDest}`);
      } else {
        Alert.alert('Download Failed', 'Unable to download the file.');
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      Alert.alert('Download Error', 'An error occurred while downloading the PDF.');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDownload}>
        <Text>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PDFDownloader;
