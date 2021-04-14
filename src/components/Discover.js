import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import bookmark from '../assets/icon/bookmark.png'

const Title = () => {
    return (
        <View style={styles.title}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Discover</Text>
        </View>
    )
}

const Tag = (props) => {
    return (
        <View style={styles.tagswrap}>
            <Text style={{ fontWeight: 'bold', fontSize: 11 }}>{props.title}</Text>
        </View>
    )
}

const Tagfill = () => {
    return (
        <View style={styles.tagswraps}>
            <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'white' }}>Public</Text>
        </View>
    )
}

const Taging = () => {
    return (
        <View style={styles.tagwrap}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Tagfill />
                <Tag title="Popular" />
                <Tag title="Polytics" />
                <Tag title="Story" />
                <Tag title="Physics" />
                <Tag title="Public" />
                <Tag title="Public" />
            </ScrollView>
        </View>
    )
}

const Markdown = () => {
    return (
        <View style={{position: 'absolute', right: 0, top: 0, padding: 10}}>
            <Image source={bookmark} style={{ width: 20, height: 22 }} />
        </View>
    )
}

const Detail = () => {
    return (
        <View>
            <View style={{ width: 160, height: 130 }}>
                <Text style={{ fontSize: 11, color: 'grey', fontWeight: 'bold', paddingVertical: 5 }}>Paul de Senneville</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', paddingBottom: 5 }}>How to build a mobile apps using React Native</Text>
                <Text style={{ fontSize: 10 }}>Vertical Padding</Text>
            </View>
        </View>

    )
}

const Content = () => {
    return (
        <View>
            <View style={styles.contwrapper}>
                <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.imgwraps} />
                <Detail />
                <Markdown />
            </View>
            
        </View>
    )
}

const Articles = () => {
    return (
        <View>
            <View style={styles.artwrap}>
                <Content />
                <Content />
                <Content />
                <Content />
                <Content />
            </View>
        </View>
    )
}

export default function Discover() {
    return (
        <View>
            <View style={styles.wrapper}>
                <Title />
                <Taging />
                <Articles />
            </View>
        </View>
    )
}

Tag.defaultProps = {
    title: '#Fill'
}

const styles = StyleSheet.create({
    wrapper: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 20,


    },
    title: {
        width: 'auto',
        height: 'auto'
    },
    tagwrap: {
        width: 'auto',
        height: 35,
        justifyContent: 'center',
        marginTop: 10

    },
    tagswrap: {
        width: 70,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        borderWidth: 2,
        marginHorizontal: 5


    },
    tagswraps: {
        width: 70,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 5,
        borderWidth: 2,
        marginHorizontal: 5


    },
    artwrap: {
        width: 'auto',
        height: 'auto',
        padding: 5,
        marginVertical: 10
    },
    contwrapper: {
        width: 'auto',
        height: 150,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative'
        
    },
    imgwraps: {
        width: 100,
        height: 130,
        marginLeft: 10,
        borderRadius: 10,
        marginRight: 10

    },
    detailwrap: {
        width: 'auto',
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
        position: 'relative'
    }
})
