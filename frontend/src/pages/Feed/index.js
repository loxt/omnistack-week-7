import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('posts');

      setFeed(response.data);
    }

    getPosts().then(null);
  }, []);

  return (
    <section id="post-list">
      {feed.map(post => (
        <article key={post._id}>
          <header>
            <div className="user-info">
              <span>{post.author}</span>
              <span className="place">{post.place}</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src={`http://localhost:3333/files/${post.image}`} alt="Imagem" />

          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="Comment" />
              <img src={send} alt="Send" />
            </div>

            <strong>{post.likes} curtidas</strong>

            <p>
              {post.description}
              <span>{post.hashtags}</span>
            </p>
          </footer>
        </article>
      ))}
    </section>
  );
}
