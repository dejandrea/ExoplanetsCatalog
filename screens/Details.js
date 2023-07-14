import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Details extends React.Component{
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.title}>Details Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:30
    }
})