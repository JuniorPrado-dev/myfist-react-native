import { Image, StyleSheet } from "react-native"
import { Texto } from "./Texto"
import topo from "../../../../assets/topo.png"
import { Dimensions } from "react-native"

export const Topo=({titulo})=>{
    //formula tamanho= altura da imagem / largura da imagem * largura da tela
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo} >{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * (Dimensions.get("screen").width),
    },
    titulo:{
        width:"100%",
        position: "absolute",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        color:"white",
         fontWeight:"bold",
         padding:16
    },
})