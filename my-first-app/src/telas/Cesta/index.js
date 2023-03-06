import { FlatList, ScrollView, StyleSheet } from "react-native"
import { View } from "react-native"
import { Detalhes } from "./components/Detalhes"
import Item from "./components/Item"
import { Texto } from "./components/Texto"
import { Topo } from "./components/Topo"

const Cesta = ({ topo, detalhes, itens }) => {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}></Topo>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}></Detalhes>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}



const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})
export default Cesta; 