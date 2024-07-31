// es como el hueco
import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

// layout es lo que envuelve toda la app
export default function Layout() {
  /*
  Slot se puede usar como para video juegos
  import { Slot } from "expo-router";
  return (
    <View className="flex-1 bg-black justify-center items-center">
      
      <Slot />
    </View>
  );
  */
  return (
    <View className="flex-1">
      {/* trae el index 
      rederiza el index y el index renderza main

      Stack no se puede estilizar toca desde el Main y cada pagina (about,[id],index)
      <View
      className="bg-black"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >


      utiliza la navegacion nativa del dispositivo (cada dispositivo 
      tiene su forma de ir atras) y no vulve a cargar los datos cuando ya se han cargado
      tambien agrega un header nativo para navegar y ir atras
      */}
      <Stack
        // por defecto el header va a ser el mismo en todas las paginas
        screenOptions={{
          // cambiar el color de fondo del header
          headerStyle: { backgroundColor: "black" },
          // cambiar el color del contenido del header
          headerTintColor: "white",
          // el titulo del header este vacio por defecto es titulo es index
          headerTitle: "",
          // en la parte izq del header quiero el logo
          headerLeft: () => <Logo />,
          // en la parte derecha del header quiero el infoIcon
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                {/* segunda forma en about */}
                {/* primera forma en Main */}
                {/*si se esta presionando la opcacidad sera 0.5 y si no sera 1 */}
                {({ pressed }) => (
                  <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
