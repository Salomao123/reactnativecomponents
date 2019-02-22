import React from 'react';

import { View, Text, TouchableOpacity} from 'react-native';
import { Font } from 'expo';


class Tarefa extends React.Component {

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
                <View style={{marginTop : 40, paddingHorizontal: 10}}>
                    {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-bold", fontSize : 20}}>Minhas Tarefas </Text>) : null}
                </View>

                <View style={{marginTop : 20, paddingHorizontal: 10}}>
                    <View style={{borderWidth : 1, borderColor : "#ddd", paddingVertical : 20, paddingHorizontal : 20, borderRadius : 20 }}>
                        <View style={{borderBottomWidth : 0.5, borderBottomColor : "#ddd"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Nome : JOSÉ LUIS SOARES BATISTA </Text>) : null}
                        </View>

                        <View>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Tarefa Teste - 21/02/2019</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Etapa : 1.1 Efetuar mobilizações das comunidades e criar o estudo de casos</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Descrição: Esta tarefa será resposável por gerenciar os colaboradores com ... </Text>) : null}
                        </View>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Status : </Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5, color: "#3E86D0"}}> Pendente </Text>) : null}
                        </View>

                        <TouchableOpacity style={{backgroundColor: "#3E86D0", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20}}>
                            {this.state.fontLoaded ? (<Text style={{ fontFamily : "open-sans-bold", fontSize : 15, color: "#fff"}}>Visualizar</Text>) : null }
                        </TouchableOpacity>
                    </View>
                   
                </View>

                <View style={{marginTop : 20, paddingHorizontal: 10}}>
                    <View style={{borderWidth : 1, borderColor : "#ddd", paddingVertical : 20, paddingHorizontal : 20, borderRadius : 20 }}>
                        <View style={{borderBottomWidth : 0.5, borderBottomColor : "#ddd"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Nome : JOSÉ LUIS SOARES BATISTA </Text>) : null}
                        </View>

                        <View>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Tarefa Teste - 21/02/2019</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Etapa : 1.1 Efetuar mobilizações das comunidades e criar o estudo de casos</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Descrição: Esta tarefa será resposável por gerenciar os colaboradores com ... </Text>) : null}
                        </View>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Status : </Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5, color: "#3E86D0"}}> Pendente </Text>) : null}
                        </View>

                        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Detalhes") } style={{backgroundColor: "#3E86D0", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20}}>
                            {this.state.fontLoaded ? (<Text style={{ fontFamily : "open-sans-bold", fontSize : 15, color: "#fff"}}>Visualizar</Text>) : null }
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={{marginTop : 20, paddingHorizontal: 10}}>
                    <View style={{borderWidth : 1, borderColor : "#ddd", paddingVertical : 20, paddingHorizontal : 20, borderRadius : 20 }}>
                        <View style={{borderBottomWidth : 0.5, borderBottomColor : "#ddd"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Nome : JOSÉ LUIS SOARES BATISTA </Text>) : null}
                        </View>

                        <View>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Tarefa Teste - 21/02/2019</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Etapa : 1.1 Efetuar mobilizações das comunidades e criar o estudo de casos</Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Descrição: Esta tarefa será resposável por gerenciar os colaboradores com ... </Text>) : null}
                        </View>

                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5,}}>Status : </Text>) : null}
                            {this.state.fontLoaded ? (<Text style={{fontFamily : "open-sans-regular", fontSize : 13, paddingVertical : 5, color: "green"}}> Finalizada </Text>) : null}
                        </View>

                        <TouchableOpacity style={{backgroundColor: "#3E86D0", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20}}>
                            {this.state.fontLoaded ? (<Text style={{ fontFamily : "open-sans-bold", fontSize : 15, color: "#fff"}}>Visualizar</Text>) : null }
                        </TouchableOpacity>
                    </View>
                   
                </View>
            </View>
        );
    }
}


export default Tarefa;