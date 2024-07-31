import { StatusBar } from "expo-status-bar";

// StyleSheet para darle estilos a los componentes

// importar componentes de react native
// cada etiqueta hay que importarla
import { StyleSheet, View } from "react-native";

//
import { SafeAreaProvider } from "react-native-safe-area-context";
//
import { Main } from "./components/Main";
export default function App() {
  return (
    // se deja el espacio para la hora, wifi, 4G y bateria

    // SafeAreaProvider es un componente de alto nivel que debe envolver toda tu
    // aplicación o las partes de tu aplicación donde quieras manejar áreas seguras.
    // "Proporciona" el contexto necesario para que otros componentes o hooks
    // puedan acceder a la información de las áreas seguras.
    <SafeAreaProvider>
      {/*
      // View es la vista o como un div/container de html // pero View es
      display flex/d-flex por defecto // todo pegado 12 en vez de 2 debajo de 1
      para hacer los "center" // style={styles.container} llama a los estilos
      para los containers // (StyleSheet)
       */}

      <View style={styles.container}>
        {/* estoy llamando la vista Main.jsx en
         App.js(archivo que se ejecuta para jecutar la app)

         entonces se ejecuta el Main.jsx dentro del App.js
        */}
        <Main />
        {/* style="auto" la parte de arriba del cel la hora, el wifi,
       4G, la bateria  se ven en negro y si se pone un fondo negro 
       no se ve nada light para que se vea en fondo negro
        
       el auto no detecta el fondo si no el modo oscuro del cell
      */}
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

// estilos sin className
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color de fondo
    // backgroundColor: 'red/blue/white/#fff',
    backgroundColor: "black",
    // centra vertical
    alignItems: "center",
    // centra horizontal
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
