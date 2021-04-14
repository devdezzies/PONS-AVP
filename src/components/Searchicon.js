import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import search from '../assets/icon/search.png'

export default function Searchicon() {
    return (
        <View>
            <View style={styles.wrapper}>
                <Image source={search} style={{width: 15, height: 15}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 45,
        height: 45,
        backgroundColor: '#0B0B0B',
        borderRadius: 17,
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 40,
        marginVertical: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
