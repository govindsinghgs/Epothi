import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'

const HindiClass1check = () => {
    callsData = [
        {
            id: 1,
            name: 'Subject 1',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 2,
            name: 'Subject 2',
            download: true,
            image:require("../HindiScreens/hindi.png"),
        },
        {
            id: 3,
            name: 'Subject 3',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 4,
            name: 'Subject 4',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 5,
            name: 'Subject 5',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 6,
            name: 'Subject 6',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 8,
            name: 'Subject 8',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 9,
            name: 'Subject 9',
            download: true,
            image: require("../HindiScreens/hindi.png"),
        },
        {
            id: 10,
            name: 'Subject 10',
            download: true,
            image:require("../HindiScreens/hindi.png"),
        },
    ]

    const [calls, setCalls] = useState(callsData)

    const renderItem = ({ item }) => {
        const callIcon = require("../HindiScreens/download.png");
        const viewIcon = require("../HindiScreens/view.png");
      
        // var callIcon = 'https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-download-button-user-interface-anggara-flat-anggara-putra.png'
        // if (item.download == true) {
        //     callIcon = 'https://img.icons8.com/external-anggara-flat-anggara-putra/32/external-download-button-user-interface-anggara-flat-anggara-putra.png'
        // }
        // else if (item.download == false) {
        //     var callIcon = 'https://img.icons8.com/color/48/000000/phone.png'
        // }

        // var viewicon = 'https://img.icons8.com/ios-glyphs/30/visible--v1.png'
        // if (item.download == true) {
        //     viewicon = 'https://img.icons8.com/ios-glyphs/30/visible--v1.png'
        // }
        // else if (item.download == false) {
        //     var viewicon = 'https://img.icons8.com/color/48/000000/phone.png'
        // }
        return (
                <View style={styles.row}>
                    <Image source={item.image} style={styles.pic} />
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt}>{item.name}</Text>
                        </View>
                    </View>
                    <TouchableOpacity  onPress={() =>  console.log("View Press ")} >
                    <Image style={[styles.iconview, { marginLeft:-50 }]}  source={viewIcon} />
                    </TouchableOpacity>
                    {/* // For Download Icon */}
                    <TouchableOpacity  onPress={() =>  console.log("Download Press ")} >
                    <Image style={[styles.icon, { marginRight: 60 }]}  source={callIcon} />
                    </TouchableOpacity>
                </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                extraData={calls}
                data={calls}
                keyExtractor={item => {
                    return item.id
                }}
                renderItem={renderItem}
            />
        </View>
    )
}

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
        fontSize: 25,
    },
    icon: {
        height: 35,
        width: 35,
    },
    iconview:{
        height: 35,
        width: 35,
    }
})
export default HindiClass1check;