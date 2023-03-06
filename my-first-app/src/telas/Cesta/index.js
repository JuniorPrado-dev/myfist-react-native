import { StyleSheet } from "react-native"
import { View} from "react-native"
import { Detalhes } from "./components/Detalhes"
import { Topo } from "./components/Topo"

const Cesta = ({topo,detalhes}) => {
    return <>
        <Topo {...topo}></Topo>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}></Detalhes>
        </View>
    </>
}



const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})
export default Cesta;