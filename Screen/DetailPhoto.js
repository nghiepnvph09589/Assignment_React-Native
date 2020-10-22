import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export default function DetailPhoto({ navigation, route }) {
    const { urlpt } = route.params;

    let download = async() =>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if(status==="granted"){
        const fileuri = FileSystem.documentDirectory+"aaa.jpg"
        FileSystem.downloadAsync(urlpt, fileuri).then(({uri})=>{
          MediaLibrary.createAssetAsync(fileuri);
        })
      }
    }

    

    

    return (
        <View style={styles.container}>
            <Text>{urlpt}</Text>
            <Image style={{ height:300, width: '100%', }} source={{ uri: urlpt }} />
            <StatusBar style="auto" />
            <TouchableOpacity style={{ margin: 10 }} onPress={()=>{download()}}>
                <Feather name='save' size={50} color='#121212' />
              </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});