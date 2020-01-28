import Post from '../models/PostModel';
import { emitLike } from '../websocket';

export default {
  async store(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    emitLike(post);

    return res.json(post);
  },
};
