import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  // dos formas de tener navegacion por pestañas
  // o apilando navegacion por paginas
  // 1:27:53
  // la navegacion por pestañas es compatible con la navegacion por paginas
  // es decir si yo voy al detalle de un juego podria hacer que las pestañas
  // todavia funcionen y puede ser que no osea que cuando me voy a otra pagina
  // las pestañas desaparecen

  // dos navegaciones diferentes una donde estamos apilando la navegacion
  // y otro por pestañas
  // por pestañas no recarga es decir puedo ir de una pestaña a otra sin que se vuelva
  // a recargar el contenido de cada pestaña
  // simplemente no lo estas viendo

  // como pestañas de chrome pudo tener dos paginas abiertas y cada vez que voy de una
  // a otra no se recargan las paginas
  return (
    <Tabs
      // tabs da un header con el nombre de la pagina y un fotter/barra de navegacion
      // con botones/iconos para ir de pestaña en pestaña

      // screenOptions editar el header y la barra de navegacion
      screenOptions={{
        // false sin header
        // headerShown: false,
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        // tabBar es fotter con los botones de home y About
        tabBarStyle: { backgroundColor: "black" },
        // cambiar los colores de los iconos/botones
        // por defecto es azul y gris
        // cuando esta en home es yellow y cuando no es gris
        tabBarActiveTintColor: "yellow",
        // que el header sea tranparente
        // headerTransparent: true,
      }}
    >
      <Tabs.Screen
        // se le esta asignado index.js
        name="index"
        options={{
          // que el  la pestaña de index se llame Home
          title: "Home",
          // asiganar a la pestaña index el boton/icono Home
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        // about.js
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
