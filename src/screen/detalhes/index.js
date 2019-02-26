import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Font} from 'expo';

import Header from "../header";

class Detalhes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fontLoaded : false
        }
    }

    componentDidMount = async ()  => {
        await Font.loadAsync({
            "open-sans-bold" : require("../../../assets/fonts/OpenSans-Bold.ttf"),
            "open-sans-regular" : require("../../../assets/fonts/OpenSans-Regular.ttf"),
        });

        this.setState({ fontLoaded : true });
    }    

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
                <Text>Detalhes</Text>          
            </ScrollView>
            
        );
    }
}

export default Detalhes;