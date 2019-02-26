import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import { Font, Constants, Location, Permissions } from 'expo';

class Localizacao extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            location: null,
            errorMessage: null,
        }

        this.location = null;
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
        } else {
          this._getLocationAsync();
        }
    }

    _getLocationAsync = async ()  => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    }

    render(){
        
        let longitude = latitude = altitude = precisao = '--';
        
        const { location } = this.state;

        this.location = location;


        console.log({location : this.location});

        // if(!location.coords){
        //     return null;
        // }

        // if(location.coords.longitude){
        //     dados_localizacao.push({ longitude : location.coords.longitude });
        // }

        // if(location.coords.latitude){
        //     dados_localizacao.push({ latitude : location.coords.latitude });
        // }

        // if(location.coords.altitude){
        //     dados_localizacao.push({ altitude : location.coords.altitude });
        // }

        // if(location.coords.accuracy){
        //     dados_localizacao.push({ precisao : location.coords.accuracy });
        // }

        // console.log({dados_localizacao});
        
        return (
            <View style={{marginTop : 20, paddingHorizontal: 10}}>
                <View style={{ flexDirection : "row", justifyContent : "space-around", alignItems : "center", borderWidth : 1, borderColor : "#ddd", paddingVertical : 20, paddingHorizontal : 20, borderRadius : 20 }}>
                    <View>
                      <Text style={{ fontSize : 13, paddingVertical : 2,}}>Longitude : -51.0848851</Text>
                      <Text style={{ fontSize : 13, paddingVertical : 2,}}>Latitude : -0.0061129 </Text>
                      <Text style={{ fontSize : 13, paddingVertical : 2,}}>Altitude : -9.699999809265137</Text>
                      <Text style={{ fontSize : 13, paddingVertical : 2,}}>Precisao : 15.321000099182129 </Text>

                    </View>
                </View>
            </View>
        );
    }
}

export default Localizacao;