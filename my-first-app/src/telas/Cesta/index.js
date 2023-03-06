import { ScrollView, StyleSheet } from "react-native"
import { View } from "react-native"
import { Detalhes } from "./components/Detalhes"
import Itens from "./components/Itens"
import { Topo } from "./components/Topo"

const Cesta = ({ topo, detalhes, itens }) => {
    return <ScrollView>
        <Topo {...topo}></Topo>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}></Detalhes>
            <Itens {...itens} />
        </View>
        </ScrollView>
}



        const estilos = StyleSheet.create({
            cesta: {
            paddingVertical: 8,
        paddingHorizontal: 16
    },
})
        export default Cesta;