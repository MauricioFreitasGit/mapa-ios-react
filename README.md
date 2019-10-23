Antes de iniciar esse projeto certifique-se de ter instalado todas as dependencias para seu ambiente de trabalho contidas no https://facebook.github.io/react-native/docs/getting-started

0-Criando o app.
No terminal digite:react-native init nomeprojeto
Feito isso basta entrar na pasta com cd nomeprojeto e rodar o app com o comando react-native run-ios.

1-Instalando o maps
Ainda no terminal digite agora: npm install react-native-maps --save-exact

Agora entre na pasta ios e instale o pod com:cd ios pod install.

Feito isso dentro do PODfile(que esta dentro da pasta ios) em cima de "use native modules" cole a seguinte dependencia.

 # React Native Maps dependencies
  rn_maps_path = '../node_modules/react-native-maps'
  pod 'react-native-google-maps', :path => rn_maps_path
  pod 'GoogleMaps'
  pod 'Google-Maps-iOS-Utils'

  Após isso basta instalar o pod novamente com pod install e pronto.

  2-Mostrando o mapa no ios.
  Para exibir o mapa nativo do ios na tela do iphone basta colar o seguinte codigo na pagina App.js

import React, { Component } from 'react';
import {View,StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default class MapaApp extends Component {
  render() {
    return (
     <View style={styles.container}>
     <MapView
     remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    );
  }
}

Pronto agora voce ja deve ver o mapa nativo do ios em seu celular ou simulador.