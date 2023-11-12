import React from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";

export default function Item({ item: {nome, imagem} }){
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={imagem}/>
        <Text style={estilos.nome} key={nome}>{ nome }</Text>
    </View>

}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        marginHorizontal: 16,
        paddingVertical: 16,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
});