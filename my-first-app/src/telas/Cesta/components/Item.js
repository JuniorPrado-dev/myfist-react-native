import { FlatList, Image, StyleSheet, View } from "react-native";
import { Texto } from "./Texto";

export default function Item({ titulo, lista }) {

    return <View style={estilos.item} key={nome}>
        <Image style={estilos.imagem} source={imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({

    item: {
        flexDirection: "row",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "##ECECEC",
        alignItems: "center",
        padding:16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
})