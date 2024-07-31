import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  // si la puntuacion es muy buena sale en verde, regular amarillo, mala rojo
  const getColors = () => {
    // dividir la puntuacion con la puntuacion maxima
    // la puntuacion maxima (maxScore) es 100
    const porcentaje = (score / maxScore) * 100;
    if (porcentaje < 97) return "bg-red-500";
    if (porcentaje < 98) return "bg-yellow-500";
    // si no se cumple ninguna de las anteriores
    return "bg-green-500";
  };

  //
  const className = getColors();
  return (
    <View
      // rounded-full que el texto este dentro de un circulo
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
