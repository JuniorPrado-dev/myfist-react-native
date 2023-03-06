import { TouchableOpacity } from "react-native"
import { Button, Image, StyleSheet, View } from "react-native"
import { Texto } from "./Texto"

export const Detalhes = ({ nome, nomeFazenda, logoFazenda, descricao,
    preco, botao }) => {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        {/* <Button title={botao}/> */}
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 16,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 8,
    },
    botao:{
        marginTop:16,
        backgroundColor:"2A9F85",
        paddingVertical:16,
        borderRadius:6
    },
    textoBotao:{
        textAlign: "center",
        backgroundColor:"#ffffff",
        
    }
})