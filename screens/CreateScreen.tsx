import React, { useState,useEffect } from "react";
import { Text, View, Image, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateScreen () {
  const [image, setImage] = useState(null);

  // Si on a pas la permission
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  //On sélectionne une image dans la gallerie
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri); // visiblement erreur mais fonctionne quand même 
    }
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={styles.text}>Crée une tenue en partant de zéro !</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>          
      <Text>Ouvrir la galerie photo</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 30,
    padding: 20,
  },
  text: {
    margin: 20,
    textAlign: "center",
    fontSize: 16,
  },
});