import { FlatList, Image,StyleSheet,View } from "react-native";
import { Texto } from "./Texto";

export default function Itens({ titulo, lista }) {
    const itemRender=({item:{nome, imagem}})=>{
            return <View style={estilos.item} key={nome}>
                <Image style={estilos.imagem} source={imagem} />
                <Texto style={estilos.nome}>{nome}</Texto>
            </View>
    }
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        <FlatList 
            data={lista}
            renderItem={itemRender}
            keyExtractor={({nome})=>nome}
        />
        {/* {lista.map(({ nome, imagem }) => {
            return <View style={estilos.item} key={nome}>
                <Image style={estilos.imagem} source={imagem} />
                <Texto style={estilos.nome}>{nome}</Texto>
            </View>
        })} */}
    </>
}

const estilos = StyleSheet.create({
   
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        color: "#464646",
        fontWeight: "bold",
        marginTop:32,
        marginBottom:8,
    },
    item: {
        flexDirection: "row",
        paddingVertical: 16,
        borderBottomWidth:1,
        borderBottomColor:"##ECECEC",
        alignItems:"center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:"#464646"
    },
})