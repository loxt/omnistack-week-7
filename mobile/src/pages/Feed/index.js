import React, { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import {
  Container,
  FeedItem,
  FeedItemHeader,
  UserInfo,
  Name,
  Place,
  FeedImage,
  FeedItemFooter,
  Likes,
  Description,
  Hashtags
} from './styles';

import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function getFeed() {
      const response = await api.get('posts');

      setFeed(response.data);
    }

    getFeed().then(null);
  }, []);

  return (
    <Container>
      <FlatList
        data={feed}
        keyExtractor={(post) => post._id}
        renderItem={({ item }) => (
          <FeedItem>
            <FeedItemHeader>
              <UserInfo>
                <Name>{item.author}</Name>
                <Place>{item.place}</Place>
              </UserInfo>

              <Image source={more} />
            </FeedItemHeader>
            <FeedImage
              source={{
                uri: `http://192.168.100.148:3333/files/${item.image}`
              }}
            />
            <FeedItemFooter>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {}}>
                <Image style={{ marginRight: 8 }} source={like} />
                <Image style={{ marginRight: 8 }} source={comment} />
                <Image source={send} />
              </TouchableOpacity>

              <Likes>{item.likes} curtidas</Likes>
              <Description>{item.description}</Description>
              <Hashtags>{item.hashtags}</Hashtags>
            </FeedItemFooter>
          </FeedItem>
        )}
      />
    </Container>
  );
}
