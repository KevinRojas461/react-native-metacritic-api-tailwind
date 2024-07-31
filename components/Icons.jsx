// es mejor que todos los iconos sean de FontAwesome6 o FontAwesome pero de solo uno
import { FontAwesome6 } from "@expo/vector-icons";

//
import { FontAwesome } from "@expo/vector-icons";

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={32} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={32} color="white" {...props} />
);

export const InfoIcon = (props) => (
  <FontAwesome name="info" size={32} color="white" {...props} />
);
