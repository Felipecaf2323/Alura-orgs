import React from "react";

import {View, Text, Image, StyleSheet} from 'react-native'; //TouchableWithoutFeedback e uma opcao

import Botao from '../../../componentes/Botao'

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) { //aqui tem que pegar os nomes da mocks/cesta para usar como parametro
    return <>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}></Image>
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text> 

        <Botao texto={botao} style={estilos.botao} onPress={() => {}}/>
    </>
}

//a arrow function em TouchableOpacity e para caso eu queira executar alguma coisa quando a pessoa clicar no botao

const estilos = StyleSheet.create ({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
    },
})