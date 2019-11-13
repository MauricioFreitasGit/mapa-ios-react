import React, { Component, useEffect } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../search';

export default class Map extends Component {
    state = {
        region: null,
    }

    async componentDidMount() {
        Geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude, 
                        longitude, 
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                })
            },//sucesso
            () => { }, //erro
            {
                timeout: 2000,//espera encontrar a localizacao em ate 2 segundos se nao cai em erro
                enableHighAccuracy: true,//Para pegar a localizacao via gps
                maximumAge: 1000, //especie de cache que salva a localizacao
            }
        );
    }

    render() {
        const { region } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation //Poem um icone onde usuario esta
                    loadingEnabled //Poem um active mostrando que esta carrregando
                />
                <Search></Search>
            </View>
        );
    }
}
