import { SafeAreaView,StatusBar,StyleSheet, Text, View } from 'react-native';
// usando Apload
import AppLoading from 'expo-app-loading';
import { useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';

//import de infos para serem passadaqs via props
import mock from './src/mocks/cesta';

export default function App() {

  const [fontesCarregadas]=useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold,
    "MontserratItalic":Montserrat_400Regular_Italic
  })
  //testa se fonts foram carregadas
  if(!fontesCarregadas){
    return <AppLoading/>
  }
  
  return (
    <SafeAreaView >
      <StatusBar/>
      <Cesta {...mock}/>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

