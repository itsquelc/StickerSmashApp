import { View, StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
}

export default function ImageViewer({imgSource}: Props) {
  return <Image source={imgSource} style={styles.image}/>;
}

  const styles = StyleSheet.create({
    image: {
     height: 440,
     width: 320,
     borderRadius: 18, 
    },
  })
