import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  ShareButton,
  ShareButtonText,
  TextInput,
  HandleSelectImage,
  HandleSelectImageText,
  Preview
} from './styles';

export default function New({ navigation }) {
  const [author, setAuthor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [preview, setPreview] = useState(null);

  const selectPicture = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (!permissionResult.granted) {
      console.log('User does not permited!');
    }

    await ImagePicker.requestCameraPermissionsAsync();
    const imagePicker = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      base64: true
    });

    const previewUri = {
      uri: `data:image/jpeg;base64,${imagePicker.base64}`
    };
    setPreview(previewUri);
  };

  return (
    <Container>
      <HandleSelectImage
        onPress={() => {
          selectPicture().then(null);
        }}
      >
        <HandleSelectImageText>Selecionar imagem</HandleSelectImageText>
      </HandleSelectImage>

      {preview && <Preview source={{ uri: preview.uri }} />}

      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Nome do autor'
        placeholderTextColor='#999'
        value={author}
        onChangeText={(getAuthor) => setAuthor(getAuthor)}
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Local da foto'
        placeholderTextColor='#999'
        value={place}
        onChangeText={(getPlace) => setPlace(getPlace)}
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Descrição'
        placeholderTextColor='#999'
        value={description}
        onChangeText={(getDescription) => setDescription(getDescription)}
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Hashtags'
        placeholderTextColor='#999'
        value={hashtags}
        onChangeText={(getHashtags) => setHashtags(getHashtags)}
      />

      <ShareButton onPress={() => navigation.navigate('Feed')}>
        <ShareButtonText>Compartilhar</ShareButtonText>
      </ShareButton>
    </Container>
  );
}
