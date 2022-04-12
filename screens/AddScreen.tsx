import React, { Component ,useState,useEffect} from "react";
import { Text, View, Button, Image, Platform } from "react-native";
import { HomeScreenProps } from "../navigation/app-stacks";
import * as ImagePicker from "expo-image-picker"

export default function AddScreen () {
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
      setImage(result.uri); // erreur mais fonctionne quand même 
    }
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Créer une tenue</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
