// [id] ruta dinamica
// pagina de detalle para cuando le hagamos clic
// a cada uno de los juegos entre a otra pagina

import { Link, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

//
export default function Detail() {
  // el slug es como el nombre del juego /game/GTA /game/Halo
  // [...gameslug].js para una lista no un solo dato

  // el id se lo pasa el GameCard.jsx
  // <Link href={`/${game.slug}`} asChild>
  // y de [gameslug].js es decir tambien puede ser asi:
  // [id].js const { id } = useLocalSearchParams();
  const { gameslug } = useLocalSearchParams();

  //
  const [gameInfo, setGameInfo] = useState(null);

  //
  useEffect(() => {
    if (gameslug) {
      // gameslug es el id del juego que quiero que me muestre sus detalles
      // luego de obtener los detalles del juego guardo los detalles en gameInfo
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);
  return (
    // Screen para que el fondo sea de color negro
    <Screen>
      {/* Stack.Screen para darle su propio  header a "[id].js" */}
      {/* sin nada a la izq y nada a la der aparece el boton de atras por defecto  */}
      <Stack.Screen
        options={{
          // color de fondo del header
          headerStyle: { backgroundColor: "black" },
          // color de lo que esta dentro del header
          headerTintColor: "white",
          // no muestre nada a la izquierda
          headerLeft: () => {},
          // titulo del header (titulo de la pagina)
          headerTitle: "Detalles",
          // no mueste nada a la derecha
          headerRight: () => {},
        }}
      />
      {/* bg-black cada pagina (about,[id],index) hay ue ponerle el color negro */}
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-xl">
                {gameInfo.description}
              </Text>
            </View>
            {/*
            <Link href="/" className="text-blue-500">
              Volver atras
            </Link>
            */}
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
