import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import welcome from '../assets/images/welcome.png'
import Searchicon from './Searchicon'

const Search = () => {
    return (
        <View style={styles.searchwrap}>
            <TextInput style={styles.search} placeholder="Search fitness for man" />
            <Searchicon />
        </View>
    )
}

export default function Textinput() {
    return (
        <View style={styles.searchwrap}>
            <View style={{ height: 'auto', width: 'auto', backgroundColor: 'whitesmoke', paddingVertical: 10 }}>
                <View>
                    <TextInput style={styles.search} placeholder="Story title or author" />
                    <Searchicon />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        width: 'auto',
        height: 200,
        backgroundColor: '#E0E1E7',
        marginHorizontal: 20
    },
    search: {
        width: 'auto',
        height: 45,
        marginHorizontal: 40,
        marginVertical: 10,
        borderRadius: 17,
        backgroundColor: '#E0E1E7',
        paddingVertical: 8,
        paddingHorizontal: 15,
        position: 'relative'
    },
    searchwrap: {
        width: 'auto',
        height: 'auto',
        borderRadius: 17,
        position: 'relative'
    }
})
