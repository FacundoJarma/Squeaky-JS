import io from "socket.io-client";
const socket = io("http://localhost:3000");

export const send = (type, data, callback = () => {}) => {
  socket.emit("realTimeEvent", type, data, callback);
};

export const receive = (type, callback) => {
  socket.on("realTimeEvent", (receivedType, data) => {
    if (receivedType === type) return callback(data);
  });
};

export const fetchData = (type, callback) => {
  socket.emit("GETEvent", type, callback);
};

export const postData = (type, data, callback = () => {}) => {
  socket.emit("POSTEvent", type, data, callback);
};
