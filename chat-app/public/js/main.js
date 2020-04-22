const chatForm = document.getElementById("chat-form");
const chatmessages = document.querySelector(".chat-messages");
const roomnameElem = document.getElementById("room-name");
const roomusersElem = document.getElementById("users");


//For parsing username and room from url
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

//creating a connection in client-side and begin a connection session in server side.
const socket = io();

//send parsed username to server-side
socket.emit("joinRoom", {username, room});


socket.on("roomNameAndusers", ({roomName, roomusers}) => {
    const outputRoomName = (roomName) => {
        roomnameElem.innerText = roomName;
    };
    const outputRoomusers = (roomusers) => {
        liElem.innerHTML = `${roomusers.map((user) => {`<li>${user.username}</li>`}).join("")}`;
    };
    outputRoomName(roomName);
    outputRoomusers(roomusers);
});

//Session which handles a message sent from server-side , recives a MessageFormat object as parameter
socket.on("message", message => {

    //Function which when called injects a styled-div with message content to document object
    const outputMessage = () => {
        const div = document.createElement('div');
        div.classList.add("message");
        div.innerHTML = `<p class="meta">${message.username} <span> ${message.time}</span></p>
                        <p class="text">
                        ${message.text}
                        </p>`;
        document.querySelector(".chat-messages").appendChild(div);
    };

    //Calling the div injection function
    outputMessage();

    //Scrollbar will come to bottom of the block for each message object recieved from the server
    chatmessages.scrollTop = chatmessages.scrollHeight;
});

//Handling Message submit
chatForm.addEventListener("submit", e => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit("message", msg);
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
});

