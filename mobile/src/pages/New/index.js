import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';

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
  const [image, setImage] = useState(null);

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

    const imagem = new FormData();
    imagem.append('uri', imagePicker.uri);
    imagem.append('type', imagePicker.type);
    imagem.append('name', imagePicker.uri.split('/').pop());
    imagem.append('filename', imagePicker.uri.split('/').pop());
    imagem.append('image', { filename: imagePicker.uri.split('/').pop() });

    setImage(imagem);
  };

  async function handleSubmit() {
    await api
      .post(
        'posts',
        {
          image,
          author,
          description,
          hashtags,
          place
        },
        {
          method: 'POST',
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      )
      .catch((err) => console.log(err));
  }

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

      <ShareButton
        onPress={() => {
          handleSubmit().then(navigation.navigate('Feed'));
        }}
      >
        <ShareButtonText>Compartilhar</ShareButtonText>
      </ShareButton>
    </Container>
  );
}
