// los componentes son como piezas de una pagina
// que se van uniendo para formar la pagina
// como las piezas de un legos

import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

// con tailwind
import { styled } from "nativewind";

// usar el <Pressable></Pressable> pero con bootstrap
const StyledPressable = styled(Pressable);

// se le pasa game como parametro
// game es cada juego
export function GameCard({ game }) {
  return (
    // es para que cada juego sea un link a detalles
    // asChild para poder usar cualquier otra etiqueta dentro de Link

    // el archivo [id].js es una ruta dinámica que permite que
    // cualquier URL que coincida con el patrón /algo
    // (donde algo puede ser cualquier valor) sea manejado por el componente [id].js.
    <Link href={`/${game.slug}`} asChild>
      {/* para que el link sea clicable */}
      <StyledPressable
        className="active:opacity-70 border border-black
       active:border-white/50 mb-2 bg-slate-500/20 p-4 rounded-xl"
      >
        {/*
        // el slug es como el nombre del juego /game/GTA /game/Halo
        // styles.card
        */}
        <View key={game.slug} className="flex-row  gap-4" style={styles.card}>
          {/* */}
          {/* styles.image usar los estilos de image */}
          {/* todas las Image usan los estilos de image */}
          {/* cuando se repite un estilo en mejor usar styles y asi no poner
          stilos etiqueta por etiqueta
        */}
          <Image source={{ uri: game.image }} style={styles.image} />
          {/* flex-shrink PARA QUE TODO SE ACOMODE Y NADA QUEDE CORTADO */}
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {/* que maximo enseñe 100 letras */}
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

// index para que se vaya animando cada juego
// primero el de arriba luego el que le sigue...
// juego por juego

// sin index se animan todos los juegos de golpe
export function AnimatedGameCard({ game, index }) {
  // vamos a tener la opacidad/difuminacion
  // vamos a guardar en una referencia

  // y dentro de la referencia vamos a crear con Animated
  // la clase Animated es para hacer animaciones
  // current recuperar el valor actual 0/1

  // opacity se inicializa en 0 solo una vez
  // cada vez que el componente se renderiza/carga, el valor de opacity
  // se anima de 0 a 1 debido a la configuración en el useEffect.
  const opacity = useRef(new Animated.Value(0)).current;

  // El index se utiliza para establecer un retraso en la animación de cada elemento
  // La animación se aplica individualmente a cada instancia de
  // AnimatedGameCard basada en su índice.
  useEffect(() => {
    // le vamos a decir como tiene que ser la animacion
    Animated.timing(opacity, {
      // quiero que me cambies el vamor de la opacidad
      // vamos a empezar de 0 hasta 1
      toValue: 1,
      // la animacion permanece durante 500 milisegundos
      duration: 500,
      // cuanto timpo tiene que tardar la animacion en empezar
      delay: index * 500,
      // que utilice el driver nativo
      // el drive nativo da mejor rendimiento
      // pero puede dar problemas y se puede quitar
      useNativeDriver: true,
      // start inicializar la animacion nada mas entrar
    }).start();
    // (1) cada vez que cambien estas dependencias: opacity, index
    // (se muestre juego por juego) se vuelve a ejecutar el useEffect

    // index es el indice de cada juego y cada juego se va renderizando juego por juego
    // [juego1,juego2,juego3] el index de juego1 seria 0

    // opacity no cambia de 0 a 1 por sí mismo, sino que se anima de 0 a 1
    // debido a la configuración de la animación dentro del useEffect.
    // El useEffect se ejecuta principalmente debido al cambio
    // en el index de cada elemento cuando el componente se monta.
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      {/*el mismo elemento GameCrud que muestra los datos de cada juego
      pero envuelto por la animacion
      */}
      <GameCard game={game} />
    </Animated.View>
  );
}

// estilos sin className
const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },

  image: {
    width: 107,
    height: 147,
    resizeMode: "contain",
    borderRadius: 10,
  },

  title: {
    // tamaño de letra
    fontSize: 20,
    // en negrita
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    color: "#eee",
  },

  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
