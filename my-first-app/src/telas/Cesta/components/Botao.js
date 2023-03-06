import { StyleSheet, TouchableOpacity } from "react-native"
import { Texto } from "./Texto"

const Botao = ({children}) => {
    return <>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{children}</Texto>
        </TouchableOpacity>
    </>
}

export default Botao;

const estilos=StyleSheet.create({
    botao:{
        marginTop:16,
        backgroundColor:"#2A9F85",
        paddingVertical:16,
        borderRadius:6
    },
    textoBotao:{
        textAlign: "center",
        color:"#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }

})
