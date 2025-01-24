// Initialize Socket.io connection
const socket = io();

// Elements
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const chatMessages = document.getElementById('chatMessages');
const userList = document.getElementById('userList');

// Emit message to server when the send button is clicked
sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
});

// Listen for messages from the server and display them
socket.on('message', (data) => {
    const div = document.createElement('div');
    div.classList.add('message');
    if (data.user === 'You') {
        div.classList.add('you');
    }
    div.textContent = `${data.user}: ${data.message}`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll to the latest message
});

// Update the list of online users
socket.on('userList', (users) => {
    userList.innerHTML = '';  // Clear the user list
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });
});

// Simulate message from another user (for demo purposes)
socket.on('chatMessage', (msg) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = msg;
    chatMessages.appendChild(div);
});
