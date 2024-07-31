import { View } from "react-native";

// para que no haya que poner fondo negro en todas las paginas
export function Screen({ children }) {
  return <View className="flex-1 bg-black pt-4 px-2">{children}</View>;
}
