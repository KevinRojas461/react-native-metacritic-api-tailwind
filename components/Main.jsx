// StyleSheet para darle estilos a los componentes

// importar componentes de react native
// cada etiqueta hay que importarla
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";

// navegar en paginas
import { Link } from "expo-router";

// importar metacritic
import { getLatestGames } from "../lib/metacritic";

import { useEffect, useState } from "react";

// que se a vea la barra de la hora, wifi, 4G y beteria
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { CircleInfoIcon } from "./Icons";
import { Screen } from "../components/Screen";

export function Main() {
  // useSafeAreaInsets es un hook que te permite acceder a los valores
  // de las áreas seguras en cualquier componente funcional
  const insets = useSafeAreaInsets();

  // cuando hagamos una llamada al principio tendremos una lista vacia

  // la variable cada vez que cambia de valor se renderiza el componente
  // y asi reflejar los cambios
  const [games, setGames] = useState([]);

  // metodo que se va a ejecutar la primera vez que se renderiza el componente
  // cada vez que cambia lo que aparecen aqui: ", []" o la primera vez que se renderiza
  // el componente se ejecuta el metodo getLatestGames
  // (1) como es un array vacio ", []" entonces solo se va a ejecutar la primera vez
  // que se renderiza el componente
  useEffect(() => {
    // la primera vez que se renderize el componente
    // cuando tengamos los resultados luego se asigna los datos de la api
    // a la lista (games)

    // (2) asi recuperamos los juegos de la api y actualizamos el estado
    // y con el nuevo estado renderizamos/mostramos los juegos
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    // View es la vista o como un div/container de html
    // pero View es display flex/d-flex por defecto
    // todo pegado 12 en vez de 2 debajo de 1 para hacer los "center"

    // style={styles.container} llama a los estilos para los containers
    // (StyleSheet)

    // insets.top y insets.bottom para que deje los espacios que tiene que dejar
    // tanto arriba como abajo
    // se deja el espacio para la barra de hora, wifi, 4G y bateria

    //  se utilizan juntos para asegurar que tu aplicación respete las áreas seguras
    // en diferentes dispositivos y versiones de sistemas operativos.

    // style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    // ya no es necesario si se usa el <Stack /> de _layout.js
    <Screen>
      {/* */}
      {/* hay dos tipos de imagenes locales las de assets */}

      {/* para cargar una imagen LOCAL tenemos que importarla */}
      {/* style para ponerle estilos a la imagen 
      (100 son pixeles visuales segun la resolucion para el tamaño) */}
      {/* height 850 y width 395 rellena toda la pantalla */}
      {/* blurRadius para que se haga borrosa la imagen
       mas alto el numero mas borrosa la imagen */}
      {/* 

      <Image blurRadius={1} source={icon} style={{
         width: 200,
         height: 100,
         // contain para que simetrico o parejo
         resizeMode: 'contain'
          }} />
      */}

      {/* imagenes que no son locales SIMPRE NECESITAN un width y height 
      <Image
        blurRadius={0}
        source={{
          uri: "https://i.pinimg.com/originals/ff/e1/69/ffe16993fee8b781471cab63210eefde.jpg",
        }}
        style={{
          width: 215,
          height: 294,
          // contain para que simetrico o parejo
          resizeMode: "contain",
        }}
      />
      */}

      {/* sin Text no se puede poner texto en la app */}
      {/* Text para renderizar texto */}
      {/* style={{ color: 'white' }} darle color al texto 

      <Text style={{ color: "white" }}>My app!</Text>
      */}

      {/* onPress para ejecutar un metodo al precionar el boton
      alert va a mostar una alerta/notificacion/modal
      el boton se AJUSTA a cualquier dispositivo (web/android/ios)
      
      <Button
        title="Pulsa aqui"
        // no se le puede ajustar los estilos al boton
        // solo se puede cambiar el color
        color="blue"
        onPress={() => alert("Hola")}
      />
      */}
      {/* */}
      {/* TouchableHighlight es como button pero si se le puede aplicar estilos
      poner imagenes para hacer una imagen/link/boton

      underlayColor es para que cuando se de Clic cambie de color y avise que se
      presiono el boton  
      
      <TouchableHighlight
        underlayColor={"#09f"}
        //
        onPress={() => alert("Hola")}
        style={{
          width: 90,
          height: 40,
          backgroundColor: "red",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aqui</Text>
      </TouchableHighlight>
      */}

      {/* no necesita el underlayColor pq se pone opaco/oscuro cuando se presiona 
      <TouchableOpacity
        //
        onPress={() => alert("Hola")}
        style={{
          width: 90,
          height: 40,
          backgroundColor: "red",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Pulsa aqui</Text>
      </TouchableOpacity>
      */}

      {/* Pressable es lo nuevo 
      <Pressable
        style={({ pressed }) => [
          {
            // si se esta pulsando es blue si no red
            backgroundColor: pressed ? "blue" : "red",
          },
          styles.wrapperCustom,
        ]}
      >
      */}

      {/* pressed es la variable que indica si se esta presionando o no 
        {({ pressed }) => (
          // "Pressed" cunado se presione y "Press Me" cuando no se este presionando
          <Text
            style={{
              // si se esta presionando el tamaño del texto es 32 y si no es 16
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
      */}

      {/* ScrollView para poder deslizar hacia abajo o hacia arriba
      ScrollView solo es para cajas de texto muy grandes estaticas
      
      RENDERIZA todos los elementos aunque el usu los vea o no los vea

      <ScrollView>
          // recorrer juego por juego
          {games.map((game) => (
            // game={game} psarle todos los juegos como parametro
            <GameCard key={game.slug} game={game} />
          ))}
        </ScrollView>
      */}

      {/* si no ha cargado ningun juego */}
      {games.length === 0 ? (
        // muestre una pantalla de carga
        // color para cambiarle el color a la pantalla de carga/spinner
        // size tamaño
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        // de lo contrario (ya se cargaron los juegos) se muestra
        // la lista de juegos con la opcion poder deslizar hacia abajo o hacia arriba

        // aunque no se note la diferencia con ScrollView
        // NO RENDERIZA todos los elementos aunque el usu los vea o no los vea
        // RENDERIZA los elementos solo cuando sean visibles para el usu
        <FlatList
          // de donde se van a sacar los juegos (de la lista games)
          data={games}
          // el id/key de cada juego en este caso es el nombre (slug)
          // el slug es como el nombre del juego games.com/game/GTA /game/Halo
          keyExtractor={(game) => game.slug}
          // recorrer juego por juego
          // game={item} pasarle todos los juegos como parametro
          // item es cada juego

          // sin animaciones
          // renderItem={({ item }) => <GameCard game={item} />}
          // con animaciones
          // hay que pasarle item y el index para que anime juego por juego
          // en vez de todo a la vez

          // index es el indice que tiene cada juego y cada cosa de cada juego
          // [juego1,juego2,juego3] el index de juego1 seria 0
          // FlatList proporciona los índices que se utilizan para escalonar
          // las animaciones.
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
