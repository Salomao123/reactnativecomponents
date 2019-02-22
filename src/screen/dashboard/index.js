import React from 'react';
import {ScrollView } from 'react-native';


import Header from '../header';
import Tarefa from '../tarefa';

class Dashboard extends React.Component {

   

    render() {

        const {navigation} = this.props;


        return (
            <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
                
                <Header  />

                <Tarefa navigation={navigation}/>

            </ScrollView>
            
        );
    }
}

export default Dashboard;