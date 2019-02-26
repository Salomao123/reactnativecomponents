import React from 'react';

import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'native-base';
import { Font } from 'expo'
import Localizacao from '../localizacao';

class Header extends React.Component {

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
            <View>
                <StatusBar translucent backgroundColor={"#fff"}/>

                <View style={{ flexDirection : "row", justifyContent: "space-between", alignItems: "center", position : "relative", top: 20, paddingHorizontal: 10, paddingVertical : 10}}>
                    <View style={{flexDirection : "row", alignItems: "center"}}>
                        <Icon name="ios-menu" style={{marginRight : 10}} onPress={ () => alert("ainda não implementado!")} />
                        {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-bold", fontSize : 20}}>Tedplan </Text>) : null}
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>alert("ainda não implementado!")}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 15}}>SAIR</Text>): null}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop : 40, paddingHorizontal: 10}}>
                    <View style={{ flexDirection : "row", justifyContent : "space-around", alignItems : "center", borderWidth : 1, borderColor : "#ddd", paddingVertical : 20, paddingHorizontal : 20, borderRadius : 20 }}>
                        <Image source={require("../../../assets/icon_user.png")} style={{width: 75, height: 75, resizeMode : "contain"}} />
                        <View>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Nome : JOSÉ LUIS SOARES BATISTA </Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>CPF : 452.653.698-93 </Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Membro : COLABORADOR </Text>) : null}
                        </View>
                    </View>
                </View>

                <Localizacao />

            </View>
        );
    }
}

export default Header;