import React from 'react';
import './ChatMaddle.css';
import MyChat from './MyChat/MyChat';

const ChatMaddle = () => {
    return (
        <div className="chat-maddle">
            <h1>Chat</h1>
            <MyChat/>
            </div>
    );
};

export default ChatMaddle;