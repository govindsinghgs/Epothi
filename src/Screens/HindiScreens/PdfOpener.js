import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { useRoute } from '@react-navigation/native';

const PdfOpener = () => {
  const route = useRoute();
  const pdfUri = route.params.pdfUri;

  const PdfViewer = ({ pdfUri, onClose }) => {
    return (
      <View >
        <Pdf
          trustAllCerts={false}
          source={{ uri: pdfUri, cache: true }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log('PDF Error:', error);
          }}
          style={styles.pdf}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PdfViewer pdfUri={pdfUri} onClose={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
},
pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
},
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PdfOpener;
