import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';


import Topo from '../Cesta/componentes/Topo'
import Detalhes from '../Cesta/componentes/Detalhes'
import Item from '../Cesta/componentes/Item'


export default function Cesta({ topo , detalhes, itens }) { //aqui pegou o detalhes para passar em Detalhes
    return <>

    <FlatList data={itens.lista} renderItem={Item} keyExtractor={({ nome}) => nome} ListHeaderComponent={() => {
        return <>
            <Topo {...topo}/>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
                <Text style={estilos.titulo}>{itens.titulo}</Text>
            </View>
        </>
    }}/>


    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,  
    },
});