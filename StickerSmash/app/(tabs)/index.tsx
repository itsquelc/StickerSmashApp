import { View, StyleSheet } from "react-native";
import ImageViewer from "@/assets/components/ImageViewer";
import Button from "@/assets/components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolher uma foto" theme="primary"/>
        <Button label="Usar uma foto"/>
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flex: 1,
    }, 
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
