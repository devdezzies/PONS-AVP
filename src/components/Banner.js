import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import quote from '../assets/icon/quote.png'


const Profile = () => {
    return (
        <View style={styles.imgwrap}>
            <Image source={{ uri: 'https://wallpapercave.com/wp/wp2513986.jpg' }} style={styles.image} />
        </View>
    )
}

const Menu = () => {
    return (
        <View style={styles.menuwrapper}>
            <Pressable>
                <Image source={quote} style={styles.imagemenu} />
            </Pressable>
        </View>
    )
}

const Logo = () => {
    return (
        <View>
            <Text style={styles.logo}>
                Readln
            </Text>
        </View>
    )
}

export default function Banner() {
    return (
        <View>
            <View style={styles.wrapper}>
                <Profile />
                <Menu />
                <Logo />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 'auto',
        height: 65,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 18
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#0B0B0B'

    },
    imgwrap: {
        position: 'absolute',
        right: 0,
        paddingRight: 20
    },
    menuwrapper: {
        position: 'absolute',
        left: 0,
        paddingLeft: 20

    },
    imagemenu: {
        width: 20,
        height: 20
    }
})
