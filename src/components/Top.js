import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import articles from '../assets/images/articles.jpg'

const Synopsis = () => {
    return(
        <View style={{width: 'auto', position: 'absolute', marginHorizontal: 17, color: 'white', bottom: 0, paddingVertical: 10, paddingHorizontal: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Lorem ipsum sit amet lorem ipsum lorem ipsum lorem ipsum</Text>
        </View>
    )
}

export default function Top() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.arwrapper}>
                <Image source={articles} style={styles.articles}/>
                <Synopsis/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 'auto',
        height: 250,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center'
    },
    arwrapper: {
        width: 'auto',
        height: 200,
        position: 'relative'
        
    },
    articles: {
        width: 'auto',
        height: 200,
        marginHorizontal: 15,
        borderRadius: 15
    }
})
