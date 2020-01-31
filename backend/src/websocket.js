import socketio from 'socket.io';

let io;

exports.setupWebSocket = server => {
  io = socketio(server);
};

exports.emitPost = post => {
  io.emit('post', post);
};

exports.emitLike = post => {
  io.emit('like', post);
};
