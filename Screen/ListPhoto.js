import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'

export default function ListPhoto({ navigation }) {
    const url3 = 'https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=ae641a72f022d3fa83fa3009357c8546&user_id=190415467%40N05&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=100&page=1&format=json&nojsoncallback=1';
    const [data, setData] = useState();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(url3)
            //chuyen du liệu về dang json
            .then((response) => response.json())
            //được gọi khi ket thúc request dữ liệu
            .then((responseJson) => {
                const albumId1 = responseJson.photos.photo[0].id;
                const link = responseJson.photos.photo[0].url_sq;
                setData(link);
                setArr(responseJson.photos.photo)
            })
            //gọi dữ liệu khi xảy ra lỗi
            .catch((error) => {
                console.error(error);

            })
    })

    return (
        <View style={styles.container}>


            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Info')}}>
                    <View style={{ flexDirection: 'row', margin: 10, }}>
                        <Feather name='info' size={50} color='#121212' />
                    </View>
                </TouchableOpacity>
                <Image style={{ height: 70, width: 220, }} source={{ uri: 'https://ap.poly.edu.vn/images/logo.png' }} />
                <TouchableOpacity onPress={()=>{navigation.navigate('Contact')}}>
                    <View style={{ flexDirection: 'row', margin: 10, }}>
                        <Feather name='phone' size={50} color='#121212'/>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={arr}
                //giao diện 1 mảng
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('DetailPhoto', { urlpt: item.url_sq }) }}>
                        <View style={{ borderWidth: 1, margin: 10, width: 185, }}>
                            {/* <Text>ID: {item.id}</Text> */}
                            <Image style={{ height: 250, width: '100%', }} source={{ uri: item.url_sq }} />
                        </View>

                    </TouchableOpacity>


                )}
                // giá trị trên mảng để phân biệt các hàng
                keyExtractor={item => item.id}
                numColumns={2}
            />
            <StatusBar style="auto" />
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
