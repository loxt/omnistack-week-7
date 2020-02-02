import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0 20px;
`;

export const HandleSelectImage = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-style: dashed;
  height: 42px;

  justify-content: center;
  align-items: center;
`;

export const Preview = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
`;

export const HandleSelectImageText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const TextInput = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ddd;
  padding: 15px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 4px;
  height: 42px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const ShareButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
