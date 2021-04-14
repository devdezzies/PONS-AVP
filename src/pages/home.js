import React from 'react'
import { View, ScrollView } from 'react-native'
import Banner from '../components/Banner'
import Discover from '../components/Discover'
//import Textinput from '../components/TextInput'
import Top from '../components/Top'


export default function Home() {
    return (
        <View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Banner />
                <Top />
                <Discover />
            </ScrollView>
        </View>
    )
}
