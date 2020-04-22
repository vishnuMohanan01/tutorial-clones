const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const messageFormat = require("./utils/MessageFormat");
const {userJoin, getuserById, getRoomusers, userLeave} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName = "ChatCord";

app.use(express.static(path.join(__dirname, "public")));

//Runs when a client connects, connection session for each clients
io.on('connection', (socket) => {
    let id;
    //Receiving the username and room from the client 
    socket.on("joinRoom", ({username, room}) => {
        const id = socket.id;
        const user = userJoin({id, username, room});
        socket.join(user.room);
        //Sending a welcome note as message which is recieved by client and rendered by outputMessage document injection function
        socket.emit("message", messageFormat(botName, "Welcome to Chatcord"));
        //Notifying all other connected clients about the connection of a new client
        socket.broadcast.to(user.room).emit("message", messageFormat(botName, `${user.username} has joined the chat...`));
        console.log(getRoomusers(user.room));
        socket.emit("roomNameAndusers", {roomName : user.room, roomusers : getRoomusers(user.room)});
    });
    //Recieving message as string from the client
    socket.on("message", (messageText) => {
        const user = getuserById(id);
        //Sending messagetext, username and time to client as an object which is returned by messageFormat function
        socket.to(user.room).emit("message", messageFormat(user.username, messageText));
        socket.emit("message", messageFormat('You', messageText));
    });
    id = socket.id;
    //Handling client disconnect event
    socket.on("disconnect", () => {
        const user = userLeave(id);
        if (user) {
            //Notifying all other users about the current client disconnect.
            io.to(user.room).emit("message", messageFormat(botName, `${user.username} left the chat...`));
            socket.emit("roomNameAndusers", {roomName : user.room, roomusers : getRoomusers(user.room)});
        }
    });
});


const port = process.env.PORT || 4000;
server.listen(port , () => {
    console.log(`listning to port: ${port}`)
});