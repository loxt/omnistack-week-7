import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const FeedItem = styled.View`
  margin-top: 20px;
`;

export const FeedItemHeader = styled.View`
  padding: 0 15px 0 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserInfo = styled.View``;

export const Name = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const Place = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
`;

export const FeedImage = styled.Image`
  width: 100%;
  height: 400px;
  margin: 15px 0 15px 0;
`;

export const FeedItemFooter = styled.View`
  padding: 0 15px 0 15px;
`;

export const Likes = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  color: #000;
`;

export const Description = styled.Text`
  line-height: 18px;
  color: #000;
`;

export const Hashtags = styled.Text`
  color: #7159c1;
`;
